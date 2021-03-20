document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img height="150" width="200" src="1.png" id="pig">' );
var pig = document.getElementById('pig');
pig.style.position = 'fixed';
var mouseListener = function(event){mouseMoveFunc(event)};
document.addEventListener("mousemove", mouseListener);
function mouseMoveFunc(event){
	pig.style.left=event.clientX - 64 + 'px';
	pig.style.top=event.clientY - 64 + 'px';
}
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img height="150" width="200" src="3.png" id="carrot">' );
var carrot = document.getElementById('carrot');
carrot.style.position = 'fixed';
spawnOrange();
function spawnOrange(){
	carrot.style.left=Math.random()*(window.innerWidth-128) + 'px';
	carrot.style.top=Math.random()*(window.innerHeight-128) + 'px';
}
function mouseMoveFunc(event){
	pig.style.left=event.clientX - 64 + 'px';
	pig.style.top=event.clientY - 64 + 'px';
	checkCollision();
}
function checkCollision(){
	console.log();
	if (
        Math.sqrt(Math.pow(pig.offsetLeft - carrot.offsetLeft,2) + Math.pow(pig.offsetTop - carrot.offsetTop,2)) <128
		)
	{
		spawnOrange();
		score++;
		document.getElementById('number').innerHTML="Очки: "+score;
	}
}
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="number">Очки: 0</div>');
number.style.textAlign = "center" ;
number.style.fontSize = 72+"pt";
number.style.color = "red";

var score = 0;
document.body.style.backgroundImage = 'url(http://i.imgur.com/FiRqDZK.jpg)';