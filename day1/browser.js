var net=require('net');
var dns=require('dns');
var parse=require('url').parse;

var url='http://html5.360.cn/star';

var urlInfo=parse(url);
console.log('urlInfo:',urlInfo);

dns.lookup(urlInfo.hostname,function(err,serverIP){
	var serverPort=urlInfo.port||80;
	console.log('serverIP:',serverIP);
    console.log('serverPort:',serverPort);
    console.log('connect to server......');
    var client=new net.Socket();
    client.connect(serverPort,serverIP,function(){
    	console.log('ok');
    	client.on('data',function(data){
    		console.log('recerive data from server:'+data);
    	});
    	console.log('sent request header....');
    	client.write('GET'+urlInfo.path+'HTTP/1.1\r\n');
    	client.write('Host:'+urlInfo.hostname+'\r\n');
    	client.write('Connection:close'+'\r\n');
    	client.write('\r\n');
    });
});