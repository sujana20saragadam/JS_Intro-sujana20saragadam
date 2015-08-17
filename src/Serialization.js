exports.ParseNumber = function(str){
	var a = "false";
	if(str!= null)
    {
        a = Number(str);
    }
    return a;
}

exports.ConvertNumberToString = function(num){
	var a = "";
	if(num != null && isNAN(num) == false)
	{
		a = num.toString();
	}
	return a;
}

exports.ParseDate = function(str){
	var date = "date";
	if(str != null)
	{
		date = new Date(str);
	}
	return date;
}

exports.ConvertDateToString = function(dateValue){
	var dateString = "";
	if(dateValue!=null)
	{
		dateString = dateValue.toDateString();
	}
	return dateString;
}

//Parse a string containing a comma seperated sequence of numbers
// and return an array containing the numbers. Return NaN for invalid
// numbers in the string.
exports.ParseStringOfNumbers = function(str){
	var numbers;
	var numberArray;
	if(str != null)
		numbers =str.split(",");
	if(numbers.length > 0)
	{
		numberArray = [];
		for(var i=0; i<numbers.length; i++)
		{
			if(numbers[i]!=null)
				numberArray.push(Number(numbers[i]));
		}
	}
	return numberArray;
}

exports.ConvertArrayOfNumbersToString = function(obj){
	
}


exports.ConvertStringToObject = function(str){

}

exports.ConvertObjectToString = function(obj){

}


