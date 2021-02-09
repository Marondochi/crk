$(function() { //바로 실행
	$("#calc_xp").click(function() {
		let currLevel = $("#curr_level").val();
		let currXp = $("#curr_xp").val();
		let archiveLevel = $("#archive_level").val();
		let candy = new Array();
		candy[0] = $("#candy_1").val()*14;
		candy[1] = $("#candy_2").val()*60;
		candy[2] = $("#candy_3").val()*150;
		candy[3] = $("#candy_4").val()*400;
		candy[4] = $("#candy_5").val()*800;
		candy[5] = $("#candy_6").val()*1600;
		candy[6] = $("#candy_7").val()*3000;
		let sumOfCandy = candy[0] + candy[1] + candy[2] + candy[3] + candy[4] + candy[5] + candy[6];
		let totalReqXp = $("#total_req_xp");
		
		if(!$.isNumeric(currLevel) || currLevel < 1 || currLevel > 49) {
			toastView("현재 레벨은 1~49 사이의 숫자만 가능합니다.");
			$("#curr_level").focus();
			return;
		}
		if(!$.isNumeric(archiveLevel) || archiveLevel < 2 || currLevel > 50) {
			toastView("목표 레벨은 2~50 사이의 숫자만 가능합니다.");
			$("#archive_level").focus();
			return;
		}
		if(!$.isNumeric(currXp) || currXp < 0) {
			toastView("현재 경험치는 0 이상의 숫자만 가능합니다.");
			$("#curr_xp").focus();
			return;
		}
		
		let flag = 0;
		$.each(candy, function(index, item) {
			if(!$.isNumeric(item) || item < 0) {
				toastView("별사탕 개수는 0 이상의 숫자만 가능합니다.");
				$("#candy_"+eval(index+1)).focus();
				flag = 1;
				return;
			}
		});
		if(flag) return;
		
		if(currLevel === "1") totalReqXp.text(numberComma(String(Number($("#req_xp_"+archiveLevel).text().replace(/,/g, ''))-currXp)));
		else totalReqXp.text(numberComma(String(Number($("#req_xp_"+archiveLevel).text().replace(/,/g, ''))-Number($("#req_xp_"+currLevel).text().replace(/,/g, ''))-currXp)));
		let reqXpForStarCandy = Number(totalReqXp.text().replace(/,/g, ''))-sumOfCandy;
		if(reqXpForStarCandy < 0) $("#req_xp_for_star_candy").text("0");
		else $("#req_xp_for_star_candy").text(numberComma(String(reqXpForStarCandy)));
	});
});

const numberComma = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const toastView = (text) => {
	$("body").toast(text);
}