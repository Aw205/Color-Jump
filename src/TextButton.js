class TextButton extends Phaser.GameObjects.Text{

    constructor(scene,x,y,text,style,callback){

        super(scene,x,y,text,style);
        this.setInteractive({useHandCursor: true})
            .on("pointerdown",()=> callback())
            .on("pointerover",()=> this.enterButtonHoverState())
            .on("pointerout",()=> this.enterButtonRestState());

        this.scene.add.existing(this);
             
    }


      enterButtonHoverState() {
        this.setStyle({ fill: "#ffff00"});
      }
    
      enterButtonRestState() {
        this.setStyle({ fill: "#ffffff"});
      }
    
      enterButtonActiveState() {
        this.setStyle({ fill: '#0ff' });
      }

}