function random(max, min, item) { //参数(最大值，最小值，数组项数(不能大于最大最小值的差值+1))
	if(item <= (max - min + 1)) {
		var nums = [];
		while(nums.length < item) {
			var n = parseInt(Math.random() * (max - min + 1) + min);
			for(var i = 0; i < nums.length; i++) {
				if(nums[i] == n) {
					break;
				}
			}
			i === nums.length && nums.push(n);
		}
		return nums;
	} else {
		throw new Error("请输入正确范围的值");
	}
}
var n = random(10, 0, 11);
console.log(n);