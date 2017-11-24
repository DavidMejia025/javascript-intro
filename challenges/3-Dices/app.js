// function Controlador(model, view){
// 	this.model = model
// 	this.view =  view

// }

// function Model(){
// 	this.dic
// }


$(document).ready(function() {  // Codigo Procedural Procedimental --> OOP
	controller.load()

	function Model(){
	this.random = function(){
	return Math.floor((Math.random()*6)+1) // Model
}
}

var model = new Model

function View(){
	 //views
 	this.paint_new_dice = function(){
 		$('.dice').append('<div class="die">0</div>') // Vista
 	}
    this.paint = function(dieHtml,value){
	$(dieHtml).text(random(value)) // Vista
}
}

var view = new View

function Controller(view, model){

	this.view = view
	this.model = model
	  // Event Listener
  	this.load = function(){
  	$('#roller button.add').on('click', controller.new_dice)

  	// Event listener
  	$('#roller button.roll').on('click', controller.roll_dice)
  	}
	//Controller
	this.new_dice = function() { // Controlador
    view.paint_new_dice()
 	}
    this.roll_dice = function(){
 		$('.die').each(function(index, dieHtml) { // Controlador
       	view.paint(dieHtml,model.random())
    	})
 	}
}

var controller = new Controller(view,model)
})














