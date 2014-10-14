Triangle = function(){
	this.points = new Array(3);
	this.points = [new Point(), new Point(), new Point()];
	this.color;
}

Triangle.prototype.setPoints = function(p1,p2,p3){
	this.points[0] = p1;
	this.points[1] = p2;
	this.points[2] = p3;
}

Triangle.prototype.translate = function(x,y){
	for(var i = 0; i < 3; i++){
		this.points[i].translate(x,y);
	}
}

Triangle.prototype.rotate = function(a){
	for(var i = 0; i < 3; i++){
		this.points[i].rotate(a);
	}
}

Triangle.prototype.rotateAroundPt = function(a,x,y){
	for(var i = 0; i < 3; i++){
		this.points[i].rotateAroundPt(a,x,y);
	}
}

Triangle.prototype.draw = function(context){
	for(var i = 0; i < 3; i++){
		this.points[i].draw(context);
	}
	
	context.beginPath();
	context.moveTo(this.points[2].getX(), this.points[2].getY());
	for(var i = 0; i < 3; i++){
		context.lineTo(this.points[i].getX(), this.points[i].getY());
	}
	
	
	context.stroke();
}

Triangle.prototype.applyMatrix = function(matrix){
	for(var i = 0; i < 3; i++){
		this.points[i].applyMatrix(matrix);
	}
	
}

Triangle.prototype.toString = function(){
	return this.points[0].toString() + " " + this.points[1].toString() + " " + this.points[2].toString();
}