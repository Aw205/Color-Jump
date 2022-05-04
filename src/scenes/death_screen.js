class death_screen extends Phaser.Scene{


    constructor(){
        super("death_screen");
    }

    create(){
        this.cameras.main.fadeIn(1000);
        this.add.text(game.config.width/2,50,"You died").setOrigin(0.5);
        const restartButton = new TextButton(this,game.config.width/2,200,"Restart",null,()=> this.scene.start("game_screen")).setOrigin(0.5);
        //const menuButton = new TextButton(this,game.config.width/2,350,"Return to Menu",null,()=> this.scene.start("Menu")).setOrigin(0.5);

    }


}