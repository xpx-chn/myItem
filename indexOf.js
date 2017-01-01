function useIndexOf() {
	if(!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(key, fromi) {
			if(fromi === undefined) {
				fromi = 0;
			}
			for(; fromi < this.length; fromi++) {
				if(this[fromi] === key) {
					return fromi;
				}
			}
			return -1;
		}
	}
}
useIndexOf();