
var cav = document.getElementById("canvass");
var ctx = cav.getContext('2d');


var array = new Array();

for(var i = 0; i < 14; i++){			
	array[i] = 'c'+ i + '.png';
}


/*TO DO function that creates a image*/

function drawImage(array, loopTimes)
{
	  	base_image = new Image();
	  	base_image.src = 'assets/img/' + array[loopTimes];
	  	base_image.setAtX = loopTimes * 60;
	  	base_image.onload = function(){
			ctx.drawImage(this, this.setAtX, 50);
		}
}

/*TO DO function that for shuffle*/

function shuffle() {

  for (var i = array.length - 1; i >=0; i --) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
    drawImage(array, i);
  }
  console.log(array);
}



/*TO DO function that for deck*/

function deck(){
	ctx.clearRect(0,0,cav.width, cav.height);
	for(var arr= 1; arr < 6; arr++){
		drawImage(array, arr);
	}

}

/*TO DO function that for reset*/

function resets(){
	ctx.clearRect(0,0,cav.width, cav.height);
	array.sort();
	for(var num = 0; num < array.length; num++){
		drawImage(array, num);
	}
	console.log(array);
	
}

document.getElementById("shuffle").onclick = shuffle;
document.getElementById("deck").onclick = deck;
document.getElementById("reset").onclick = resets;

