var timer =null;
var countdownNumber =10;






//functions for the links and things to happen

var changeState= function(state) {
	// body...
				document.body.className = 'body-state'+state;
				//clear timer as soon as a state change
				clearInterval(timer);

				//initilaize the countdown vlaue
				countdownNumber =10;
				
				//<h1> tag of countdown number 10 changed to a number variable
				document.getElementById('countdown').innerHTML= countdownNumber;
				if(state==1){
					document.getElementById('nervous').className='nervous';
					document.getElementById('cant-wait').className='cant-wait';

				}

				//when at state 2 (countdown) a timer has been set to count from 100 each second
		if(state == 2) {




			timer = setInterval(function(){
					document.getElementById('countdown').innerHTML= countdownNumber--;

					if (countdownNumber <=9 && countdownNumber >6){
						//can't wait
					 document.getElementById('nervous').className='nervous show';}
					 else{
					 document.getElementById('nervous').className='nervous';
					 }


					 if (countdownNumber <= 6 && countdownNumber >3){
						//can't wait
					 document.getElementById('cant-wait').className='cant-wait show';}
					  else{
					 	document.getElementById('cant-wait').className='cant-wait';
					 }



	//when timer hits "0" state changes to LIFT OFF
				if (countdownNumber<= 0){changeState(3);}

		}, 500) ;
		
	}
		





	else if (state == 3){
		//do something else
		var success = setTimeout( function(){	
		var randomNumber = Math.round(Math.random()*10);
				console.log(`random number: ${randomNumber}`)



				if (randomNumber>5){
					console.log('Congratulations Take Off Success!')
					//success state Well Done!
						changeState(4);
						//change rocket transition speed here
				
				//document.querySelector('.rocket').style.transition = 'bottom 500ms';
					
					
				} else	{

					//faliure state Oh No!
						changeState(5);}
						//document.querySelector('.rocket').style.transition = 'bottom 9000ms';
						if (changeState==5){
							setTimeout(function(){ 
							document.querySelector('body.body-state5 .rocket').style.display = 'none';},5000)
						}
				
		},1000)

		};
	}
let newtime = 0;

/*
function netTimmerMe (){
for(let i = 0; i < 10;i++);
console.log(i);
};

var i = 1;

var interval = setInterval( increment, 1000);

function increment(){
    i = i % 360 + 1;
}

console.log(interval);

setTimeout(function(){console.log('HellooooO!')},4000);
*/








