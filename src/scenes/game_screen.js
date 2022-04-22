class game_screen extends Phaser.Scene{

    constructor(){
        super("game_screen");
        
    }

    preload(){
        this.load.image("player","./assets/bal.png");
        this.load.image("block","./assets/icleblock.svg");
    }

    create(){

        this.floor = this.createFloor();
        this.player = this.createPlayer();
        this.physics.add.collider(this.floor,this.player);
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

    createPlayer(){
        return new Player(this,50,config.height/2 - 100,'player');
    }

    spawnObstacle(){
        this.time.addEvent({delay: 2000, loop: true, callback:()=>{
            let obstacle = new Structure(this.physics.world,this);
            
            obstacle.getChildren().forEach(square => {
                this.physics.add.collider(this.player,square);
            });
            
        }});
    }
}