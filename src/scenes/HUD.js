class HUD extends Phaser.Scene{

    constructor(){
        super("HUD");
    }

    create(){

        this.colors = [0x8B0000,0x2E7A1E,0x1E90FF]; //red green blue
        this.timeElapsed=0;
        this.time.addEvent({delay: 1000,loop: true, callback: ()=> this.timeElapsed++});
        this.createColorIndicator();
        this.scoreText= this.add.text(game.config.width-100,30,"Score: ");
        this.timeText= this.add.text(game.config.width-150,50," Time left: ");
        

    }

    createColorIndicator(){


        this.arrow = new Phaser.GameObjects.Image(this,game.config.width-77,80,"arrow");

        this.currentColor = new Phaser.GameObjects.Image(this,game.config.width-105,80,"block");
        this.currentColor.setScale(Block.LENGTH/this.currentColor.width,Block.LENGTH/this.currentColor.height);
        this.currentColor.setTintFill(0x960B0B);
        this.futureColor = new Phaser.GameObjects.Image(this,game.config.width-50,80,"block");
        this.futureColor.setTintFill(0x960B0B);
        this.futureColor.setScale(Block.LENGTH/this.futureColor.width,Block.LENGTH/this.futureColor.height)

        this.add.existing(this.currentColor);
        this.add.existing(this.futureColor);
        this.add.existing(this.arrow);
    }


    update(time,delta){

        this.currentColor.setTintFill(this.colors[ColorPicker.CURRENT_COLOR]);
        this.futureColor.setTintFill(this.colors[ColorPicker.FUTURE_COLOR]);

        this.scoreText.setText("Score: " + this.timeElapsed);
        this.timeText.setText("Time left: " + ColorPicker.timer_progress.toFixed(1));
        
    }


}