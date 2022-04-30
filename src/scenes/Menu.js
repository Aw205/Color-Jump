class Menu extends Phaser.Scene{

    constructor(){

        super("Menu");
    }

    preload(){
        this.load.audio("music","./assets/game_music.ogg"); 

    }

    create(){

        this.sound.play("music",{loop: true});
        this.add.text(game.config.width/2,50,"COLOR JUMP").setOrigin(0.5);
        const tutorialButton = new TextButton(this,game.config.width/2,200,"How To Play",null,()=> this.scene.start("Tutorial")).setOrigin(0.5);
        const startButton = new TextButton(this,game.config.width/2,350,"Start",null,()=> this.scene.start("game_screen")).setOrigin(0.5);
    
    }

    update(){


    }



}