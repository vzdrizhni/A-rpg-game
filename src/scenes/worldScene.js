import 'phaser'
import tiles from '../assets/map/spritesheet.png'
import player from '../assets/map/orc-0.png'
import map from '../assets/map/map.json'
import star from '../assets/ystar.png'
import GameOverScene from './gameOverScene'
import game from '../index.js'

class WorldScene extends Phaser.Scene {

    constructor() {
        super("WorldScene");
        // this.score = 0;
    }

    preload() {
        this.load.image('tiles', tiles);
        this.load.tilemapTiledJSON('map', map);
        this.load.spritesheet('player', player, {
            frameWidth: 42.6,
            frameHeight: 33,
            endFrame: 8
        });
        this.load.image('star', star, {
            frameWidth: 15,
            frameHeight: 15
        });
    }
    create() {
        var map = this.make.tilemap({
            key: 'map'
        });
        let game = game;
        console.log(this);

        var tiles = map.addTilesetImage('spritesheet', 'tiles');

        var grass = map.createStaticLayer('Grass', tiles, 0, 0);
        var obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
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
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        });
        this.text.fixedToCamera = true;
        this.time.addEvent({ delay: 1000, callback: this.updateCounter, callbackScope: this, loop: true });
        
        // this.score = 0;
        
        this.textScore = this.add.text((this.cameras.main.scrollX + this.cameras.main.width) -75, -1, 'Score: 0', {
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', {
                frames: [0, 1, 2, 3, 4]
            }),
            frameRate: 10,
            repeat: -1,
            flipX: -1
        });

        // animation with key 'right'
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', {
                frames: [0, 1, 2, 3, 4]
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', {
                frames: [0, 1, 2, 3, 4]
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', {
                frames: [0, 1, 2, 3, 4]
            }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(this.player, obstacles);

        this.spawns = this.physics.add.group();

        for (var i = 0; i < 30; i++) {
            var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
            var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
            this.spawns.create(x, y, 'star', 0);
            this.spawns.children.entries[i].scale = 0.02;
        }

        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);

        if (this.counter < 1) {
            this.scene.start("GameOverScene");
        }
    }

    update(time, delta) {
        this.player.body.setVelocity(0);

        // Horizontal movement
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-80);
            this.player.flipX = true;
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(80);
            this.player.flipX = false;
        }

        // Vertical movement
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
        // we move the zone to some other location
        zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);

        // start battle 
        this.cameras.main.flash(300);

        this.game.score += 1;
    
        this.textScore.setText('Score:' + this.game.score);

    }

    updateCounter() {

        this.counter -= 1;
    
        this.text.setText('Counter: ' + this.counter);

        if (this.counter < 1) {
            this.scene.start("GameOverScene");
        }
    
    }
};

export default WorldScene