class Structure extends Phaser.Physics.Arcade.StaticGroup{

    constructor(world,scene){

        super(world,scene);
        this.scene.add.existing(this);
        this.x = config.width;
        this.speed=150;
        this.types = ["red","blue","green"];

        this.y = Phaser.Math.Between(75,config.height);
        this.generateStructure();   
        
    }


    generateStructure(){

        let generatedSquares = new Set();
        let interval = [Phaser.Math.Between(50,config.height/2),Phaser.Math.Between(config.height/2+50,config.height)];
        let num = Phaser.Math.Between(0,8);

        for(var i = 0; i< interval.length;i++){
            this.y = interval[i];
            while(!generatedSquares.has(num)){ 
                let currentColor = Phaser.Math.Between(0,2);
                generatedSquares.add(num);
                let row = Math.floor(num/3);
                let col = num %3;
                let block = new Block(this.scene,this.x+col*Block.WIDTH,this.y-row*Block.LENGTH,this.types[currentColor]);
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