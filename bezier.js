function draw_line(x1,y1,x2,y2){
	for (var t = 1; t <= 100; t++){
		var a = t/100;
		var b = 1-t/100;
		var x3 = x1*b+y1*b;
		var y3 = x2*a+y2*a;
		context.fillRect(x3,y3,1,1); // fill in the pixel at (10,10)
		console.log(x3," ",y3);
	}
}



 function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

// not so useful, code but cool 
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// canvas = document.getElementById("myCanvas");
// ctx = canvas.getContext("2d")
// ctx.lineWidth = 6;
// ctx.strokeStyle = "#333";
// ctx.beginPath();

// ctx.moveTo(100, 250);
// ctx.bezierCurveTo(150, 100, 350, 100, 400, 250, 750, 300);

// ctx.stroke();

var x = [];
var y = [];
var n = -1;

addPoint(100,250);
addPoint(150,100);
addPoint(350,100);
addPoint(400,250);


function addPoint(x1,y1){
	n++;
	x[n+1] = x1; y[n+1] = y1;
}




function combination(n, k){
	var factorial = 1;
	for(var i=n-k+1;i<=n;i++){
		factorial *= i;
	}
	for(var i=1;i<=k;i++)
		factorial /= i;
	return factorial;
}

function clear(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawPoint(x,y){
	var radius = 3;
	context.beginPath();
	context.arc(x,y,radius,0,2 * Math.PI, false);
	context.fillStyle = 'red';
	context.fill();
}

function pointClicked(mousePos){
	mousex = mousePos.x;
	mousey = mousePos.y;
	for(var i = 1; i<=n+1; i++){
		if(Math.sqrt( Math.pow(x[i]-mousex,2) + Math.pow(y[i]-mousey,2) ) <= 7 )
			return i;
	}
	return false;
}


function bezier(x,y){
	console.log(n,x,y);

	for(var i = 1; i<=n+1; ++i){
		drawPoint(x[i],y[i]);
	}

	for(var j=0;j<=1000;j++){
		var t = j/1000;

		var xi = 0;
		var yi = 0;
		for(i=0;i<=n;i++)
		{
			var b = combination(n,i)*Math.pow(t,i)*Math.pow(1-t, n-i);
			xi += b*x[i+1];
			yi += b*y[i+1];
			// console.log(combination(n,i));	
		}
		// console.log(xi, yi);
		context.fillRect(xi,yi,1,1);
	}

}

bezier(x,y);

canvas.addEventListener('click', function(evt) {
        var mousePos = getMousePos(canvas, evt);

        pclicked = pointClicked(mousePos);

        if(pclicked){
        	// x.splice(pclicked,1);
        	// y.splice(pclicked,1);
        	// n--;
        	// clear();
        	addPoint(mousePos.x, mousePos.y);
        	bezier(x,y);
        }else{
      	//adaugam punct la curba bezier
      	clear();
      	bezier(x,y);
      }
      }, false);