const fs=require('fs');
const path=require('path');
var filepath=path.resolve('./public'+'/index.html');
console.log(filepath)
fs.exists(filepath,(exists) =>{
	if(exists){
		console.log('yes');
	}
	else{
		console.log('no');
	}
})