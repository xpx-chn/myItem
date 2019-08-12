(
	function myScrollEle(b,r,t,l){
		var _t,_r,_b,_l;
		var argL=arguments.length;
		if(argL===0){
			_r="0px";
			_b="0px";
		}else if(argL===1){
			_b=b+"px";
			_r="0px";
		}else if(argL===2){
			_b=b+"px";
			_r=r+"px";
		}else if(arg===3){
			_t=t+"px";
			_r=r+"px";
			_b="";
		}else{
			_t=t+"px";
			_l=l+"px";
			_r="";
			_b="";
		}
		var mytimer = null;
		var input1=document.createElement("input");
		var input2=document.createElement("input");
		var myBtn=document.createElement("button");
		var div1=document.createElement("div");
		div1.style.width="50px";
		input1.style.width='100%';
		input2.style.width='100%';
		input1.setAttribute("placeholder","距离(1-5)")
		input2.setAttribute("placeholder","时间(41-100)")
		myBtn.style.width='100%';
		div1.style.position='fixed';
		div1.style.left= _l||"";
		div1.style.top=_t||"";
		div1.style.bottom=_b||"";
		div1.style.right=_r||"";
		div1.style.opacity='0.5';
		myBtn.innerHTML='ok';
		div1.appendChild(input1);
		div1.appendChild(input2);
		div1.appendChild(myBtn);
		myBtn.addEventListener("click",function(){
			var _h=parseInt(input1.value);
			var _d=parseInt(input2.value);
			if(_h&&_d){
				myScroll(_h,_d)
			}
		})
		document.body.appendChild(div1);
		function myScroll(h,d){
			window.ondblclick=function(){
				clearInterval(mytimer);
				mytimer = null;
				mytimer = setInterval(docScroll,d,h)
			};
			window.addEventListener("click",function(){
				if(mytimer){
					clearInterval(mytimer);
					mytimer=null;
				}
			})
			function docScroll(h){
				window.scrollBy(0,h);
			}
		}
		myScroll(1,20);
	}
)()
