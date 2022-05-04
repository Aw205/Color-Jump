class Block extends Phaser.Physics.Arcade.Sprite{

    static LENGTH = 25;
    static WIDTH = 25;

    constructor(scene,x,y,texture,initialTint,finalTint,color){

        super(scene,x,y,texture); 

        this.color = color;
        this.initialTint = initialTint;
        this.finalTint = finalTint;
        this.setTint(this.initialTint);

        this.speed = 130;

        this.scene.physics.add.existing(this);

        this.setScale(Block.LENGTH/this.width,Block.LENGTH/this.height)
            .setOrigin(0,1)
            .setImmovable(true)
            .setFrictionX(0)
            .setVelocityX(-130);   
      
        let collider = this.scene.physics.add.collider(this,player);
        collider.collideCallback= this.onCollision;
        collider.callbackContext=this;

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
        if(this.x<-50){
            this.destroy(true);
        }
    }

    onCollision(block){

        if(block.color==ColorPicker.CURRENT_COLOR){

            window.player.disableBody(); // prevent additional collisions from triggering
            this.scene.cameras.main.fadeOut(1000);    
            this.scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {  
                game.scene.stop("HUD");
                game.scene.start("death_screen");
            });
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
