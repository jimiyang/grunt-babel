define(function(require,exports,module){
	class Public{
		constructor(){
			this.hidetime=33300011111;
			this.width=$(".viewcont").width();
		}
		lock(obj,time){ //防止重复提交
			if(time==undefined){time=3000}
			var nowTime = new Date().getTime();
			var clickTime = obj.attr("ctime");
			if( clickTime != 'undefined' && (nowTime - clickTime < time)){
				return false;
			}else{
				obj.attr("ctime",nowTime);
				return true;
			}			
		}
		time(obj,num,callback){
			var number= num,len = num * 1000,_this = this;
			obj[0].onclick=function(){
				if(obj.attr("dis")=="true"){
					len = num * 1000;
				}else{
					len = 0;
				}
				if(!_this.lock($(this),parseInt(len))) return false;
				obj.addClass("cancelbtn").removeClass("sendbtn").attr("dis","true");
				obj[0].innerHTML ="验证码已发送"+number+"s";
				var error=function(){
					window.clearInterval(oop);
					obj[0].innerHTML='发送验证码';
					obj.removeClass("cancelbtn").addClass("sendbtn").attr("dis","false");
					number = num;
				}
				var oop = window.setInterval(function(){
					if(number<=1){
						error();
					}else{
						number--;
						obj[0].innerHTML="验证码已发送"+number+"s";
					}
				},1000);
				if(typeof callback == "function")
				callback(error);
			}
		}
		showId(num){
			var str,list = [
				{"name":"美食","code":2015050700000000},
				{"name":"超市便利店","code":2015091000052157},
				{"name":"休闲娱乐","code":2015062600004525},
				{"name":"购物","code":2015062600002758},
				{"name":"爱车","code":2016062900190124},
				{"name":"生活服务","code":2015063000020189},
				{"name":"教育培训","code":2016042200000148},
				{"name":"医疗健康","code":2016062900190296},
				{"name":"航旅","code":2015080600000001},
				{"name":"专业销售/批发","code":2016062900190337},
				{"name":"政府/社会组织","code":2016062900190371},
				];
			for(var i = 0;i<list.length;i++){
				if(num == list[i].code){
					str = list[i].name;
				}
			}
			return str;
		}
		
		avoidCntClick(callback,wait,id){ //防止重复发送
			var $self = this,_callback = callback || function(){},_id = id || "flag";
			if ($self[_id]) {
				window.clearTimeout($self[_id]);
				delete $self[_id];
			}
			return $self[_id] = window.setTimeout(function() {
				callback();
				delete $self[_id];
			}, wait,_id);
		}
	}
	module.exports=new Public();
});