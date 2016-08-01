var fs = require("fs");
var request = require("request");
module.exports = {
	pwd: function (file, done) {
		var output = process.cwd();
		done(output);
	},
	date: function (file, done){
		var output = new Date().toUTCString();
		done(output);
	},
	ls: function (file, done){
		var output = "";
		fs.readdir(".", function(err, files){
			if(err) throw err;
			files.forEach(function(file){
				output += file.toString() + "\n";
			});
			done(output);
		});
	},
	echo: function (file, done){
		var output;
		file = file.replace("$","");
		if(process.env.hasOwnProperty(file)){
			output = process.env[file];
		} else {
			output = file;
		}
		done(output);
	},
	cat: function(file, done){
		var output;
		fs.readFile(file, "utf-8", function (err, data){
			if (err) throw err;
			output= data;
			done(output);
		});
	},
	head: function(file, done){
		var output;
		fs.readFile(file, "utf-8", function (err, data){
			if (err) throw err;
			data = data.split("\n");
			for(var i=0; i<5; i++){
				output += data[i]+"\n";
			}
			done(output);
		});
	},
	tail: function(file, done){
		var output;
		fs.readFile(file, "utf-8", function (err, data){
			if (err) throw err;
			data = data.split("\n");
			for(var i=data.length-6; i<data.length; i++){
				output += data[i]+"\n";
			}
			done(output);
		});
	},
	curl: function(file, done){
		var output;
		request.get(file, function(err, response, body){
			if(err) throw err;
			if(response.statusCode === 200){
				output += body;
			}
			done(output);
		});
	}

};
