import Phaser from 'phaser';
import tiles from '../assets/map/spritesheet.png';
import player from '../assets/map/orc-0.png';
import map from '../assets/map/map.json';
import star from '../assets/ystar.png';
import hit from '../assets/audio/hit.wav';

class WorldScene extends Phaser.Scene { // eslint-disable-line no-undef
  constructor() {
    super('WorldScene');
  }

  preload() {
    this.load.image('tiles', tiles);
    this.load.tilemapTiledJSON('map', map);
    this.load.spritesheet('player', player, {
      frameWidth: 42.6,
      frameHeight: 33,
      endFrame: 8,
    });
    this.load.image('star', star, {
      frameWidth: 15,
      frameHeight: 15,
    });
    this.load.audio('hit', hit);
  }

  create() {
    this.hitSound = this.sound.add('hit');

    const map = this.make.tilemap({
      key: 'map',
    });

    const tiles = map.addTilesetImage('spritesheet', 'tiles');

    const grass = map.createStaticLayer('Grass', tiles, 0, 0); // eslint-disable-line no-unused-vars
    const obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);
    this.player = this.physics.add.sprite(200, 100, 'player', 3);
    this.player.setSize(43, 33, false);
    this.player.flipX = false;
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.player.setCollideWorldBounds(true);
    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;

    this.counter = 60;

    this.text = this.add.text(0, 0, 'Counter: 0', {
      font: '16px Arial',
      fill: '#ffffff',
      align: 'center',
    });
    this.text.fixedToCamera = true;
    this.time.addEvent({
      delay: 1000,
      callback: this.updateCounter,
      callbackScope: this,
      loop: true,
    });

    this.textScore = this.add.text((this.cameras.main.scrollX + this.cameras.main.width) - 75, -1, 'Score: 0', {
      font: '16px Arial',
      fill: '#ffffff',
      align: 'center',
    });

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [0, 1, 2, 3, 4],
      }),
      frameRate: 10,
      repeat: -1,
      flipX: -1,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [0, 1, 2, 3, 4],
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [0, 1, 2, 3, 4],
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [0, 1, 2, 3, 4],
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.player, obstacles);

    this.spawns = this.physics.add.group();

    for (let i = 0; i < 30; i += 1) {
      const x = Phaser.Math.RND.between(0, this.physics.world.bounds.width); // eslint-disable-line no-undef, max-len
      const y = Phaser.Math.RND.between(0, this.physics.world.bounds.height); // eslint-disable-line no-undef, max-len
      this.spawns.create(x, y, 'star', 0);
      this.spawns.children.entries[i].scale = 0.02;
    }

    this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
  }

  update(time, delta) { // eslint-disable-line no-unused-vars
    this.player.body.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-80);
      this.player.flipX = true;
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(80);
      this.player.flipX = false;
    }

    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-80);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(80);
    }

    if (this.cursors.left.isDown) {
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.anims.play('right', true);
    } else if (this.cursors.up.isDown) {
      this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
      this.player.anims.play('down', true);
    } else {
      this.player.anims.stop();
    }

    this.text.x = this.cameras.main.scrollX;
    this.text.y = this.cameras.main.scrollY;

    this.textScore.x = (this.cameras.main.scrollX + this.cameras.main.width) - this.textScore.width;
    this.textScore.y = this.cameras.main.scrollY;
  }

  onMeetEnemy(player, zone) {
    zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width); // eslint-disable-line no-undef, max-len
    zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height); // eslint-disable-line no-undef, max-len

    this.cameras.main.flash(300);

    this.game.score += 1;

    this.textScore.setText(`Score:${this.game.score}`);
    this.person = {
      score: this.game.score,
      user: this.game.playerName,
    };

    this.jsonedPerson = JSON.stringify(this.person);
    this.hitSound.play();
  }

  async updateCounter() {
    this.counter -= 1;

    this.text.setText(`Counter: ${this.counter}`);

    if (this.counter < 1) {
      await this.gameData(this.jsonedPerson);
      this.scene.start('GameOverScene');
    }
  }

  async gameData(val) { // eslint-disable-line class-methods-use-this
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UWGWN7rrI8dxg3RoMxko/scores/';

    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
      body: val,
    }).then(response => response);
  }
}

export default WorldScene;