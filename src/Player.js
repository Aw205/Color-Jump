class Player extends Phaser.Physics.Arcade.Sprite{

    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setGravityY(800);
        this.scene.input.on("pointerdown",this.jump,this);
        this.setScale(25/this.width,25/this.height);
        
    }

    preUpdate(){

        this.setVelocityX(0); // in case player has been pushed by block
    }

    jump(){
        this.setVelocityY(-350);
    }

}