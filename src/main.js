/* 
Collaborators: Andrew Wang, Zachary Thompson, Noah Eichler
Game Title: Color Jump
Date Completed: 5/4/2022
Creative Tilt:
               The generation of the obstacles was pretty interesting to implement as well as 
               visually seeing the different structures that resulted from the random generation. 
               The logic for the generation is in the Structure class. I think there's a lot more 
               complexity to be involved if we were to create more meaningful structures or even use 
               different data structures to store the state of our structure.

               I think the music is pretty good and it fits the theme of our game. The upbeat track 
               fit the actual gameplay with all its different colored blocks. Also,the tweening of 
               the colors for the glowing blocks and the slight shading of the blocks was I think a 
               nice visual touch.
*/

let config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    scene: [Menu,Tutorial,HUD,game_screen,death_screen],
    physics:{
        default:'arcade',
        //arcade:{debug:true}
    },
    pixelArt: true,
    zoom : 1
    
}
let game = new Phaser.Game(config);