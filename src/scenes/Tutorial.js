class Tutorial extends Phaser.Scene{

    constructor(){
        super("Tutorial");
    }

    preload(){


    }

    create(){

        this.add.text(game.config.width/2,50,"Use left click to JUMP").setOrigin(0.5);
        this.add.text(game.config.width/2,100,"Avoid blocks with same color as the indicator").setOrigin(0.5);

    }




}