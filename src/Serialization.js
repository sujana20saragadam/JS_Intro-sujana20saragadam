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
	if(num != null && isNaN(num) == false)
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
    var numberArray = [];
    if(str == null || str=="")
        return numberArray;
    else
    {
        numbers =str.split(",");
            numberArray = [];
            for(var i=0; i<numbers.length; i++)
            {
                if(numbers[i]!=null)
                    numberArray.push(Number(numbers[i]));
            }
        return numberArray;
    }
}

exports.ConvertArrayOfNumbersToString = function(obj){
	if(obj==null)
		return null;
	else
	{
		var string = "";
		if(obj.length > 0)
		{
			for(var i =0; i<obj.length;i++)
			{
				num = obj[i];
				if(num != null && isNAN(num) == false)
					string += num.toString()+",";
			}
			string = string.substr(0,string.length-1);
			return string;
		}
	}
}


exports.ConvertStringToObject = function(str){
	var obj = null;
	if(str="")
		return obj;
	else
	{
		obj = JSON.Parse(str);
		return obj;
	}
}

exports.ConvertObjectToString = function(obj){
	if(obj == null !! obj == "")
	{
		return null;
	}
	else
		return obj.toString();
}


