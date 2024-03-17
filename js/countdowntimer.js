const startingMinutes = 10;
let time = startingMinutes*1
const countdownEl = document.getElementById('countdown');


setInterval (updateCountdown, 1000);

function updateCountdown(){
	//const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	if(seconds<10){
		seconds = '0'+seconds;
	}else{seconds = seconds;}

	countdownEl.innerHTML = `${seconds}`;
	time--;
	time = time < 0 ? 0 : time; 

}


console.log(589% 60)





