//log using process.stdout.write();
/*process.stdin.on('data', function (data) {
	do stuff with data 
})
*/

process.stdout.write("prompt > ");

process.stdin.on("data", function (data){
	var cmd = data.toString().trim();
	//pwd
	if(cmd==="pwd"){
		process.stdout.write(process.cwd());
	}
	//date
	if(cmd === "date"){
		var currentDate = new Date().toUTCString();
		process.stdout.write(currentDate);
	}
});