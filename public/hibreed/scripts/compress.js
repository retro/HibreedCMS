//steal/js hibreed/scripts/compress.js

load("steal/rhino/steal.js");
steal('//steal/compress/compress',function(){
	steal.compress('hibreed/hibreed.html',{to: 'hibreed'})
})