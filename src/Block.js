class Block extends Phaser.Physics.Arcade.Sprite{

    static LENGTH = 25;
    static WIDTH = 25;

    constructor(scene,x,y,texture){
        super(scene,x,y,texture);     

        
        this.setScale(Block.LENGTH/this.width,Block.LENGTH/this.height);
        this.setOrigin(0,1);
        this.scene.physics.add.existing(this);
        this.setImmovable(true);
       // this.setVelocityX(-50);
    }







}