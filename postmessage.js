 	window.addEventListener('message', function (e) {
			if(e.data=="e1"){	
 		   document.querySelector("#txtNexonID").value="abc";
 		   document.querySelector("#txtPWD").value="123";
 		   document.querySelector("#btnLogin").click();
			}else if(e.data=="e2"){
				GnxGameStartOnClick();
			}
			
 		});
