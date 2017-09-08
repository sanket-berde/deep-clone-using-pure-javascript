function deepClone(obj){
		var j,
			newArray,
			newObj = {};
			
		for(var i in obj)
		{
			if(typeof obj[i] === 'object'){
				if(obj[i].hasOwnProperty('length')){
					newArray = [];
					arrayLen = obj[i].length;
					for(j = 0; j < arrayLen; j++){
						if(typeof obj[i][j] === 'object'){
							newArray.push(deepClone(obj[i][j]));
						}
						else{
							newArray.push(obj[i][j]);
						}
					}
					newObj[i] = newArray;
				}
				else{
					newObj[i] = deepClone(obj[i]);
				}
			}
			else{
				newObj[i] = obj[i];
			}
		}
		return newObj;
}