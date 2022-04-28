class Structure extends Phaser.Physics.Arcade.StaticGroup{

    constructor(world,scene){

        super(world,scene);
       
        this.x = config.width;
        this.speed=150;
        this.initialTints = [0x960B0B,0x2E7A1E,0x000008B] // red green blue
        this.finalTints = [0xD12323,0x89DE32,0x0F52BA]
        this.y = Phaser.Math.Between(75,config.height);
        this.generateStructure();   
        this.scene.add.existing(this);
        
    }


    generateStructure(){

        let generatedSquares = new Set();
        let interval = [Phaser.Math.Between(50,config.height/2),Phaser.Math.Between(config.height/2+50,config.height)];
        let num = Phaser.Math.Between(0,8);
       

        for(var i = 0; i< interval.length;i++){
            this.y = interval[i];
            let currentColor = Phaser.Math.Between(0,2);
            while(!generatedSquares.has(num)){ 
                //let currentColor = Phaser.Math.Between(0,2);
                generatedSquares.add(num);
                let row = Math.floor(num/3);
                let col = num %3;
                let block = new Block(this.scene,this.x+col*Block.WIDTH,this.y-row*Block.LENGTH,"block",this.initialTints[currentColor],this.finalTints[currentColor],currentColor);    
                this.add(block,true);                
                num = Phaser.Math.Between(0,8);
            }
            generatedSquares.clear();
        }
        
    }

    preUpdate(time,delta){

        let increment = delta/1000 * this.speed;
        //this.incX(-increment);
    }

}