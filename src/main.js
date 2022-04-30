/* 
Collaborators: Andrew Wang, Zachary Thompson, Noah Eichler
Game Title: Color Jump?
Date Completed: 
Creative Tilt: 
*/

let config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    scene: [Menu,Tutorial,HUD,game_screen,death_screen],
    physics:{
        default:'arcade',
       // arcade:{debug:true}
    },
    pixelArt: true,
    zoom : 1
    
}
let game = new Phaser.Game(config);