let blob = createBlob({
    element: document.querySelector("#path"),
    numPoints: 8,
    centerX: 169,
    centerY: 150,
    minRadius: 140,
    maxRadius: 169,
    minDuration: 1,
    maxDuration: 3
});

TweenMax.to(blob.tl, 0.3, {
  timeScale: 1,
  onStart() {
    blob.tl.play()
  }
});

function createBlob(options) {

    let points = [];
    let path = options.element;
    let slice = (Math.PI * 2) / options.numPoints;
    let startAngle = gsap.utils.random(0, 270);

    let tl = gsap.timeline({
        onUpdate: update
    });

    for (let i = 0; i < options.numPoints; i++) {

        let angle = startAngle + i * slice;
        let duration = gsap.utils.random(options.minDuration, options.maxDuration);

        let point = {
            x: options.centerX + Math.cos(angle) * options.minRadius,
            y: options.centerY + Math.sin(angle) * options.minRadius
        };

        let tween = gsap.to(point, {
            duration,
            x: options.centerX + Math.cos(angle) * options.maxRadius,
            y: options.centerY + Math.sin(angle) * options.maxRadius,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        tl.add(tween, -gsap.utils.random(0, duration));
        points.push(point);
    }

    options.tl = tl;
    options.points = points;

    function update() {
        path.setAttribute("d", cardinal(points, true, 1));
    }

    return options;
}

// Cardinal spline - a uniform Catmull-Rom spline with a tension option
function cardinal(data, closed, tension) {
    if (data.length < 1) return 'M0 0'
    if (tension == null) tension = 1

    let size = data.length - (closed ? 0 : 1)
    let path = 'M' + data[0].x + ' ' + data[0].y + ' C'

    for (let i = 0; i < size; i++) {
        let p0, p1, p2, p3

        if (closed) {
            p0 = data[(i - 1 + size) % size]
            p1 = data[i]
            p2 = data[(i + 1) % size]
            p3 = data[(i + 2) % size]
        } else {
            p0 = i == 0 ? data[0] : data[i - 1]
            p1 = data[i]
            p2 = data[i + 1]
            p3 = i == size - 1 ? p2 : data[i + 2]
        }

        let x1 = p1.x + ((p2.x - p0.x) / 6) * tension
        let y1 = p1.y + ((p2.y - p0.y) / 6) * tension

        let x2 = p2.x - ((p3.x - p1.x) / 6) * tension
        let y2 = p2.y - ((p3.y - p1.y) / 6) * tension

        path += ' ' + x1 + ' ' + y1 + ' ' + x2 + ' ' + y2 + ' ' + p2.x + ' ' + p2.y
    }

    return closed ? path + 'z' : path
}

function random(min, max) {
    if (max == null) {
        max = min
        min = 0
    }
    if (min > max) {
        var tmp = min
        min = max
        max = tmp
    }
    return min + (max - min) * Math.random()
}
