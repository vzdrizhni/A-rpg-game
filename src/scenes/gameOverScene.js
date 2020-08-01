import TweenHelper from '../helperClasses/tweenHelper.js'

class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }

    async create() {

        this.result = await this.gameData();
        this.result = this.result.result;

        this.text = this.add.text(0, 0, `Score: ${this.game.score}`, {
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        });

        this.textName = this.add.text(0, 20, `Name: ${this.game.playerName}`, {
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        });

        this.textRestart = this.add.text(this.cameras.main.width / 4 + 10, this.cameras.main.width / 2 + 20, `Press space to restart`, {
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        });        

        this.add.text(this.cameras.main.width / 4 + 20, this.cameras.main.width / 4 - 20, 'Leader Board:', {
            color: 'white',
            fontSize: '16px ',
        });

        this.result.sort((x, y) => y.score - x.score);
        for (let i = 0; i < 5; i += 1) {
            if (this.result[i] !== undefined) {
                this.add.text(this.cameras.main.width / 4, this.cameras.main.width / 4 + (12 * i),
                    `${i + 1}. ${this.result[i].user} -- ${this.result[i].score}`, {
                        color: 'white',
                        fontSize: '16px '
                    });
            }
        };

        TweenHelper.flashElement(this, this.textRestart);
    };

    update(time, delta) {
        this.cursor = this.input.keyboard.createCursorKeys();
        // console.log(this.cursor.up);
        if (this.cursor.space.isDown) {
            this.game.score = 0;
            this.scene.start("WorldScene");
        }
    }

    async gameData() {
        const url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UWGWN7rrI8dxg3RoMxko/scores/";

        return fetch(url, {
            method: "GET",
            mode: 'cors',
            headers: {
                Accept: 'Application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json()
        }).then(content => content);
    }


}

export default GameOverScene