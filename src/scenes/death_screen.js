class death_screen extends Phaser.Scene{


    constructor(){
        super("death_screen");
    }

    preload(){
        this.load.image("elemental","./assets/elemental_background.png");

    }

    create(){
        this.cameras.main.fadeIn(1000);
        this.add.image(game.config.width/2,game.config.height/2,"elemental").setScale(40,40).setOrigin(0.5,0.5);
        this.add.text(game.config.width/2,110,"You died").setOrigin(0.5).setFontSize(30).setColor("#FF0000");
        this.add.text(game.config.width/2,160,"Score: " + score).setOrigin(0.5).setFontSize(30).setColor("#FFFF00");

        const restartButton = new TextButton(this,game.config.width/2-10,210,"Restart",{fontSize: 30},()=> this.scene.start("game_screen")).setOrigin(0.5);
        const menuButton = new TextButton(this,game.config.width/2-10,260,"Menu",{fontSize: 30},()=> this.scene.start("Menu")).setOrigin(0.5);

    }


}