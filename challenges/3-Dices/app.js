// function Controlador(model, view){
// 	this.model = model
// 	this.view =  view

// }

// function Model(){
// 	this.dic
// }


$(document).ready(function() {  // Codigo Procedural Procedimental --> OOP
  // Event Listener
  $('#roller button.add').on('click', new_dice)

  // Event listener
  $('#roller button.roll').on('click', roll_dice)
})


//Controller
var new_dice = function() { // Controlador
    paint_new_dice()
 }

 //views
 var paint_new_dice = function(){
 	$('.dice').append('<div class="die">0</div>') // Vista
 }

 var roll_dice = function(){
 	$('.die').each(function(index, dieHtml) { // Controlador
      $(dieHtml).text(random()) // Vista
    })
 }

var random = function(){
	var value = Math.floor((Math.random()*6)+1) // Model
	return  value
}