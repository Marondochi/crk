$(function() { //바로 실행
	calcXp();
	$("#calc_xp").click(function() { calcXp(); });
	$("#curr_level").change(function() { calcXp(); });
	$("#archive_level").change(function() { calcXp(); });
	$("#curr_xp").change(function() { calcXp(); });
	for(let i = 1; i <= 7; i++) $("#star_jelly_"+i).change(function() { calcXp(); });
});

const calcXp = () => {
	let currLevel = $("#curr_level").val();
	let currXp = $("#curr_xp").val();
	let archiveLevel = $("#archive_level").val();
	let maxXp = Number($("#req_xp_"+eval(Number(currLevel)+1)).text().replace(/,/g, ''));
	$("#curr_xp").attr("max", maxXp);
	let starJelly = [];
	starJelly[0] = $("#star_jelly_1").val()*14;
	starJelly[1] = $("#star_jelly_2").val()*60;
	starJelly[2] = $("#star_jelly_3").val()*150;
	starJelly[3] = $("#star_jelly_4").val()*400;
	starJelly[4] = $("#star_jelly_5").val()*800;
	starJelly[5] = $("#star_jelly_6").val()*1600;
	starJelly[6] = $("#star_jelly_7").val()*3000;
	let sumOfJelly = starJelly[0] + starJelly[1] + starJelly[2] + starJelly[3] + starJelly[4] + starJelly[5] + starJelly[6];
	$("#avail_xp").text(numberComma(String(Number(currXp)+sumOfJelly)));
	let totalReqXp = $("#total_req_xp");
	if(currLevel === "1") totalReqXp.text(numberComma(String(Number($("#req_total_xp_"+archiveLevel).text().replace(/,/g, '')))));
	else totalReqXp.text(numberComma(String(Number($("#req_total_xp_"+archiveLevel).text().replace(/,/g, ''))-Number($("#req_total_xp_"+currLevel).text().replace(/,/g, '')))));
	let reqXpForStarCandy = Number(totalReqXp.text().replace(/,/g, ''))-currXp-sumOfJelly;
	if(reqXpForStarCandy < 0) {
		$("#req_xp_for_star_jelly").text("0");
		$("#req_lv1_xp_for_star_jelly").text("0");
	}
	else {
		$("#req_xp_for_star_jelly").text(numberComma(String(reqXpForStarCandy)));
		$("#req_lv1_xp_for_star_jelly").text(numberComma(String(Math.ceil(reqXpForStarCandy/14))+"개"));
	}
}

const levelValidation = (obj) => {
	if(Number($(obj).val()) > Number($(obj).attr("max"))) $(obj).val($(obj).attr("max"));
	if(Number($(obj).val()) < Number($(obj).attr("min"))) $(obj).val($(obj).attr("min"));
	if(Number($("#archive_level").val()) < Number($("#curr_level").val())) $("#archive_level").val(Number($("#curr_level").val())+1);
	if(Number($("#curr_xp").val()) > Number($("#req_xp_"+eval(Number($("#curr_level").val())+1)).text().replace(/,/g, ''))) $("#curr_xp").val(Number($("#req_xp_"+eval(Number($("#curr_level").val())+1)).text().replace(/,/g, '')));
}

const numberComma = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const toastView = (text) => {
	$("body").toast(text);
}