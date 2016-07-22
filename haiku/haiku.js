

var fs = require("fs");
var cmudictFile = readCmudictFile('cmudict.txt');
var wordsBySyllables = formatData(cmudictFile);

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
   var lines = data.toString().split("\n"),
       lineSplit, 
       wordsAndPhoneme =[],
       syllablesArray = [];
   lines.forEach(function(line){    
    lineSplit = line.split("  ");    
    wordsAndPhoneme.push([lineSplit[0], lineSplit[1]]); 

  });

	for( var x = 0; x < wordsAndPhoneme.length ; x++){
		if(wordsAndPhoneme[x][1]!=undefined){
			syllablesArrayIndex=wordsAndPhoneme[x][1].replace(/[^0-9]/g,"").length;

			if(syllablesArray[syllablesArrayIndex]===undefined){
				syllablesArray[syllablesArrayIndex]=[wordsAndPhoneme[x][0]];
			}else{
				syllablesArray[syllablesArrayIndex].push(wordsAndPhoneme[x][0]);
			}
		}
	}
   return syllablesArray;
}

var generateHaiku= function(arr){
	var total=0;
	var haiku="";
	var index=0;
	var word=""

while(index<arr.length){
	word =grabAWord(arr[index]);
	if (-1!=word.indexOf("(")){
		word =word.slice(0,word.indexOf("("));
	}
	haiku+=word+" ";
	total+=arr[index];
	if(total==5||total==12||total===17){
		haiku+="\n";
	}
	index+=1;
}
	return haiku;
}

var grabAWord = function(num){
	foundWord=wordsBySyllables[num][Math.floor(Math.random() * wordsBySyllables[num].length)];
	return foundWord;
}

module.exports.generateHaiku = generateHaiku;



