


function CanvasApp(dom){
	
	this.box = dom;
	
	var type = dom.tagName;
	
	if(type == 'DIV'){//拿到的是div
		this.canvas = document.createElement('canvas')
		dom.appendChild(this.canvas);
	}
	
	if(type == 'CANVAS'){//拿到的是canvas
		this.canvas = dom;
	}
	
	this.context = this.canvas.getContext();
	this._switch = true;
}

//开始
CanvasApp.prototype.run = function(){
	this._switch = true;
	this.clock();
}

CanvasApp.prototype.stop = function(){
	this._switch = false;
}
CanvasApp.prototype.draw = function(){
	
}

CanvasApp.prototype.clock = function(){
	if(this._switch === false)return
	
	this.draw();
	requestAnimationFrame(this.clock);
}














(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
  window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
} ());


var app = new CanvasApp(document.getElementById('canvasApp'));
app.run();