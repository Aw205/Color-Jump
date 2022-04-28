class Block extends Phaser.Physics.Arcade.Sprite{

    static LENGTH = 25;
    static WIDTH = 25;

    constructor(scene,x,y,texture,initialTint,finalTint,color){

        super(scene,x,y,texture); 
        this.color = color;
        this.initialTint = initialTint;
        this.finalTint = finalTint;

        this.setTint(this.initialTint);

        this.setScale(Block.LENGTH/this.width,Block.LENGTH/this.height);
        this.setOrigin(0,1);
        this.scene.physics.add.existing(this);
        this.setImmovable(true);
        this.setFrictionX(0);
        this.setVelocityX(-130);   

        this.createTween();

    }

    preUpdate(time,delta){

        if(this.color==ColorPicker.CURRENT_COLOR){
            this.tween.play();
        }
        else{
            this.tween.pause();
            this.setTint(this.initialTint);
        }

        if(this.x<-100){
            this.destroy(true);
        }
    }

    createTween(){

        const startingColor = Phaser.Display.Color.ValueToColor(this.initialTint);
        const endingColor = Phaser.Display.Color.ValueToColor(this.finalTint);
        this.tween = this.scene.tweens.addCounter({
            from: 0,
            to: 100,
            duration: 1000,
            ease: Phaser.Math.Easing.Linear,
            repeat: -1,
            yoyo: true,
            paused: true,
            onUpdate: tween =>{
                const index = tween.getValue();
                const current = Phaser.Display.Color.Interpolate.ColorWithColor(startingColor,endingColor,100,index);
                const color = Phaser.Display.Color.GetColor(current.r,current.g,current.b);
                this.setTint(color);
            }
        });
    }
    
}
