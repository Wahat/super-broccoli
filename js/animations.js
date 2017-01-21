$(document).ready(function() {
	$(".nav-item").click(function() {
		this.toggleClass("active");
	});
	$(".typing").keypress(function() {
		$(".pan").toggleClass("pan-up");
	});
});