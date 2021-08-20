var robot = require("robotjs");

var id= setInterval(showposition,1000);

function showposition(){
    var mouse = robot.getMousePos();
    console.log(mouse);

    if(mouse.x == 0 && mouse.y == 0){
        clearInterval(id);
    }

}