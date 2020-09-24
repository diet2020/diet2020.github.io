$(document).ready(function(){
	$('.navbar-collapse a').click(function (e) {
		if  (window.innerWidth < 768){
			$('.navbar-collapse').collapse('toggle');
		}
	});
});