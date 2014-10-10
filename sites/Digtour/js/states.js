$(document).ready(function(){
	var selectStates = $(".states");
	selectStates.hide();

	$('.country').change(function(){
		if ($(this).val() == "US"){
			selectStates.show();
		} else {
			selectStates.hide();
		}
	});
});