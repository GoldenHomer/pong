function Background () {
	
};

Background.prototype.draw = function(context) {
	context.fillStyle = '#000000';
	context.fillRect(0, 0, game.width, game.height);
};

var canvas = $('canvas')[0],  //grab the canvas element on the page
	game = new Game(canvas);

game.entities = [
	new Background(),
	game.ball = new Ball(),
	game.player = new Player(),
	game.bot = new Bot()
];

game.start();
game.focus();
