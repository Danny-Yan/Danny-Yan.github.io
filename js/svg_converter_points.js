$(window).on("load", function () {
    let docContent = document.getElementById('svgID');
    const svglm = docContent.querySelectorAll('path');

    let totalindex = 0;
    svglm.forEach((pathsegment) => {
        let data = pathsegment.getPathData();
        var fillquant = getFillStyle(pathsegment);
        console.log(fillquant);
        // var fillOpacity = pathsegment.getAttribute('fill-opacity');
        let svgFILLX = [];
        let svgFILLY = [];
        let x1 = 0;
        let y1 = 0;
        let hx = 0;
        let hy = 0;
        let z1 = 0;
        let z2 = 0;

        data.forEach((segment) => {
            totalindex++;
            var key = segment.type
            var value = segment.values
            switch (key.toUpperCase()) {
                case "M":
                    if (key == key.toUpperCase()) {
                        x1 = value[0];
                        y1 = value[1];
                        hx = value[0];
                        hy = value[1];
                    } else {
                        x1 = hx + value[0];
                        y1 = hy + value[1];
                        hx = hx + value[0];
                        hy = hy + value[1];
                    }
                    z1 = x1;
                    z2 = y1;
                    break;
                case "C":
                    if (key == key.toUpperCase()) {
                        var x2 = value[0];
                        var y2 = value[1];
                        var x3 = value[2];
                        var y3 = value[3];
                        var x4 = value[4];
                        var y4 = value[5];
                    }
                    else {
                        var x2 = hx + value[0];
                        var y2 = hy + value[1];
                        var x3 = hx + value[2];
                        var y3 = hy + value[3];
                        var x4 = hx + value[4];
                        var y4 = hy + value[5];
                    }
                    svgFILLX.push(x1);
                    svgFILLY.push(-y1);

                    var result = Cbezier_preCalc(x1, x2, x3, x4, y1, y2, y3, y4);
                    svgFILLX.push(result[0]);
                    svgFILLY.push(result[1]);

                    x1 = x4;
                    y1 = y4;
                    hx = x1;
                    hy = y1;
                    break;
                case "L":
                    if (key == key.toUpperCase()) {
                        var x2 = value[0];
                        var y2 = value[1];
                    } else {
                        var x2 = hx + value[0];
                        var y2 = hy + value[1];
                    }
                    svgFILLX.push(x1);
                    svgFILLY.push(-y1);
                    x1 = x2;
                    y1 = y2;
                    hx = x1;
                    hy = y1;
                    break;
                case "Q":
                    if (key == key.toUpperCase()) {
                        var x2 = value[0];
                        var y2 = value[1];
                        var x3 = value[2];
                        var y3 = value[3];
                    } else {
                        var x2 = hx + value[0];
                        var y2 = hy + value[1];
                        var x3 = hx + value[2];
                        var y3 = hy + value[3];
                    }
                    svgFILLX.push(x1);
                    svgFILLY.push(-y1);

                    var result = Qbezier_preCalc(x1, x2, x3, y1, y2, y3);
                    svgFILLX.push(result[0]);
                    svgFILLY.push(result[1]);

                    x1 = x3;
                    y1 = y3;
                    hx = x1;
                    hy = y1;
                    break;
                case "V":
                    if (key == key.toUpperCase()) {
                        var y2 = value[0];
                    } else {
                        var y2 = hy + value[0];
                    }
                    svgFILLX.push(x1);
                    svgFILLY.push(-y1);
                    y1 = y2;
                    hy = y1;
                    break;
                case "H":
                    if (key == key.toUpperCase()) {
                        var x2 = value[0];
                    } else {
                        var x2 = hx + value[0];
                    }
                    svgFILLX.push(x1);
                    svgFILLY.push(-y1);
                    x1 = x2;
                    hx = x1;
                    break;
                case "Z":
                    svgFILLX.push(x1);
                    svgFILLY.push(-y1);
                    delete x1;
                    delete y1;
                    delete hx;
                    delete hy;
                    break;
                default:
                    break;
            }
            });

            calculator.setExpression({
                type: 'table',
                columns: [
                {
                    latex: `x_{${totalindex}}`,
                    values: svgFILLX
                },
                {
                    latex: `y_{${totalindex}}`,
                    values: svgFILLY,
                    lines: false,
                    points: false,
                    color: fillquant
                }
                ]
            });

            calculator.setExpression({id: `polygon${totalindex}`, latex: `\\polygon(x_{${totalindex}}, y_{${totalindex}})`, color: fillquant, fill: true, fillOpacity: 1, lines: false});
        });
});


function Cbezier(t, x1, x2, x3, x4, y1, y2, y3, y4){
    return [(1-t)**3*x1 + 3*(1-t)**2*t*x2 + 3*(1-t)*t**2*x3 + t**3*x4, (1-t)**3*(-y1) + 3*(1-t)**2*t*(-y2) + 3*(1-t)*t**2*(-y3) + t**3*(-y4)];
}
function Qbezier(t, x1, x2, x3, y1, y2, y3){
    return [(1-t)**2*x1 + 2*t*(1-t)*x2 + t**2*x3, (1-t)**2*(-y1) + 2*t*(1-t)*(-y2) + t**2*(-y3)];
}

function Cbezier_preCalc(x1, x2, x3, x4, y1, y2, y3, y4){
    return [0.125 * (x1 + 3*x2 + 3*x3 + x4), -0.125 * (y1 + 3*y2 + 3*y3 + y4)];
}

function Qbezier_preCalc(x1, x2, x3, y1, y2, y3){
    return [0.25 * (x1 + 2*x2 + x3), -0.25 * (y1 + 2*y2 + y3)];
}


function getFillStyle(pathsegment){
    var fillquant = pathsegment.style.fill;
    return fillquant;
    // var fillquant = pathsegment.getAttribute('fill');
    // var fillOpacity = pathsegment.getAttribute('fill-opacity');
}




