var net=require('net');

var serverIP='127.0.0.1';
var serverPort=9090;

net.createServer(function(sock){
	sock.on('data',function(data){
		console.log('recerive data from client:'+data);
		sock.write('HTTP/1.1 200 OK\r\n');
		sock.write('\r\n');
		sock.write('hello world');
		sock.destroy();
	});	
}).listen(serverPort,serverIP);

console.log('TCP Server is running on'+serverIP+':'+serverPort);