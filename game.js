// Running the game

function Game (canvas) {
	var self = this; // Keep scope of this to canvas area

	this.context = canvas.getContext("2d"); // tell canvas
	this.width = canvas.width; //Establish boundaries of the game
	this.height = canvas.height;

	// Keeping track of keys pressed. pressed === true and release === false
	this.keyPressed = {};

	$(canvas).on('keydown keyup', function(e){
		var keyName = Game.keys[e.which]; // read which key was pressed in Game.keys object and give it its string name.

		if(keyName){
			self.keyPressed[keyName] = e.type === 'keydown'; // return a boolean - true on keydown.
			e.preventDefault(); // Prevent any keys pressed from moving the page.
		}
	});
}

Game.keys = {
	32: 'space',
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down'
};