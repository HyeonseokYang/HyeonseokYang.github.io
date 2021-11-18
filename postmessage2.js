 	window.addEventListener('message', function (e) {
			if(e.data.indexOf("e4setting") !==-1){	
				
			}else if(e.data.indexOf("e1nexon_") !==-1){	
				document.querySelector("#txtNexonID").value=e.data.replace("e1nexon_","");
				
			}else if(e.data.indexOf("e2nexon_") !==-1){
				document.querySelector("#txtPWD").value=e.data.replace("e2nexon_","");
 		   		document.querySelector(".button01").click();

			}else if(e.data=="e3nexon_"){
				GnxGameStartOnClick();
			}
			
			else if(e.data.indexOf("e0naver_") !==-1){	
				document.querySelector(".btNaver").click();
				
				
			}else if(e.data.indexOf("e3naver_") !==-1){	
				document.querySelector("#qrlog\\.cancel").click();
				
				
			}else if(e.data.indexOf("e1naver_") !==-1){	
				document.querySelector("#id").value=e.data.replace("e1naver_","");
				
			}else if(e.data.indexOf("e2naver_") !==-1){
				document.querySelector("#pw").value=e.data.replace("e2naver_","");

			}else if(e.data.indexOf("e4naver_") !==-1){
 		   		document.querySelector(".btn_login").click();
			
      }else if(e.data.indexOf("e5naver_") !==-1){
 		   		document.querySelector('#loinid').click();
        
        
			}else if(e.data.indexOf("e0google_") !==-1){	
				document.querySelector(".btGoogle").click();
				
			}else if(e.data.indexOf("e1google_") !==-1){	
				document.querySelector(".UXurCe").click();
				
			}else if(e.data.indexOf("e2google_") !==-1){	
				document.querySelector("#identifierId").value=e.data.replace("e2google_","");
				document.querySelector(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ").click();
			}else if(e.data.indexOf("e3google_") !==-1){
				document.querySelector(".whsOnd.zHQkBf").value=e.data.replace("e3google_","");
 		   		document.querySelector(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ").click();

			}else if(e.data.indexOf("e4google_") !==-1){
				if(window.location.hostname=="accounts.google.com"){
					return;
				}else{
					location.href="http://fifaonline4.nexon.com";	
				}
			}
			
			else if(e.data.indexOf("e7facebook_") !==-1){
				$('.hu5pjgll.lzf7d6o1.sp_AvOBU6yv9AO.sx_a06bd2').click();
			}
			else if(e.data.indexOf("e8facebook_") !==-1){
				$('.hu5pjgll.lzf7d6o1.sp_H7axIjqrTST.sx_332863').click();
			}
			else if(e.data.indexOf("e4facebook_") !==-1){	
				document.querySelector("#mbasic_logout_button").click();
			}
			else if(e.data.indexOf("e5facebook_") !==-1){	
				location.reload();
			}
			else if(e.data.indexOf("e6facebook_") !==-1){	
				document.querySelector(".q.r.s.t.u.y.w.z").click();
			}
			else if(e.data.indexOf("e0facebook_") !==-1){	
				document.querySelector(".btFacebook").click();
				
			}else if(e.data.indexOf("e2facebook_") !==-1){	
				document.querySelector("#email").value=e.data.replace("e2facebook_","");

			}else if(e.data.indexOf("e3facebook_") !==-1){
				document.querySelector("#pass").value=e.data.replace("e3facebook_","");
 		   		document.querySelector("#loginbutton").click();
			
      
      }else if(e.data.indexOf("e0apple") !==-1){	
				document.querySelector(".btApple").click();
			}	
			
			
			
 		});
