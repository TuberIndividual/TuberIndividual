$(document).ready(function(){

	// Initially hide all the parts
	var $partLists =$(".part-list"); 
	$partLists.hide();

	// When you click on an icon, show the parts for that category
	$(".icon").on("click", function(){
		$partLists.hide();
		$("." + $(this).data('category') + "-parts").show();
	});

	// Droppable container
	$("#drop-container").droppable({
		accept:'.drop-thing',
		tolerance: 'pointer',
		drop: function(event, ui) {
			$(this).append($(ui.helper).clone().css("left","200px").addClass("resizable ui-resizable"));
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















