class Tutorial extends Phaser.Scene{

    constructor(){
        super("Tutorial");
    }

    preload(){
        this.load.image("tutorial_background","./assets/tutorial.png");

    }

    create(){

        let background =  this.add.image(game.config.width/2,game.config.height/2,"tutorial_background");
        const returnButton = new TextButton(this,game.config.width/2,450,"Return to Menu",{fontSize: 30},()=> this.scene.start("Menu")).setOrigin(0.5);

    }




}