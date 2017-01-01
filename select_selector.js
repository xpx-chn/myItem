function move(btn) {
	var left_sel = document.getElementById("unsel");
	var right_sel = document.getElementById("sel");
	var left_opts = document.querySelectorAll("#unsel>option"); //获取所有option
	var right_opts = document.querySelectorAll("#sel>option");
	/*var sel_left_opts = Array.prototype.filter.call(left_opts, function(item) {
		return item.selected == true;
	})
	var sel_right_opts = Array.prototype.filter.call(right_opts, function(item) {
		return item.selected == true;
	})
	var unsel_left_opts = Array.prototype.map.call(left_opts, function(item) {
		return (item.selected ||item.outerHTML);
	})
	var unsel_right_opts = Array.prototype.map.call(right_opts, function(item) {
		return (item.selected ||item.outerHTML);
	})*/
		//  ========== 
		//  = 用循环完成 = 
		//  ========== 
	var countries = [],sel_left_opts=[],sel_right_opts=[],unsel_left_opts=[],unsel_right_opts=[];
	for(var i=0;i<left_opts.length;i++){
		left_opts[i].selected?(sel_left_opts.push(left_opts[i])):(unsel_left_opts.push(left_opts[i].outerHTML))
	};
	for(var i=0;i<right_opts.length;i++){
		right_opts[i].selected?(sel_right_opts.push(right_opts[i])):(unsel_right_opts.push(right_opts[i].outerHTML))
	};
	function country(left, right) {
		if(left) {
			for(var i = 0; i < left.length; i++) {
				countries.push(left[i].innerHTML);
			};
		}
		if(right) {
			for(var i = 0; i < right.length; i++) {
				countries.push(right[i].innerHTML);
			};
		}
		countries.sort();
	}
	if(btn.innerHTML === "&gt;&gt;") {
		country(left_opts, right_opts);
		left_sel.innerHTML = "";
		right_sel.innerHTML = `<option>${countries.join("</option><option>")}</option>`;
	} else if(btn.innerHTML === "&lt;&lt;") {
		country(left_opts, right_opts);
		right_sel.innerHTML = "";
		left_sel.innerHTML = `<option>${countries.join("</option><option>")}</option>`;
	} else if(btn.innerHTML === "&gt;") {
		country(sel_left_opts, right_opts);
		left_sel.innerHTML=unsel_left_opts.join("");
		right_sel.innerHTML = `<option>${countries.join("</option><option>")}</option>`;
	} else if(btn.innerHTML === "&lt;") {
		country(left_opts, sel_right_opts);
		right_sel.innerHTML=unsel_right_opts.join("");
		left_sel.innerHTML = `<option>${countries.join("</option><option>")}</option>`;
	}
}