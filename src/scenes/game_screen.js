
var player;

class game_screen extends Phaser.Scene{

    constructor(){
        super("game_screen");
        
    }

    preload(){
        this.load.image("player","./assets/ball.png");
        this.load.image("arrow","./assets/arrow.png");
        this.load.image("block","./assets/block.png");
        this.load.image("background","./assets/background.png");
        this.load.audio("music","./assets/game_music.ogg");
        
    }

    create(){

        this.sound.add("music");
        this.sound.play("music",{loop: true});

        this.background = new Background();
        this.floor = this.createFloor();
        player = this.createPlayer();
        this.physics.add.collider(this.floor,player);
        this.spawnObstacle();
        this.colorPicker = new ColorPicker();

        this.scene.launch("HUD");
        this.scene.bringToTop("HUD");

       
    }

    createFloor(){


        let line= new Phaser.GameObjects.Line(this);
        line.setTo(0,config.height/2,200,config.height/2);
        line.setStrokeStyle(5,Phaser.Display.Color.GetColor(255,0,0));
        line.setOrigin(0,-1);
        line.height=config.height/2;
        line.width=200;
        this.physics.add.existing(line,true);
        this.add.existing(line);
       
        return line;
    }

    update(time,delta){

        this.floor.x-=delta/1000 * 15;
        this.floor.body.x-=delta/1000 * 15;
        this.colorPicker.update();
    
    }

    createPlayer(){
        return new Player(this,200,config.height/2 - 100,'player');
    }

    spawnObstacle(){
        this.timedEvent=this.time.addEvent({delay:1000, callback: this.onEvent, callbackScope: this});
    }

    onEvent(){
        let obstacle = new Structure(this.physics.world,this);       
        this.timedEvent.reset({delay: Phaser.Math.Between(500,750), callback: this.onEvent, callbackScope: this, repeat: 1});
    }
}