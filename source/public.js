			/*
			 * AJAX 操作
			 * 支持POST/GET
			 * */
			function amAJAX(url, type, data, refunc) {
				$.ajax({
					async: true,
					url: url,
					type: type,
					data: data,
					success: refunc
				})
			}

			/*
			 * 点击显示信息提示框
			 * obj     : 目标对象  $("#name")
			 * msg     : 弹出信息
			 * type    : 弹出形式 click / hover / focus  trigger: 'hover focus'
			 * IsFocus : 光标是否过去 默认是TRUE(过去)
			 * theme   ： 主题色调 默认:primary  样式表：primary / secondary / success / warning / danger~大小:sm / lg
			 * slide   ：是否滑动，默认是FALSE（不滑动）
			 * */
			function amPopoverShow(obj, msg, type, IsFocus, theme, slide) {
				if (!type) type = 'focus';
				if (!IsFocus) IsFocus = false;
				if (!theme) theme = 'primary';
				if (!slide) slide = false;
				var attrValue = "{ theme：'" + theme + "'  , trigger：'" + type + "'}";
				//console.log(attrValue)
				amPopoverDrop(obj);
				obj.attr('data-am-popover', attrValue).popover('setContent', msg).popover('open');
				if (IsFocus) {
					obj.focus();
				}

			} //END FUNCTION

			/*
			 * 移除消息提示框
			 * OBJ :    目标对象
			 * */
			function amPopoverDrop(obj) {
				obj.popover('close').removeAttr('data-am-popover');
			} //END FUNCTION
			
			function hdb_smscode(type){
				
			}
			
			function GetQueryString(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return null;
			}
