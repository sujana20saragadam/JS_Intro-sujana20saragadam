// Given a date in string format, return the day it corresponds to.
exports.GetDay = function(dateString){
	if((dateString!=null)&&(dateString!=""))
    	var date = new Date(dateString);
    var day = "day";
    if(date instanceof Date)
        day = date.getDay();
    return day;
}

