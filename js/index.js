$(function () {
	$("#content_1").text("스페셜 쿠키 뽑기");
	var content1 = new Date(2021, 3 - 1, 3, 23, 59, 0, 0);
	$("#countdown_content_1").countdown({until: content1, compact: true, onTick: function() {
		let time = $("#countdown_content_1").countdown('getTimes');
		if (time[3] == 0) $("#countdown_content_1").children().css("color","orange");
		if (time[0]+time[1]+time[2]+time[3]+time[4]+time[5]+time[6] == 0) $("#countdown_content_1").children().css("color","violet");
	}});
	$("#countdown_content_1").css("font-size", "9px");
	$("#content_2").text("킹덤 아레나");
	var content2 = new Date(2021, 3 - 1, 25, 0, 0, 0, 0); //매달 25일에 정산
	while(true) {
		if(content2 - new Date() <= 0) {
			content2.setMonth(content2.getMonth()+1);
		}
		else break;
	}
	$("#countdown_content_2").countdown({until: content2, compact: true, onTick: function() {
		let time = $("#countdown_content_2").countdown('getTimes');
		if (time[3] == 0) $("#countdown_content_2").children().css("color","orange");
		if (time[0]+time[1]+time[2]+time[3]+time[4]+time[5]+time[6] == 0) $("#countdown_content_2").children().css("color","violet");
	}});
	$("#countdown_content_2").css("font-size", "9px");
});