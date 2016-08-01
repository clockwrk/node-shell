var commands = require("./commands.js");
var done = function (output){
	process.stdout.write(output);
	process.stdout.write("\nprompt > ");
};


process.stdout.write("prompt > ");

process.stdin.on("data", function (data){
	var input = data.toString().trim().split(" ");
	var cmd = input.shift();
	file = input.join(" ");
	if(cmd==="pwd"){
		commands.pwd(file, done);
	}
	if(cmd === "date"){
		commands.date(file, done);
	}
	if(cmd === "ls"){
		commands.ls(file, done);
	}
	if(cmd === "echo"){
		commands.echo(file, done);
	}
	if(cmd === "cat"){
		commands.cat(file, done);
	}
	if(cmd === "head"){
		commands.head(file, done);
	}
	if(cmd === "tail"){
		commands.tail(file, done);
	}
	if(cmd == "curl"){
		commands.curl(file, done);
	}
});


