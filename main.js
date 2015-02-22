var zlib = require('zlib');
var concat = require('concat-stream');
var drop = require('drag-and-drop-files');
var createReadStream = require('filereader-stream');

var gunzip = zlib.createGunzip();

drop(document.getElementById('drop'), function(files) {
  var first = files[0];
  createReadStream(first).pipe(gunzip);
  gunzip.on('data', function(data){
    console.log(data.toString());
  });
  gunzip.on('end', function(){
    console.log('done');
  });
});
