$(document).ready(function(){

	// Initially hide all the parts
	var $partLists =$(".part-list"); 
	$partLists.hide();

	// When you click on the Ryan icon, show his parts
	$(".ryan-icon").on("click", function(){
		// $partLists.hide();
		$(".ryan-parts").show();
	});

	// When you click on the Drew icon, show his parts
	$(".drew-icon").on("click", function(){
		// $partLists.hide();
		$(".drew-parts").show();
	});

	// When you click on the Kristen icon, show her parts
	$(".kristen-icon").on("click", function(){
		// $partLists.hide();
		$(".kristen-parts").show();
	});

	// When you click on the Christopher icon, show his parts
	$(".christopher-icon").on("click", function(){
		// $partLists.hide();
		$(".christopher-parts").show();
	});

	// When you click on the hat icon, show the hat parts
	$(".hat-icon").on("click", function(){
		// $partLists.hide();
		$(".hat-parts").show();
	});










	$(".icon").on("click", function(){
		console.log("Test");
	});


	// Make all the parts draggable
	$(".part").draggable().resizable({
		autoHide: true
	});

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















