var pickerCreate = document.getElementById('create-picker');
			var pickerOpen = document.getElementById('open-picker');
			var pickerClose = document.getElementById('close-picker');
			var pickerSelect = document.getElementById('select-picker');
			var pickerRender = document.getElementById('render-picker');
			var up, up1, up2, animaed;

			var selectYes = document.getElementById('selectYes');
			var selectClose = document.getElementById('selectClose');
			
			var please_select = [{
				"key": "请选择 ",
				"value": "请选择"
				}
			];

			var upData = []
			selectClose.addEventListener('click', function() {
				animaed.finish();
			})
				function addOption(id_name,wower,data,level,rt){
				switch(level){
				case 1:	
				up = UIPickerView.createPickerView({
					dataSource: data,
					id: id_name,
					constraintsId: wower,
					kUP: {	kUPCELLHEIGHT: 26,	kUPFRICTION: 0.003	},
					valueChange: rt
				});
				break;
				case 2:	
					up2 = UIPickerView.createPickerView({
						dataSource: data,
						id: id_name,
						constraintsId: wower,
						kUP: {	kUPCELLHEIGHT: 26,	kUPFRICTION: 0.003	},
						valueChange: rt
					});
					break;
				case 3:	
					up3 = UIPickerView.createPickerView({
						dataSource: data,
						id: id_name,
						constraintsId: wower,
						kUP: {	kUPCELLHEIGHT: 26,	kUPFRICTION: 0.003	},
						valueChange: rt
					});
					break;
				
				}
				//animaed.UPRender()
			}
			
			$(function() {
				up1 = addOption('Picker_1','wower1',please_select,1,console.log)
				up2 = addOption('Picker_2','wower2',please_select,2,console.log)
				up3 = addOption('Picker_3','wower3',please_select,3,console.log)
				
				animaed = CAAnimation.createAnimation({
					id: 'region-picker'
				});
		 
				
			
			});
			
			function select_options(data,p_id){
				var arr = [];
				arr[0] = {"id":"-1","value": "请选择","parent_id":"0"}
				var i = 1;
				$.each(data,function(k,v){
					if(v.parent_id == p_id){
						arr[i] = v
						i++;
					}
				})
				
				
				return arr;
			}
			
			
			 selectYes.addEventListener('click', function() {
				    animaed.finish();
				    var input_id = $(this).attr('data-input-id')
				   console.log(upData)
				   var name = upData.value
				   $("#"+input_id).val(name)
				  })