console.log('hello there');

let off = 'off';
let on ='on';

var car ={
	brand:'audi',
	model:'Q2',
	color:'red',
	seats:[
		'driver',
		'passenger front',
		'passneger back left',
		'passenger back right'],
	isTurnedOn: false,

	// FUNCTION DECLARTION TO TURN ENGINE ON/OFF!
	switchTurn : function(input){
		if (input == on){
			 this.isTurnedOn = true;
			return console.log('engine '+on);
		
		} 

		if (input == off){
			this.isTurnedOn = false;
			return console.log('engine '+off);
		}
	}

}


//FUNCTION DELCARTION TO TURN ENGINE ON/OFF WITH BUTTONS!
var carOn=()=>{
 	if (car.isTurnedOn==true){
 		console.log('enging already on');
 	}else{
 		car.switchTurn(on);
 	}

}

var carOff=()=>{
 	if (car.isTurnedOn==false){
 		console.log('enging already off');
 	}else{
 		car.switchTurn(off);
 	}

}


//METHOD TO CHANGE LINKS ONCE CLICKED!

var changeLink= function(number){
document.body.className = 'link'+number
}