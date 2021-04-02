 	window.addEventListener('message', function (e) {
			if(e.data.indexOf("e4setting") !==-1){	
				
			}else if(e.data.indexOf("e1nexon_") !==-1){	
				document.querySelector("#txtNexonID").value=e.data.replace("e1nexon_","");
				
			}else if(e.data.indexOf("e2nexon_") !==-1){
				document.querySelector("#txtPWD").value=e.data.replace("e2nexon_","");
 		   		document.querySelector("#btnLogin").click();

			}else if(e.data=="e3nexon_"){
				GnxGameStartOnClick();
			}
			
			else if(e.data.indexOf("e0naver_") !==-1){	
				document.querySelector(".btLoginNaver")[0].click();
				
			}else if(e.data.indexOf("e1naver_") !==-1){	
				document.querySelector("#id	").value=e.data.replace("e1naver_","");
				
			}else if(e.data.indexOf("e2naver_") !==-1){
				document.querySelector("#pw").value=e.data.replace("e2naver_","");
 		   		document.querySelector("#log\\.login").click();

			}
			
			else if(e.data.indexOf("e0google_") !==-1){	
				document.querySelector(".btLoginGoogle")[0].click();
				
			}else if(e.data.indexOf("e1google_") !==-1){	
				document.querySelector("#eARute").click();
				
			}else if(e.data.indexOf("e2google_") !==-1){	
				document.querySelector("#identifierId").value=e.data.replace("e2google_","");
				document.querySelector(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ")[0].click();
			}else if(e.data.indexOf("e3google_") !==-1){
				document.querySelector(".whsOnd.zHQkBf").value=e.data.replace("e3google_","");
 		   		document.querySelector(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ")[0].click();
			}
			
			
			else if(e.data.indexOf("e0facebook_") !==-1){	
				document.querySelector(".btLoginFacebook")[0].click();
				
			}else if(e.data.indexOf("e2facebook_") !==-1){	
				document.querySelector("#email").value=e.data.replace("e2facebook_","");

			}else if(e.data.indexOf("e3facebook_") !==-1){
				document.querySelector("#pass").value=e.data.replace("e3facebook_","");
 		   		document.querySelector("#loginbutton").click();
			}
			
			
			else if(e.data.indexOf("e0apple") !==-1){	
				document.querySelector(".btLoginApple")[0].click();
			}	
			
			
			
 		});
