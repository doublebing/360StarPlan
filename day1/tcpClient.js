var net=require('net');

var serverIP='127.0.0.1';
var serverPort=9090;

var client=new net.Socket();

client.connect(serverPort,serverIP,function(){
	client.on('data',function(data){
		console.log('recerive data from server:'+data);
	});	
	client.write('hello');
});