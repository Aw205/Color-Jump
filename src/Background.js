class Background extends Phaser.GameObjects.TileSprite {

    constructor(scene,x,y,width,height,texture){

        super(scene,x,y,width,height,texture);
        this.setOrigin(0,0);
        this.setDisplaySize(640,480);
        this.scene.add.existing(this);
    }

   preUpdate(){   
       this.tilePositionX+=0.01;
        
   }

}