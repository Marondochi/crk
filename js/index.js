$(function () {
	var content1 = new Date(2021, 3 - 1, 5, 0, 0, 0, 0);
	$('#countdown_content_1').countdown({until: content1, compact: true});
	$('#countdown_content_1').css("font-size", "12px");
	var content2 = new Date(2021, 2 - 1, 25, 0, 0, 0, 0);
	$('#countdown_content_2').countdown({until: content2, compact: true});
	$('#countdown_content_2').css("font-size", "12px");
});