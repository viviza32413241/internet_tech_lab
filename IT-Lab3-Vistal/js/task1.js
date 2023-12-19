var sh = '#';
var sp = ' ';
var count = 8;

var i = 0;
while (i < count) {
    var line = '';
    for (var j = 0; j < count; j++) {
        if (i % 2 === 0) {
            line += (j % 2 === 0) ? sh : sp;
        } else {
            line += (j % 2 !== 0) ? sh : sp;
        }
    }
    console.log(line);
    i++;
}