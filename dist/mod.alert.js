"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(function (require, exports, module) {
	var Public = function () {
		function Public() {
			_classCallCheck(this, Public);

			this.rightIco = "<img src='https://static.liantuobank.com/project/corewallet/images/rightIco.png'/>";
			this.errorIco = "<img src='https://static.liantuobank.com/project/corewallet/images/errorIco.png'/>";
			this.searchonIco = "https://static.liantuobank.com/project/corewallet/images/searchIcoOn.gif";
			this.searchIco = "https://static.liantuobank.com/project/corewallet/images/searchIco.gif";
			this.hidetime = 33300011111;
			this.width = $(".viewcont").width();
		}

		_createClass(Public, [{
			key: "lock",
			value: function lock(obj, time) {
				//防止重复提交
				if (time == undefined) {
					time = 3000;
				}
				var nowTime = new Date().getTime();
				var clickTime = obj.attr("ctime");
				if (clickTime != 'undefined' && nowTime - clickTime < time) {
					return false;
				} else {
					obj.attr("ctime", nowTime);
					return true;
				}
			}
		}, {
			key: "time",
			value: function time(obj, num, callback) {
				var number = num,
				    len = num * 1000,
				    _this = this;
				obj[0].onclick = function () {
					if (obj.attr("dis") == "true") {
						len = num * 1000;
					} else {
						len = 0;
					}
					if (!_this.lock($(this), parseInt(len))) return false;
					obj.addClass("cancelbtn").removeClass("sendbtn").attr("dis", "true");
					obj[0].innerHTML = "验证码已发送" + number + "s";
					var error = function error() {
						window.clearInterval(oop);
						obj[0].innerHTML = '发送验证码';
						obj.removeClass("cancelbtn").addClass("sendbtn").attr("dis", "false");
						number = num;
					};
					var oop = window.setInterval(function () {
						if (number <= 1) {
							error();
						} else {
							number--;
							obj[0].innerHTML = "验证码已发送" + number + "s";
						}
					}, 1000);
					if (typeof callback == "function") callback(error);
				};
			}
		}, {
			key: "showId",
			value: function showId(num) {
				var str,
				    list = [{ "name": "美食", "code": 2015050700000000 }, { "name": "超市便利店", "code": 2015091000052157 }, { "name": "休闲娱乐", "code": 2015062600004525 }, { "name": "购物", "code": 2015062600002758 }, { "name": "爱车", "code": 2016062900190124 }, { "name": "生活服务", "code": 2015063000020189 }, { "name": "教育培训", "code": 2016042200000148 }, { "name": "医疗健康", "code": 2016062900190296 }, { "name": "航旅", "code": 2015080600000001 }, { "name": "专业销售/批发", "code": 2016062900190337 }, { "name": "政府/社会组织", "code": 2016062900190371 }];
				for (var i = 0; i < list.length; i++) {
					if (num == list[i].code) {
						str = list[i].name;
					}
				}
				return str;
			}
		}, {
			key: "layerIframeClose",
			value: function layerIframeClose() {
				//弹层关闭方法iframe
				$("#wBox_overlay", parent.document).remove();
				$("#wBoxContent", parent.document).children().clone().appendTo($("body"));
				$("#wBox", parent.document).remove();
				$("#wBoxContent", parent.document).children().remove();
			}
		}, {
			key: "althide",
			value: function althide(body) {
				//删除alter弹层
				var _body = body || $("body");
				setTimeout(function () {
					_body.find("#alert_msg").fadeOut(this.hidetime, function () {
						$(this).remove();
						_body.find('.alert_style2').remove();
					});
				}, this.hidetime);
			}
		}, {
			key: "althideset",
			value: function althideset() {
				//删除alter弹层
				setTimeout(function () {
					$("#alert_msg").fadeOut(this.hidetime, function () {
						$(this).remove();
					});
					$('.alert_style2').remove();
				}, 0);
			}
		}, {
			key: "clearalter",
			value: function clearalter() {
				$("#alert_msg").remove();
				$('.alert_style2').remove();
			}
		}, {
			key: "avoidCntClick",
			value: function avoidCntClick(callback, wait, id) {
				//防止重复发送
				var $self = this,
				    _callback = callback || function () {},
				    _id = id || "flag";
				if ($self[_id]) {
					window.clearTimeout($self[_id]);
					delete $self[_id];
				}
				return $self[_id] = window.setTimeout(function () {
					callback();
					delete $self[_id];
				}, wait, _id);
			}
		}, {
			key: "getScreenHeight",
			value: function getScreenHeight() {
				var height = window.screen.height;
				if (height <= 768) {
					wboxHeigt = 400;
				} else if (height == 1024) {
					wboxHeigt = 500;
				} else if (height == 1080) {
					wboxHeigt = 600;
				} else {
					wboxHeigt = 400;
				}
				return wboxHeigt;
			}
		}, {
			key: "setselWidth",
			value: function setselWidth() {
				var num = $(".selectW").find(".jsBtLabel").html().length;
				if (num <= 10) {
					$(".selectW").css({ "width": "200px" });
					$(".selectW dl").css({ "width": "200px" });
				} else if (num > 10 && num < 20) {
					$(".selectW").css({ "width": "300px" });
					$(".selectW dl").css({ "width": "300px" });
				} else if (num >= 20) {
					$(".selectW").css({ "width": "430px" });
					$(".selectW dl").css({ "width": "430px" });
				}
			} //返回成功页面

		}, {
			key: "successHtml",
			value: function successHtml(con) {
				var str;
				str += '<div id="Winpop">' + '<div id="layerBox" class="h340"><div class="successBox"><img class="img-width-success" src="https://static.liantuobank.com/project/lianfutong/images/right_ico.png" style="width:12%;" title=""></div>' + con + '</div>' + '<div id="popBtn" class="g-tc">' + '<div class="bluebtn save">' + '<a class="btn wBox_close">关闭</a>' + '</div>' + '</div>' + '</div>';
				return str;
			}
		}, {
			key: "autoList",
			value: function autoList() {
				var len = $("#autoList li").length;
				if (len <= 6) {
					$("#autoList").css({ "width": "200" });
				} else if (len > 6 && len <= 12) {
					$("#autoList").css({ "width": "328px" });
				} else {
					$("#autoList").css({ "width": "635px" });
				}
			}
		}, {
			key: "hideLoad",
			value: function hideLoad() {
				$(".iframeloading").addClass("hide");
			}
		}, {
			key: "checkboxList",
			value: function checkboxList(obj) {
				var arr = [];
				$(document).on("click", ".allChk", function () {
					$("#" + obj).val("");
					var arr = [],
					    flag = $(this)[0].checked,
					    children = $(".singleChk");
					arr.push($(this).attr("varid"));
					if (flag == true) {
						children.each(function (i) {
							$(this)[0].checked = true;
							arr.push($(this).attr("varid"));
						});
					} else {
						children.each(function (i) {
							$(this)[0].checked = false;
							arr = [];
						});
					}
					$("#" + obj).val(arr.join());
				});
				$(document).on("click", ".singleChk", function () {
					$("#" + obj).val("");
					var arr = [],
					    flag = $(this)[0].checked;
					if (flag == false) {
						$(".allChk")[0].checked = false;
					}
					$(".singleChk").each(function (i) {
						if ($(this)[0].checked) {
							arr.push($(this).attr("varid"));
						}
					});
					$("#" + obj).val(arr.join());
				});
			}
		}, {
			key: "allcheck",
			value: function allcheck(object, object2) {
				//传赋值隐藏域的id
				//全选和反选
				$(document).on("click", ".tablecs input", function () {
					var obj = $(".table .uicheckbox"),
					    str = "",
					    strnum = "";
					for (var i = 0; i < $(".table .uicheckbox").length; i++) {
						var chkbox = obj.find("input[type='checkbox']")[i];
						if ($(this)[0].checked == true) {
							chkbox.checked = true;
							str += obj.find(".chk").eq(i).val() + ",";
							strnum += obj.find(".cek").eq(i).val() + ",";
						} else {
							chkbox.checked = false;
							$("#" + object).val("");
							$("#" + object2).val("");
						}
					}
					str = str.substring(0, str.length - 1);
					strnum = strnum.substring(0, strnum.length - 1);
					$("#" + object).val(str);
					$("#" + object2).val(strnum);
					if ($("#" + object).val() != "") {
						$(".batchOperation").attr("id", "batchOperation");
					} else {
						$(".batchOperation").attr("id", "batch");
					}
				});
				//单选
				$(document).on("click", ".table input", function () {
					var obj = $(".table .uicheckbox"),
					    str = "",
					    strnum = "";
					for (var i = 0; i < $(".table .uicheckbox").length; i++) {
						if (obj.find("input[type='checkbox']")[i].checked == true) {
							str += obj.find(".chk").eq(i).val() + ",";
							strnum += obj.find(".cek").eq(i).val() + ",";
						}
					}
					str = str.substring(0, str.length - 1);
					strnum = strnum.substring(0, strnum.length - 1);
					$("#" + object).val(str);
					$("#" + object2).val(strnum);
					if ($("#" + object).val() != "") {
						$(".batchOperation").attr("id", "batchOperation");
					} else {
						$(".batchOperation").attr("id", "batch");
					}
				});
			}
		}, {
			key: "gettabWidth",
			value: function gettabWidth() {
				$(".tabBox .tcol").each(function () {
					$(".tcol.ellips").each(function () {
						$(this).removeAttr("style");
					});
					var _parentWidth = $(this).parent("td").width(),
					    str = $(this).attr("title"),
					    str1 = "";
					$(this).css({ width: _parentWidth }).addClass("ellips");
					if (str != undefined) {
						for (var i = 0; i < str.length; i++) {
							if ((i + 1) % 15 == 0) {
								str1 += str[i] + "\n";
							} else {
								str1 += str[i];
							}
						}
						$(this).attr("title", str1);
					}
				});
			}
		}, {
			key: "settabWidth",
			value: function settabWidth() {
				var width = document.body.scrollWidth - 60;
				$(".tabBox").width(width);
				$(".tabBox .col1").css({ "min-width": 140 });
				$(".tabBox .col2").css({ "min-width": 76 });
				$(".tabBox .col3").css({ "min-width": 46 });
				$(".tabBox .col4").css({ "min-width": 170 });
			}
		}, {
			key: "setparentTabwidth",
			value: function setparentTabwidth() {
				//寻找父级元素，设置table宽度
				$(".tabBox", window.parent.document).width($(".viewcont", window.parent.document).width());
				$(".tabBox .tcol", window.parent.document).each(function () {
					var _parentWidth = $(this).parent("td").width(),
					    str = $(this).attr("title"),
					    str1 = "";
					$(this).css({ width: _parentWidth }).addClass("ellips");
					if (str != undefined) {
						for (var i = 0; i < str.length; i++) {
							if ((i + 1) % 15 == 0) {
								str1 += str[i] + "\n";
							} else {
								str1 += str[i];
							}
						}
						$(this).attr("title", str1);
					}
				});
			}
		}, {
			key: "getlayerWidth",
			value: function getlayerWidth(height) {
				document.getElementById('wBoxIframe').onload = function () {
					var _parent = document.getElementById("wBoxIframe").contentWindow,
					    _obj = $(_parent.document).find("body").find("#layerBox"),
					    _obj2 = $(_parent.document).find("body").find(".layerBox"),
					    btn = $(_parent.document).find("body").find("#popBtn").length;
					if (btn > 0) {
						_obj.css({ "height": height - 50 });
						_obj2.css({ "height": height - 50 });
					} else {
						_obj.css({ "height": height });
						_obj2.css({ "height": height });
					}
				};
			}
		}, {
			key: "changetabBorder",
			value: function changetabBorder() {
				if ($(".table").parent().attr("class") == "tabBox") {
					$(".table").css({ "borderRight": "0 none" });
					$(".table").parent().css({ "borderRight": "1px solid #edeeef" });
				}
			}
		}]);

		return Public;
	}();

	module.exports = new Public();
});
//# sourceMappingURL=mod.alert.js.map
