for(var i = 1; i < 10; i++){
    console.log(i);
}

var myFunction = function(){
  var cool = true;  
    while(cool){
        console.log("YAY!");
        cool = false;
    }
};

var myFunction1 = function(){
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);
};