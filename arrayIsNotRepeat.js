function sort3(arr){
				for(var i=0,a=[];i<arr.length;i++){
					for(var j=0;j<a.length;j++){
						if(arr[i]===a[j]){
							break;
						}
					}
					j===a.length&&a.push(arr[i]);					
				}
				return a;
			}
			//  ============================================
			//  = 利用哈希算法数组去重= 
			//  ============================================
			function bubbleSort_1(arr) {
				var hash = [];
				for(var i = 0; i < arr.length; i++) {
					hash[arr[i]]=true;
				}
				var a = [];
				for(var temp in hash) {
					a.push(temp - 0);
				}
				hash = null;
				return a;
			}
			//  ============================================ 
			//  = 遍历原数组，将不重复的项和最后一个重复的项放入新数组 = 
			//  ============================================
			function bubbleSort_2(arr) {
				for(var i = 0,a = []; i < arr.length; i++) {
					for(var j = i + 1,count=0; j < arr.length; j++) {
						if(arr[i] == arr[j]) {
							j = (++i);
						}
					}
					a.push(arr[i]);
				}
					return a;
			}
//			var n = [2, 5, 4, 67, 4, 2, 35, 1, 2, 3, 56, 76, 5, 4, 3, 5, 6, 7, 8, 65, 4];
			for(var i=0,n=[];i<30;i++){
				n.push(Math.floor(Math.random()*10))
			}
			console.log(n);
			console.time("sort1");
			bubbleSort_1(n);
			console.timeEnd("sort1");
			console.time("sort2");
			bubbleSort_2(n);
			console.timeEnd("sort2");
			console.time("sort3");
			sort3(n);
			console.timeEnd("sort3");