var scope = this;

exports.SumOfArray = function(arrayOfNums){
	var sum = 0;
	if(arrayOfNums instanceof Array)
	{
		for(var i=0; i < arrayOfNums.length; i++)
			sum += arrayOfNums[i];
	}
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var uniqueArray = ArrayOfUniqueNumbers(arrayOfNums);
	var sum = this.SumOfArray(uniqueArray);
	return sum;
}

//2-D array exercises
// Given a 2-d array, verify it is of equal dimensions and return
// the sum of diagonal elements.

exports.SumOfDiagonalCells = function(array2d){
	var sum;
	if(array2d.length == array2d[0].length)
	{
		sum = 0;
		for(var i=0;i<array2d.length; i++)
			sum += array2d[i][i];
	}
	return sum;
}

function ArrayOfUniqueNumbers(arrayNums){
	var uniqueArray = [];
	var poppedValue = 0;
	arrayNums.sort();
	while(arrayNums.length > 0){
		poppedValue = arrayNums.pop();
		if(poppedValue != arrayNums[arrayNums.length-1])
			uniqueArray.push(poppedValue);
	}
	return uniqueArray;
}
