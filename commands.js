var fs = require("fs");

module.exports = {
	pwd: function (file) {
		process.stdout.write(process.cwd());
		process.stdout.write("\nprompt > ");
	},
	date: function (file){
		var currentDate = new Date().toUTCString();
		process.stdout.write(currentDate);
		process.stdout.write("\nprompt > ");
	},
	ls: function (file){
		fs.readdir(".", function(err, files){
			if(err) throw err;
			files.forEach(function(file){
				process.stdout.write(file.toString() + "\n");
			});
			process.stdout.write("\nprompt > ");
		});
	},
	echo: function (file){
		
		file = file.replace("$","");

		if(process.env.hasOwnProperty(file)){
			process.stdout.write(process.env[file]);
		} else {
			process.stdout.write(file);
		}
		process.stdout.write("\nprompt > ");
	},
	cat: function(file){
		fs.readFile(file, "utf-8", function (err, data){
			if (err) throw err;
			process.stdout.write(data);
			process.stdout.write("\nprompt > ");
		});
	},
	head: function(file){
		fs.readFile(file, "utf-8", function (err, data){
			if (err) throw err;
			data = data.split("\n");
			for(var i=0; i<5; i++){
				process.stdout.write(data[i]+"\n");
			}
			process.stdout.write("\nprompt > ");
		});
	},
	tail: function(file){
		fs.readFile(file, "utf-8", function (err, data){
			if (err) throw err;
			data = data.split("\n");
			for(var i=data.length-6; i<data.length; i++){
				process.stdout.write(data[i]+"\n");
			}
			process.stdout.write("\nprompt > ");
		});
	},
	curl: function(file){
		
	}

};
