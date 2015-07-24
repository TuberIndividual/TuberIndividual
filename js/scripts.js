$(document).ready(function(){

	// Initially hide all the parts
	var $partLists =$(".part-list"); 
	$partLists.hide();

	// When you click on the Ryan icon, show his parts
	$(".ryan-icon").on("click", function(){
		$partLists.hide();
		$(".ryan-parts").show();
	});

	// When you click on the Drew icon, show his parts
	$(".drew-icon").on("click", function(){
		$partLists.hide();
		$(".drew-parts").show();
	});

	// When you click on the Kristen icon, show her parts
	$(".kristen-icon").on("click", function(){
		$partLists.hide();
		$(".kristen-parts").show();
	});

	// When you click on the Christopher icon, show his parts
	$(".christopher-icon").on("click", function(){
		$partLists.hide();
		$(".christopher-parts").show();
	});

	// When you click on the james icon, show his parts
	$(".james-icon").on("click", function(){
		$partLists.hide();
		$(".james-parts").show();
	});

	// When you click on the hat icon, show the hat parts
	$(".hat-icon").on("click", function(){
		$partLists.hide();
		$(".hat-parts").show();
	});

	// When you click on the eye icon, show the eye parts
	$(".eye-icon").on("click", function(){
		$partLists.hide();
		$(".eye-parts").show();
	});

	// When you click on the nose icon, show the nose parts
	$(".nose-icon").on("click", function(){
		$partLists.hide();
		$(".nose-parts").show();
	});

	// When you click on the mouth icon, show the mouth parts
	$(".mouth-icon").on("click", function(){
		$partLists.hide();
		$(".mouth-parts").show();
	});

	// When you click on the hair icon, show the hair parts
	$(".hair-icon").on("click", function(){
		$partLists.hide();
		$(".hair-parts").show();
	});

	// When you click on the hand icon, show the hand parts
	$(".hand-icon").on("click", function(){
		$partLists.hide();
		$(".hand-parts").show();
	});

	// When you click on the accessories icon, show the accessories parts
	$(".accessories-icon").on("click", function(){
		$partLists.hide();
		$(".accessories-parts").show();
		console.log("Hello");
	});

	// Droppable container
	$("#drop-container").droppable({
		accept:'.drop-thing',
		// tolerance: 'pointer',
		drop: function(event, ui) {
			$(this).append($(ui.helper).clone().addClass("resizable ui-resizable"));
			$('#drop-container .part').addClass('item');
			$(".item").removeClass('ui-draggable product drop-thing');
			$('.item').resizable().draggable({
				containment: 'container',
				grid: [5,5]
			});
		}
	});



	// Make all the parts draggable
	$(".part").draggable({
		// autoHide: true
		helper: 'clone',
		cursor: 'hand'
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















