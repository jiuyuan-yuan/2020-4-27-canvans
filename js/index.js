
var canvas = document.getElementById('painting'); 
var context = canvas.getContext('2d');
var penChange = 2;

autoSetCanvasSize();

listenToMouse();

/*****监听******/
function listenToMouse(){
	var lastPoint = {x:undefined,y:undefined};
	var eraserEnabled = false;   //是否使用橡皮擦
    var using = false;		// 是否按下

    if(document.body.ontouchstart !== undefined){  //触屏检测

   	   /*****触屏*****/
    	canvas.ontouchstart = function(aaa){
    		var x = aaa.touches[0].clientX;
    		var y = aaa.touches[0].clientY;
    		using = true;
			lastPoint = {'x':x,'y':y};	
    	}
    	canvas.ontouchmove = function(aaa){
    		var x = aaa.touches[0].clientX;
    		var y = aaa.touches[0].clientY;

    		if(!using){return}

			if(eraserEnabled){
				context.clearRect(x-5,y-5,10,10);
				}
			else {
				var newPoint = {'x':x,'y':y};
				drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
				lastPoint = newPoint;
				}	
    	}
    	canvas.ontouchend = function(){
    		using = false;
    	}
	    pen.onclick = function(){
			eraserEnabled = false;
			this.classList.add('active');
			eraser.classList.remove('active');
		}

		eraser.onclick = function(){
			eraserEnabled = true;
			this.classList.add('active');
			pen.classList.remove('active');
		}
		delate.onclick = function(){
			context.clearRect(0,0,canvas.width,canvas.height);
		}
		download.onclick = function(){
			var a = document.createElement('a');
			a.href = canvas.toDataURL("image/png");
			a.download = '我的画布';
			a.click();
		}
		red.onclick = function(){
			context.fillStyle = 'red';
			context.strokeStyle = 'red';
			red.classList.add('active');
			green.classList.remove('active');
			blue.classList.remove('active');
			black.classList.remove('active');
		}
		blue.onclick = function(){
			context.fillStyle = 'blue';
			context.strokeStyle = 'blue';
			blue.classList.add('active');
			green.classList.remove('active');
			red.classList.remove('active');
			black.classList.remove('active');
		}
		green.onclick = function(){
			context.fillStyle = 'green';
			context.strokeStyle = 'green';
			green.classList.add('active');
			red.classList.remove('active');
			blue.classList.remove('active');
			black.classList.remove('active');
		}
		black.onclick = function(){
			context.fillStyle = 'black';
			context.strokeStyle = 'black';
			black.classList.add('active');
			red.classList.remove('active');
			blue.classList.remove('active');
			green.classList.remove('active');
		}
		plus.onclick = function(){
			penChange++;
			width.style.height =1 + penChange + 'px';
		}
		small.onclick = function(){
			penChange--;
			width.style.height =1 + penChange + 'px';
		}





    }

    else{
    	/*****非触屏*****/
		canvas.onmousedown = function(a){
		using = true;
		var x = a.clientX;
		var y = a.clientY;
		lastPoint = {'x':x,'y':y}
		}
		canvas.onmousemove = function(a){
		var x = a.clientX;
		var y = a.clientY;

		if(!using){return}
			
		if(eraserEnabled){
			context.clearRect(x-5,y-5,10,10);
			}
		else {
			var newPoint = {'x':x,'y':y};
			drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
			lastPoint = newPoint;
			}	
		}
		canvas.onmouseup = function(a){
			using = false;
		}
		
	 pen.onclick = function(){
			eraserEnabled = false;
			this.classList.add('active');
			eraser.classList.remove('active');
		}

		eraser.onclick = function(){
			eraserEnabled = true;
			this.classList.add('active');
			pen.classList.remove('active');
		}
		delate.onclick = function(){
			context.clearRect(0,0,canvas.width,canvas.height);
		}
		download.onclick = function(){
			var a = document.createElement('a');
			a.href = canvas.toDataURL("image/png");
			a.download = '我的画布';
			a.click();
		}
		red.onclick = function(){
			context.fillStyle = 'red';
			context.strokeStyle = 'red';
			red.classList.add('active');
			green.classList.remove('active');
			blue.classList.remove('active');
			black.classList.remove('active');
		}
		blue.onclick = function(){
			context.fillStyle = 'blue';
			context.strokeStyle = 'blue';
			blue.classList.add('active');
			green.classList.remove('active');
			red.classList.remove('active');
			black.classList.remove('active');
		}
		green.onclick = function(){
			context.fillStyle = 'green';
			context.strokeStyle = 'green';
			green.classList.add('active');
			red.classList.remove('active');
			blue.classList.remove('active');
			black.classList.remove('active');
		}
		black.onclick = function(){
			context.fillStyle = 'black';
			context.strokeStyle = 'black';
			black.classList.add('active');
			red.classList.remove('active');
			blue.classList.remove('active');
			green.classList.remove('active');
		}
		plus.onclick = function(){
			penChange++;
			width.style.height =1 + penChange + 'px';
		}
		small.onclick = function(){
			penChange--;
			width.style.height =1 + penChange + 'px';
		}

    }


}
/*****调整canvas大小******/
function autoSetCanvasSize(){
	setCanvasSize();        //全屏canvas
	window.onresize = function(){
	setCanvasSize();
	}
	function setCanvasSize(){
			var pageHeight = document.documentElement.clientHeight;
			var pageWidth = document.documentElement.clientWidth;
			canvas.height = pageHeight;
			canvas.width = pageWidth;
	}
}

function drawLine(x1,y1,x2,y2) {
	context.beginPath();
	context.moveTo(x1,y1);
	context.lineWidth = penChange;
	context.lineTo(x2,y2);
	context.stroke();
	context.closePath();
}
function drawCircle(x,y,radius) {
	context.beginPath();
	context.arc(x,y,radius,0,2*Math.PI);
	context.stroke();
}

