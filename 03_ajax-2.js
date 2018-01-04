

function json2str(obj) {
	var str = '';

	for (var key in obj) {
		str += key + '=' + obj[key]+'&';
	}

	return str.substring(0, str.length-1);
}




function ajax(obj) {
	// type, url, async, responseType, params, success, error
	/*
	{
		type:请求方式
		url:请求地址
		[async]:是否异步
		[responseType]:数据类型
		[params]:参数对象
		success:成功的回调函数
		[error]:失败的回调函数
	}
	*/ 

	var XHR = new XMLHttpRequest();

	if (!obj.url) {
		alert('没有指定服务器地址');
		return;
	}

	// var isAsync = obj.async?true: false;

	console.log(obj['type']);

	switch (obj['type'].toUpperCase()) {
		case 'GET':

			XHR.open('GET', obj.url+'?'+json2str(obj.params), true);
			if(obj.responseType){XHR.responseType=obj.responseType}
			XHR.send();
			break;
		case 'POST':
			XHR.open('POST', obj.url, true);
			if(obj.responseType){XHR.responseType=obj.responseType}
			XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');	
			XHR.send(json2str(obj.params));
			break;	
		default:
			alert('请求类型未指定或拼写有误');
			return;
			break;
	}


	XHR.onreadystatechange = function () {
		if (XHR.readyState == 4) {
			if (XHR.status >= 200 && XHR.status<300 || XHR.status== 304) {
				switch (obj.responseType) {
					case 'json':
						console.log('json');
						obj.success(XHR.response);
						break;

					case 'xml':
						console.log('xml');
						obj.success(XHR.responseXML);
						break;	
					default:
						console.log('default');
						obj.success(XHR.responseText);
						break;
				}
			}else {
				console.log('错误');
			}
		}
	}


	


	

}


