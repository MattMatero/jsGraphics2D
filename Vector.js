var Vector = function(){
	 this.arr = [0,0,0];
}

Vector.prototype.addSelf = function(Vector){
	this.arr[0] += Vector.getX();
	this.arr[1] += Vector.getY();
	this.arr[2] += Vector.getZ();
}

Vector.prototype.add = function( Vector ){
	var addedVector = new Vector();
	addedVector.setX(this.arr[0] + Vector.getX());
	addedVector.setY(this.arr[1] + Vector.getY());
	addedVector.setZ(this.arr[2] + Vector.getZ());
	return addedVector;
}

Vector.prototype.build = function( array) {
	
	this.arr[0] = array[0];
	this.arr[1] = array[1];
	this.arr[2] = array[2];
	
	return this;
}

Vector.prototype.multMatrix = function( Matrix ){
	var result = new Array(3);
	result = [0,0,0];

	for(i =0; i < 3; i++){
			for(j = 0; j < 3; j++){
					result[i] += Matrix.arr[i][j] * this.arr[j];
			}
		}
	
	
	var newVec = new Vector();
	return newVec.build(result);
}


Vector.prototype.multSelf = function( Vector ) {
	var element = 0;
	var sum = 0;
	elements = [0,0,0];
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			elements[i] = this.arr[i]*Vector.arr[j];
			sum += elements[i];
		}
		elements[i] = sum;
		sum = 0;
	}
	
	for( i = 0; i < 3; i++){
		this.arr[i] = elements[i];
	}

}

Vector.prototype.make3D = function( a,b ){
	var v = new Vector();
	v.setX(a);
	v.setY(b);
	v.setZ(1);
	return v;
}


Vector.prototype.multNew = function( Vector ) {
	var element = 0;
	var sum = 0;
	elements = [0,0,0];
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			elements[i] = this.arr[i]*Vector.arr[j];
			sum += elements[i];
		}
		elements[i] = sum;
		sum = 0;
	}
	var multVec = new Vector();
	
	multVec.setValues(elements);
		
	return multVec;

}



Vector.prototype.toString = function(){
	return "x: " + this.arr[0] + " y: " + this.arr[1] + " z: " + this.arr[2];
}

Vector.prototype.getX = function(){
	return this.arr[0];
}

Vector.prototype.getY = function(){
	return this.arr[1];
}

Vector.prototype.getZ = function(){
	return this.arr[2];
}

Vector.prototype.setX = function(num){
	this.arr[0] = num;
}

Vector.prototype.setY = function(num){
	this.arr[1] = num;
}

Vector.prototype.setZ = function(num){
	this.arr[2] = num;
}

Vector.prototype.setValues = function(arr){
	for(i = 0; i < 3; i++){
		this.arr[i] = arr[i];
	}
}