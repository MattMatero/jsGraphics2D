
Point = function(){
	this.vec3 = new Vector();
}

Point.prototype.setPosXY = function(x,y){
	this.vec3 = this.vec3.make3D(x,y);
}

Point.prototype.setPosV = function( vec2 ){
	this.vec3.setX(vec2.getX());
	this.vec3.setY(vec2.getY());
	this.vec3.setZ(vec2.getZ());
}

Point.prototype.getX = function(){
	return this.vec3.getX();
}

Point.prototype.getY = function(){
	return this.vec3.getY();
}

Point.prototype.applyMatrix = function( matrix ){
	this.vec3 = this.vec3.multMatrix(matrix);
}

Point.prototype.draw = function( context ){
	
	context.fillStyle = "#FF0000";
	context.fillRect(this.vec3.getX()-4,this.vec3.getY()-4,8,8);
}

Point.prototype.rotate = function(a){
	var rotMat = new Matrix().rotationMatrix(a);
	this.vec3 = this.vec3.multMatrix(rotMat);
}

Point.prototype.translate = function(x,y){
	var transMat = new Matrix().translate(x,y);
	this.applyMatrix(transMat);

}

Point.prototype.rotateAroundPt = function(a,x,y){
	this.translate(-x,-y);
	this.rotate(a);
	this.translate(x,y);
}

Point.prototype.toString = function(){
	return this.vec3.toString();
}
