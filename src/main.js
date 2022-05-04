/* 
Collaborators: Andrew Wang, Zachary Thompson, Noah Eichler
Game Title: Color Jump
Date Completed: 5/4/2022
Creative Tilt:
               I think the music is pretty good and it fits the theme of our game. The upbeat track fit the actual gameplay with all
               of the colorful blocks, while the death screen music is more dark and serious. 
               The generation of the obstacles was pretty interesting to implement as well as 
               visually see the different structures that resulted from the randomization. Also, the 
               tweening of the colors for the glowing blocks and the slight shading of the blocks
               was I think a nice visual touch.
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