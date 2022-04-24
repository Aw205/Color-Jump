class Background {

    constructor(){

        this.scene = game.scene.getScene("game_screen");
      

        this.bg = new Phaser.GameObjects.Image(game.scene.getScene("game_screen"),0,0,"mountain_bg");
        this.bg.displayHeight=game.config.height;
        this.bg.displayWidth= game.config.width;
        this.bg.setOrigin(0,0);
        this.scene.add.existing(this.bg);

        this.mountains = new Phaser.GameObjects.TileSprite(this.scene,0,300,game.config.width,0,"mountains");
        this.mountains.setOrigin(-0.1,0);
        this.scene.add.existing(this.mountains);
    }

    update(){

        this.mountains.tilePositionX+=0.5;

    }


}