(function($) {
	// like a andorid mobile message tools 'Toast' : by unistyle
	$.fn.toast = function(opt) {
		var options = {
			message: "input message",
			color: "#fff",
			bgColor: "#777",
			type: "default",
			fontWeight: "normal",
			position: "bottom",
			fontSize: "1em",
			delay: 1000
		}

		if (typeof opt == "object") {
			$.extend(options, opt);
		} else if (typeof opt == "string") {
			$.extend(options, {"message": opt});
		} else {
			return false;
		}

		// same color with bootstrap
		if (options.type != "default") {
			switch (options.type) {
				case "primary": options.bgColor = "#337ab7"; break;
				case "success": options.bgColor = "#5cb85c"; break;
				case "info": options.bgColor = "#5bc0de"; break;
				case "warning": options.bgColor = "#f0ad4e"; break;
				case "danger": options.bgColor = "#d9534f"; break;
			}
		}

		var style = 'position:fixed; text-align:center; border-radius:10px; padding:12px 20px 12px 20px; z-index:10000; opacity:0; word-break:break-all; margin:0 10px 0 10px; ' +
					'font-size:' + options.fontSize + '; font-weight:' + options.fontWeight + '; background-color:' + options.bgColor + '; color:' + options.color + ';';

		if (options.position == "top") {
			style += 'top:30px;';
		} else {
			style += 'bottom:30px;';
		}

		var dom = '<div id="Toast" style="' + style + '">' + options.message + '</div>';

		if ($("#Toast").length > 0) {
			$("#Toast").stop().clearQueue().remove();
		}

		$(this).append(dom);

		var w = parseInt($("#Toast").width()) + 60; //40 padding left and right value
		var sw = $("body").width();
		var lp = Math.floor((sw - w) / 2);

		$("#Toast").css("left", lp + "px").animate({"opacity": 1}, 800, function() {
			var $this = $(this);

			var timeout = setTimeout(function() {
				$this.animate({"opacity":0}, 800, function() {
					clearTimeout(timeout);
					$(this).remove();
				});
			}, options.delay);
		});
	};
})(jQuery);