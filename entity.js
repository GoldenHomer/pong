function Entity () {
	// Entities are the square-shaped ball (weird right?) and the paddles
	this.x = 0;
	this.y = 0;

	this.width = 0;
	this.height = 0;

	this.xVelocity = 0;
	this.yVelocity = 0;
}

Entity.prototype.update = function(){
	this.x += this.xVelocity;
	this.y += this.yVelocity;
};

Entity.prototype.draw = function(context){
	context.fillStyle = '#ffffff';
	context.fillRect(this.x, this.y, this.width, this.height);
};

// Collision detection (the significant part)!
// Return true if there is intersection between the paddle and ball
Entity.prototype.intersect = function(other){
	return this.y + this.height > other.y &&
			this.y 				< other.y + other.height &&
			this.x + this.width > other.x &&
			this.x 				< other.x + other.width;
};

