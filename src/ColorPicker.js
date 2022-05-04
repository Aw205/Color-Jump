
class ColorPicker {

    static CURRENT_COLOR = 0;
    static FUTURE_COLOR = 0;
    static timer_progress =0;

    constructor(){       
        this.scene = game.scene.getScene("game_screen");
        //game.scene.getScene("game_screen").cameras.main.setBackgroundColor("84D8E7");
        this.timedEvent = this.scene.time.addEvent({delay: 1000, callback: this.onEvent, callbackScope: this});
    }

    update(){

        ColorPicker.timer_progress=this.timedEvent.getRemainingSeconds();
    }
    
    onEvent(){

        ColorPicker.CURRENT_COLOR = ColorPicker.FUTURE_COLOR;
        ColorPicker.FUTURE_COLOR = Phaser.Math.Between(0,2);
        while(ColorPicker.FUTURE_COLOR== ColorPicker.CURRENT_COLOR){
            ColorPicker.FUTURE_COLOR = Phaser.Math.Between(0,2);
        }
        this.timedEvent.reset({delay: Phaser.Math.Between(5,10)*1000, callback: this.onEvent, callbackScope: this, repeat: 1});
    }
}