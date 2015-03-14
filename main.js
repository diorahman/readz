var zlib = require('zlib');
var through = require('through');
var drop = require('drag-and-drop-files');
var createReadStream = require('filereader-stream');

drop(document.getElementById('drop'), function(files) {
  var first = files[0];
  
  if (first.type != 'application/x-gzip')
    return console.log('no buddy, no!');

  var source = createReadStream(first).pipe(through(write, end));
  var gunzip = zlib.createGunzip();
  // current nasty hack to make all process smooth
  function write(chunk) {
    gunzip.write(chunk);
  }
  function end() {
    gunzip.end();
  }
  gunzip.on('data', function(data){
    document.getElementById('content').innerHTML = data.toString();
  });
  gunzip.on('end', function(){
    console.log('done');
  });
});
