$(document).ready(function(){

	// Initially hide all the parts
	var $partLists =$(".part-list"); 
	$partLists.hide();

	// When you click on the Ryan icon, show his parts
	$(".ryan-icon").on("click", function(){
		$(".ryan-parts").show();
	});

	// When you click on the Drew icon, show his parts
	$(".drew-icon").on("click", function(){
		$(".drew-parts").show();
	});

	// When you click on the Kristen icon, show her parts
	$(".kristen-icon").on("click", function(){
		$(".kristen-parts").show();
	});


	// Make all the parts draggable
	$(".part").draggable();

	// Make reset button refresh the page
	$("#reset").on("click", function(){
		location.reload();
	})

	// Trash bin
	$('#trash').droppable({
	    drop: function(event, ui) {
	        ui.draggable.remove();
	    }
	});





























});















