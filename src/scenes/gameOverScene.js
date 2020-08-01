class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }

    async create() {

        this.text = this.add.text(0, 0, `Score: ${this.game.score}`, {
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        });

        this.textName = this.add.text(0, 30, `Name: ${this.game.playerName}`, {
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        });

        this.result = await this.gameData();
        console.log(this.result);

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