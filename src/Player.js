class Player extends Phaser.Physics.Arcade.Sprite{

    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame); // Player class should not be sprite anymore but I'll fix later

        this.sprite=this.scene.physics.add.sprite(200,config.height/2-100,"rolling",0); // animations don't seem to be played if using containers, so have to resort to this way
        this.scene.add.existing(this.sprite);                                           
        this.sprite.play("roll");
        this.sprite.setGravityY(800);
        this.isDead=false;
        this.sprite.setScale(25/this.width,25/this.height);
        this.sprite.setCollideWorldBounds(true);
        
        this.scene.input.on("pointerdown",this.jump,this);
        this.scene.add.existing(this);
        this.setVisible(false);
        
    }

    preUpdate(){

        this.checkForBounds();

        if(this.sprite.body.velocity.y==0){
            this.sprite.anims.resume();
        }
        this.sprite.setVelocityX(0); // in case player has been pushed by block
    }

    jump(){
        this.sprite.setVelocityY(-350);
        this.sprite.anims.pause();
    }

    checkForBounds(){ //duplicate code of what was in block need to reorganize
        if(!this.isDead && (this.sprite.x<0 || this.sprite.y>480)){
            this.isDead=true;
            this.scene.sound.play("player_death");
            this.sprite.disableBody(); // prevent additional collisions from triggering
            this.sprite.setVisible(false);
            this.scene.cameras.main.fadeOut(1000);    
            this.scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {  
                game.scene.stop("HUD");
                game.scene.start("death_screen");
            });
        }
    }

}