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
// not so useful, code but cool 
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// canvas = document.getElementById("myCanvas");
// ctx = canvas.getContext("2d")
// ctx.lineWidth = 6;
// ctx.strokeStyle = "#333";
// ctx.beginPath();

// ctx.moveTo(100, 250);
// ctx.bezierCurveTo(150, 100, 350, 100, 400, 250);

// ctx.stroke();


var x = [];
var y = [];
x[1] = 100;y[1] = 250;
x[2] = 150;y[2] = 100;
x[3] = 350;y[3] = 100;
x[4] = 400;y[4] = 250;
var n = 3;


function combination(n, k){
	var factorial = 1;
	for(var i=n-k+1;i<=n;i++){
		factorial *= i;
	}
	for(var i=1;i<=k;i++)
			factorial /= i; // cioban mode		
		return factorial;
	}
	
	for(j=0;j<=1000;j++){
		var t = j/1000;
		
		var xi = 0;
		var yi = 0;
		for(i=0;i<=n;i++)
		{
			var b = combination(n,i)*Math.pow(t,i)*Math.pow(1-t, n-i);
			xi += b*x[i+1];
			yi += b*y[i+1];
			console.log(combination(n,i));	
		}
		// console.log(xi, yi);
		context.fillRect(xi,yi,1,1);


	}

