class Background {

    constructor(){

        this.scene = game.scene.getScene("game_screen");
    
        this.bg = new Phaser.GameObjects.Image(this.scene,0,0,"background");
        this.bg.displayHeight=game.config.height;
        this.bg.displayWidth= game.config.width;
        this.bg.setOrigin(0,0);
        this.scene.add.existing(this.bg);

    }

    update(){

    }


}