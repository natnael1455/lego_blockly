

function httpPostAsync(url, dataString, callback){
	var request = new XMLHttpRequest();
	request.open('POST', url, true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.onreadystatechange = function() { 
        if (request.readyState == 4 && request.status == 200){
            callback(request.responseText);
		}
    }
	request.send( dataString );
}


