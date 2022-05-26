
var player;

class game_screen extends Phaser.Scene{

    constructor(){
        super("game_screen");
        
    }

    preload(){
        this.load.atlas("rolling","./assets/spritesheet.png","./assets/spritesheet.json");
        this.load.image("arrow","./assets/arrow.png");
        this.load.image("block","./assets/block.png");
        this.load.image("background","./assets/background.png");
        this.load.audio("player_death","./assets/audio/player_death.wav");
        
    }

    create(){

        this.anims.create({
            key: "roll",
            frames: this.anims.generateFrameNames("rolling",{
                prefix: "smile",
                end:4   
            }),
            frameRate: 12,
            repeat: -1
        });
 
        this.background = new Background(this,0,0,16,12,"background");
        this.physics.world.setBoundsCollision(false,false,true,false);
      
        this.floor = this.createFloor();
        player =  new Player(this,200,config.height/2 - 100,'rolling',0);
        this.physics.add.collider(this.floor,player.sprite);
        
        this.spawnObstacle();
        this.colorPicker = new ColorPicker();

        this.scene.launch("HUD");
        this.scene.bringToTop("HUD");
       
    }

    createFloor(){

        let line= new Phaser.GameObjects.Line(this);
        line.setTo(0,config.height/2,300,config.height/2)
            .setStrokeStyle(5,Phaser.Display.Color.GetColor(255,0,0))
            .setOrigin(0,-1);
        line.height=config.height/2
        line.width=300;
        this.physics.add.existing(line,true);
        this.add.existing(line);
       
        return line;
    }

    update(time,delta){

        this.floor.x-=delta/1000 * 35;
        this.floor.body.x-=delta/1000 * 35;
        this.colorPicker.update();
    
    }

    spawnObstacle(){
        this.timedEvent=this.time.addEvent({delay:1000, callback: this.onEvent, callbackScope: this});
    }

    onEvent(){
        let obstacle = new Structure(this.physics.world,this);       
        this.timedEvent.reset({delay: Phaser.Math.Between(500,750), callback: this.onEvent, callbackScope: this, repeat: 1});
    }
}