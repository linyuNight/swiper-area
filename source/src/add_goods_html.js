	$(function() {
				//快速生成html
			
				var html = '';
				$.each(goods_group, function(k, r) {
					html += '<div class="am-u-sm-12 goods_form_group">'
					html += '<div class="am-container">'
					html += '<div class="am-u-sm-2 ">' + r.laber + '</div>'
					if(r.number){
						html += '<div class="am-u-sm-8"><input type="number" class="hdb-input" id="' + r.id + '" placeholder="' + r.placeholder + '"'
					}else{
						html += '<div class="am-u-sm-8"><input type="text" class="hdb-input" id="' + r.id + '" placeholder="' + r.placeholder + '"'

					}
					
					if(r.readonly){
						html += ' readonly';
					}
					html += '></div>'
					if (r.unit) {
						html += '<div class="am-u-sm-2 am-text-center">' + r.unit + '</div>'
					} else html += '<div class="am-u-sm-2"></div>'
					html += '</div>'
					html += '</div>'
				})
				$("#goods_form_content").html(html)

			})