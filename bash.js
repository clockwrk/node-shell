var commands = require("./commands.js");
process.stdout.write("prompt > ");

process.stdin.on("data", function (data){
	var input = data.toString().trim().split(" ");
	var cmd = input.shift();
	file = input.join(" ");
	if(cmd==="pwd"){
		commands.pwd(file);
	}
	if(cmd === "date"){
		commands.date(file);
	}
	if(cmd === "ls"){
		commands.ls(file);
	}
	if(cmd === "echo"){
		commands.echo(file);
	}
	if(cmd === "cat"){
		commands.cat(file);
	}
	if(cmd === "head"){
		commands.head(file);
	}
	if(cmd === "tail"){
		commands.tail(file);
	}
	if(cmd == "curl"){
		commands.curl(file);
	}
});