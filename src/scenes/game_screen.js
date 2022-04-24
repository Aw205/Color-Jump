class game_screen extends Phaser.Scene{

    constructor(){
        super("game_screen");
        
    }

    preload(){
        this.load.image("mountain_bg","./assets/layers/parallax-mountain-bg.png");
        this.load.image("mountains","./assets/layers/parallax-mountain-mountains.png");
        this.load.image("player","./assets/ball.png");
        this.load.image("block","./assets/icleblock.svg");
        this.load.image("red","./assets/red.png");
        this.load.image("blue","./assets/blue.png");
        this.load.image("green","./assets/green.png");
        
    }

    create(){

       // this.background = new Background();
        //this.floor = this.createFloor();
        this.player = this.createPlayer();
        //this.physics.add.collider(this.floor,this.player);
        this.spawnObstacle();
        this.colorPicker = new ColorPicker();
    }

    createFloor(){


        let line= new Phaser.GameObjects.Line(this);
        line.setTo(0,config.height/2,config.width,config.height/2);
        line.setStrokeStyle(5,Phaser.Display.Color.GetColor(255,0,0));
        line.setOrigin(0,-1);
        line.height=config.height/2;
        line.width=config.width;
        this.physics.add.existing(line,true);
        this.add.existing(line);
       
        return line;
    }

    update(time,delta){

        //this.background.update();

    }

    createPlayer(){
        return new Player(this,50,config.height/2 - 100,'player');
    }

    spawnObstacle(){
        this.timedEvent=this.time.addEvent({delay: 1000, callback: this.onEvent, callbackScope: this});
    }

    onEvent(){
        let obstacle = new Structure(this.physics.world,this);       
            obstacle.getChildren().forEach(square => {
                this.physics.add.collider(this.player,square);
            });
        this.timedEvent.reset({delay: Phaser.Math.Between(500,750), callback: this.onEvent, callbackScope: this, repeat: 1});
    }
}