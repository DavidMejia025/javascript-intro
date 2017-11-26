// Tu codigo va aca
function createTree() {
	return new Tree()
}

function Tree(){
	this.age = 0
	this.height = 0
	this.orangeCount = 0
	this.isAlive = true 
	this.oranges = []
}
	
Tree.prototype = {
    grow: function(){
		this.age++
		this.height+=10 
		if(this.age === FRUIT_BEARING_AGE){
			var orangesIn = Math.floor(Math.random(15)+1)
			this.orangeCount += orangesIn
		}
		for (var i =0; i<=orangesIn; i++){
			this.oranges.push(new Orange)
		}
		this.die()
	},
	

	die: function(){
		if (this.age <= MAX_AGE){
			this.isAlive = true
		}else{
			this.isAlive = false
		}
	},

	dropOrange: function(){
		return this.oranges.pop()
	},
}	


var pickOrange = function(){
	return new Orange
	}
var Orange = function(){
	this.diameter = Math.floor(Math.random()*10+1)
}

orange = new Orange()

var FRUIT_BEARING_AGE = 5
var MAX_AGE = 10