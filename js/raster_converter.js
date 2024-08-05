var image = new Image();
$(window).on("load", function () {
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    var h = 1;
    var rollIndex = 0;
    var totalindex = 0;

    var fillquant = [];
    for(const element of imageData.data){
        if (rollIndex == 3) {
            rollIndex++;
            continue;
        }

        if (rollIndex == 4) {
            let fillString = `rgb(${fillquant.toString()})`;
            let x = totalindex % imageData.width;
            let y = - Math.floor(totalindex / imageData.height);
            
            calculator.setExpression({id: `polygon${totalindex}`, latex: `\\polygon((${x}, ${y}), (${x}, ${y} + ${h}), (${x} + ${h}, ${y} + ${h}), (${x} + ${h}, ${y}))`, color: fillString, fill: true, fillOpacity: 1, lines: false});
            totalindex++;
            
            // Resetting
            fillquant = [];
            rollIndex = 0;
        }

        fillquant.push(element);
        rollIndex++;
    };
});

// Reading image data
const toDataURL = url => fetch(url)
.then(response => response.blob())
.then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
}))

// Sending image data to canvas
toDataURL("./image/png/sid small.png")
    .then(dataUrl => {
    image.src = dataUrl;
})

