$(window).on("load", function () {
    let docContent = document.getElementById('svgID');
    const svgelm = docContent.querySelectorAll('path');
    let totalindex = 0;
    svgelm.forEach((pathsegment) => {
        const data = pathsegment.getPathData();
        var fillquant = pathsegment.getAttribute('fill');
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
                    calculator.setExpression({ id: `line${totalindex}`, latex: `((1-t)^3*${x1} + 3*(1-t)^2*t*${x2} + 3*(1-t)t^2*${x3} + t^3*${x4}, (1-t)^3*${-y1} + 3*(1-t)^2*t*${-y2} + 3*(1-t)*t^2*${-y3} + t^3*${-y4})`, color: fillquant});
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
                    calculator.setExpression({ id: `line${totalindex}`, latex: `(${x1}+(${x2}-${x1})*t, ${-y1}+(${-y2}-${-y1})*t)`, color: fillquant});
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
                    calculator.setExpression({ id: `line${totalindex}`, latex: `((1-t)^2*${x1} + 2*t*(1-t)*${x2} + t^2*${x3}, (1-t)^2*${-y1} + 2*t*(1-t)*${-y2} + t^2*${-y3})`, color: fillquant});
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
                    calculator.setExpression({ id: `line${totalindex}`, latex: `(${x1}, ${-y1}+(${-y2}-${-y1})*t)` , color: fillquant});
                    y1 = y2;
                    hy = y1;
                    break;
                case "H":
                    if (key == key.toUpperCase()) {
                        var x2 = value[0];
                    } else {
                        var x2 = hx + value[0];
                    }
                    calculator.setExpression({ id: `line${totalindex}`, latex: `(${x1}+(${x2}-${x1})*t, ${-y1})`, color: fillquant});
                    x1 = x2;
                    hx = x1;
                    break;
                case "Z":
                    calculator.setExpression({ id: `line${totalindex}`, latex: `(${x1}+(${z1}-${x1})*t, ${-y1}+(${-z2}-${-y1})*t)`, color: fillquant});
                    delete x1;
                    delete y1;
                    delete hx;
                    delete hy;
                    break;
                default:
                    break;
            }
            });
        });
    });