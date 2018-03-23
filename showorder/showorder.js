/*
** Author douchaoyang
*/
;(function($){
	$.fn.showorder = function(param) {
		var o = {
			clss : "active", // 执行样式
			sped : 200, // 同一高度元素执行时间间隔
			part : 3, // 在距离窗口几分之一高度时执行
			perc : 0.2 // 变换高度比例(eg: transform: translateY(20%))
		};
		o = $.extend({}, o, param);
		var _t = this; // 元素不可设置隐藏，否则数量无法正常获取
		var tmp = {}; // 初始化分类
		for(var i = 0; i < _t.length; i++)
		{
			var atr = _t.eq(i).offset().top;
			if(tmp[atr]) {
				tmp[atr].push(_t.eq(i));
			}
			else {
				tmp[atr] = [];
				tmp[atr].push(_t.eq(i));
			}
		};
		// 执行动画队列
		var e = function() {
			var t = $(window).scrollTop();
			var h = $(window).height();
			var a = t + h;
			$.each(tmp, function(key, value){
				if(a > parseInt(key) + h / o.part - value[0].outerHeight() * o.perc){
					for(var i = 0; i < value.length; i++)
					{
						(function(i){
							var _i = i;
							setTimeout(function(){
								value[_i].addClass(o.clss);
							}, _i*o.sped);
						})(i);
					}
				}
			});
		};
		e();$(window).scroll(function(){e()});
	};	
})(jQuery);