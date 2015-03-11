$(function(){
	var obar_time;
	var num=0;
	var obar=$(".obannermall");
	var obar_li=$(".obannermall .banr li");
	var obar_num=$(".obannermall .num li");
	function hiobar(num){
		var obar_class="now";
		obar_num.removeClass(obar_class);
		obar_num.eq(num).addClass(obar_class);
		obar_li.removeClass(obar_class);
		obar_li.eq(num).addClass(obar_class);	
	}
	obar.hover(function(){
		clearInterval(obar_time);	
	},
	function(){
		obar_time = setInterval(function(){
			hiobar(num);
			num>=4?num=0:num++;
		},3000)
	}).trigger("mouseleave");
	obar_num.mouseenter(function(){
		num=$(this).index();
		hiobar(num);
	})
})