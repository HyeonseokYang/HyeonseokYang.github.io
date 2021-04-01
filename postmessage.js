 	window.addEventListener('message', function (e) {
			if(e.data.indexOf("e1setting_") !==-1){	
				
				document.querySelector("#txtNexonID").value=e.data.replace("e1setting_","");
			}else if(e.data.indexOf("e2setting_") !==-1){
				document.querySelector("#txtPWD").value=e.data.replace("e2setting_","");
 		   		document.querySelector("#btnLogin").click();
			}else if(e.data=="e3setting"){
				GnxGameStartOnClick();
			}
			
 		});
