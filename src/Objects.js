exports.GetObjectPropertyNames = function(obj) {
    if(obj!=null)
    {
    	var keysarray = Object.keys(obj);
    	return keysarray;	
    }
    else
        return null;
}

exports.GetObjectPropertyValues = function(obj) {
    if(obj!=null)
    {
    	var keysarray = Object.keys(obj);
        var keysObjects;
        if(keysarray.length>0)
        {
            keysObjects = [];
            for(var i=0; i<keysarray.length;i++)
                keysObjects.push(obj[keysarray[i]]);
        }
        return keysObjects;
    }
    else
        return null;
}

