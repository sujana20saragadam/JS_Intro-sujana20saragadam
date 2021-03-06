exports.ReverseString = function(str){
    var reversestr = "";
    var length = str.length;
    while(length>0)
        reversestr += str[--length];
    return reversestr;
}

// Given a string with lname,fname - return an array with the first names.
// Example: SplitString("Gates,Bill;Jobs,Steve;Page,Larry") should return
// an array ["Bill","Steve","Larry"]

exports.GetFirstNames = function(str){
    var Names;
    var array;
    if(str!=null)
    {
    	Names =str.split(";");
        array =[];
        for(var i=0;i<Names.length;i++)
        {
            if(Names[i]!="" && Names[i]!=null)
                array.push(Names[i].split(",")[1]);
        }
    }
    return array;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	var array = null;
    if(arrayOfStrings!=null)
    {
        array =[];
        if(arrayOfStrings.length>0)
        {
            var reversestr =arrayOfStrings.split(";");
            for(var i=0;i<reversestr.length;i++)
            {
                if(reversestr[i]!=null && reversestr[i]!="")
                    array.push(reversestr[i].split(",")[1]);
            }
        }
    }
    return array;
}

// Given an array of sentences, create a paragraph by concatenating all the strings and adding
// fullstop (.) after each senetences.
exports.CreateParagraph = function(arrayOfStrings){
    if(arrayOfStrings == null)
        return null;
    else
    {
    	var paragraph = "";
    	if(arrayOfStrings!=null)
    	{
    		for(var i=0;i<arrayOfStrings.length;i++)
    			paragraph += arrayOfStrings[i] + ".";
    	}
        return paragraph;
    }
}

