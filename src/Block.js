class Block extends Phaser.Physics.Arcade.Sprite{

    static LENGTH = 50;
    static WIDTH = 50;

    constructor(scene,x,y,texture){
        super(scene,x,y,texture);     

        this.setScale(0.625,0.625);
        this.setOrigin(0,1);
        this.scene.physics.add.existing(this);
        this.setImmovable(true);
    }







}