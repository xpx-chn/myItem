Array.prototype.inArray=function(needle){
		for(var i=0;i<this.length;i++){
			if(this[i]===needle){
				return true;
			}
		}
		return false;
	}
	var arr=["red","blue","yellow"];
	console.log(arr.inArray("blue"));