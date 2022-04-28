
class ColorPicker {

    static CURRENT_COLOR = 0;

    constructor(){       
        this.scene = game.scene.getScene("game_screen");
        game.scene.getScene("game_screen").cameras.main.setBackgroundColor("84D8E7");
        this.prevColorIndex = 2;
        this.colors = ["E79685","A0E785","84D8E7"]; // Red, green, and blue respectively
        this.timedEvent = this.scene.time.addEvent({delay: 1000, callback: this.onEvent, callbackScope: this});

    }
    
    onEvent(){

        let currentColor = Phaser.Math.Between(0,2);
        while(currentColor==this.prevColorIndex){
            currentColor = Phaser.Math.Between(0,2);
        }
        this.prevColorIndex=currentColor;
        ColorPicker.CURRENT_COLOR= currentColor;
        //this.scene.cameras.main.setBackgroundColor(this.colors[currentColor]);
        this.timedEvent.reset({delay: Phaser.Math.Between(2,7)*1000, callback: this.onEvent, callbackScope: this, repeat: 1});
    }

}