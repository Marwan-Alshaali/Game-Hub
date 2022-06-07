const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');
let scoreValue=0;
let scoreTimer = null;

function jump() {
	dino.classList.add("jump-animation");
	setTimeout(()=> dino.classList.remove("jump-animation"),500);
}

document.addEventListener('keypress', ()=>{
	if(!dino.classList.contains("jump-animation")) {
		jump();
	}
})

function operation(){
	const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
	const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));

	scoreValue++;
	score.textContent = scoreValue;

	if(rockLeft<0) {
		rock.style.display = 'none';
	}
	else {
		rock.style.display = '';
	}

	if((rockLeft <=50) && (rockLeft >0) && (dinoTop >=175)) {
		clearInterval(scoreTimer);

		alert("You got a score of: " + scoreValue + "\n\nPlay again?")
		location.reload();
	}
}
let checkTimer = setInterval(operation, 50)