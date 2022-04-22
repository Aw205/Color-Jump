class Player extends Phaser.Physics.Arcade.Sprite{

    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setGravityY(400);
        this.scene.input.on("pointerdown",this.jump,this);
        this.setScale(.05);
        
    }

    jump(){
        this.setVelocityY(-200);
    }

}