 	window.addEventListener('message', function (e) {
			if(e.data=="e1"){	
 		   document.querySelector("#txtNexonID").value="gustjr5702";
 		   document.querySelector("#txtPWD").value="rkskekfk1!";
 		   document.querySelector("#btnLogin").click();
			}else if(e.data=="e2"){
				GnxGameStartOnClick();
			}
			
 		});
