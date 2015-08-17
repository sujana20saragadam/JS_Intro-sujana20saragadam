exports.GetObjectPropertyNames = function(obj) {
	var keysarray = Object.keys(obj);
	return keysarray;	
}

exports.GetObjectPropertyValues = function(obj) {
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

