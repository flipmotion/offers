'use strict';
(function(){
	var app = function(options) {
		var app = document.querySelector(options.el);
		var output = document.querySelector(options.output);
		var str = document.querySelector(options.str);
		var num = document.querySelector(options.num);
		//simple solution

		let IsNan = function(data){
			//one example
			output.innerHTML = '<kbd>' + !isNaN(data.innerHTML)  + '</kbd>';
		}

		//more complex solution
		let isNumeric = function(data) {
			output.innerHTML =  '<kbd>' + !isNaN(parseFloat(data.innerHTML)) && isFinite(data.innerHTML) + '</kbd>';
		}

		let Btn = function(e){
			let tar = e.target;
			if(tar.tagName != 'BUTTON') return;

			let btn = tar.getAttribute('data-item');
			str.style.border = "";
			num.style.border = "";
			if(btn === 'get-str') {
				str.style.border = "1px solid #333";
				IsNan(str);
				//isNumeric(str);
			} else if(btn === 'get-num'){
				num.style.border = "1px solid #333";
				IsNan(num);
				//isNumeric(num);
			}
		}


		let init = function(){
			output.innerHTML = '<kbd>nothing here =)</kbd>';
			app.addEventListener('click', Btn);
		}
		

		return {
			init:init
		}
	}
	var App = app({
		el: '[data-item="NaN"]',
		btnStr: '[BtnNamber="get-str"]',
		btnNum: '[data-item="get-num"]',
		str: '[data-item="string"]',
		num: '[data-item="number"]',
		output: '[data-item="output"]'
	});
	App.init();
})();
