class Structure extends Phaser.Physics.Arcade.StaticGroup{

    constructor(world,scene){

        super(world,scene);
        this.scene.add.existing(this);
        this.x = config.width;
        this.y = config.height/2;
        this.speed=100;
        //this.classType= Phaser.GameObjects.Rectangle;
        this.generateStructure();
        
    }


    generateStructure(){

        let generatedSquares = new Set();
        let num = Phaser.Math.Between(0,8);

        while(!generatedSquares.has(num)){ 
            generatedSquares.add(num);
            let row = Math.floor(num/3);
            let col = num %3;
            let block = new Block(this.scene,this.x+col*Block.WIDTH,this.y-row*Block.LENGTH,"block");
            this.add(block,true);
            num = Phaser.Math.Between(0,8);
        }
    }


    preUpdate(time,delta){

        let increment = delta/1000 * this.speed;
        this.incX(-increment);

        /*this.getChildren().forEach(square => {

            square -= delta/1000 * this.speed;
            if(this.x < -300){
                this.destroy(true,true);
             }
        });*/
    }

}