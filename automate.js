var robot = require("robotjs");
var screen = robot.getScreenSize();

setTimeout(automatechrome,2000);

function automatechrome(){
    robot.moveMouseSmooth(128,850);
    robot.mouseClick();
    robot.typeString(" chrome");
    robot.keyTap("enter");
    robot.setKeyboardDelay(1000);    
    robot.typeString(" gmail");
    robot.keyTap("enter");
    robot.moveMouseSmooth(278,319);
    robot.mouseClick();
    setTimeout(automatewhatsapp,3000);

}

function automatewhatsapp(){
    robot.keyToggle("control","down");
    robot.keyTap("t");
    robot.keyToggle("control","up");
    robot.typeString(" web.whatsapp.com");
    robot.keyTap("enter");
    setTimeout(typewhatsapp,5000);
}
function typewhatsapp(){
    robot.keyTap("tab");
    robot.typeString("PBL");
    robot.keyTap("enter");
    robot.typeString(" join meeting on time");
    robot.keyTap("enter");
    setTimeout(Gmeetautomate,3000);

}    
function Gmeetautomate(){
    robot.keyToggle("control","down");
    robot.keyTap("t");
    robot.keyToggle("control","up");
    robot.typeString(" meet.google.com");
    robot.keyTap("enter");
    setTimeout(ppt_automate,3000);

}
function ppt_automate(){
    robot.moveMouseSmooth(128,850);
    robot.mouseClick();
    robot.typeString(" PowerPoint");
    robot.keyTap("enter");
    setTimeout(ppt_functions,3000);
    
    
}
function ppt_functions(){
    robot.moveMouseSmooth(52,397);
    robot.mouseClick();
    robot.moveMouseSmooth(252,390);
    robot.mouseClick();
    setTimeout(System_ready,3000);

}

function System_ready(){
    robot.moveMouseSmooth(128,850);
    robot.mouseClick();
    robot.typeString(" notepad");
    robot.keyTap("enter");
    robot.typeString("System is ready for usage");
}





