var potrace = require('potrace'),
fs = require('fs');

potrace.posterize('./image/png/Anderson_Bunny.png', function(err, svg) {
    if (err) throw err;
    fs.writeFileSync('./image/svg/outputs/output.svg', svg);
});