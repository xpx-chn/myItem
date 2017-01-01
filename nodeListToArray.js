function nodeListToArray(nodes) {
	var arr;
	try {
		arr=[].slice.call(nodes);
		return arr
	}catch(err){
		arr=[];
		for(var i=0,len=nodes.length;i<len;i++){
			arr.push(nodes[i]);
		}
		return arr;
	}
}

