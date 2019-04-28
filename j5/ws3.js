// The amount of points in the path:
var points = 9;

// The distance between the points:
var length = 100;

var path = new Path({
	strokeColor: '#C05392',
	strokeWidth: 5,
	strokeCap: 'round'
});

var start = view.center / [10, 1];
for (var i = 0; i < points; i++)
	path.add(start + new Point(i * length, 0));

function onMouseMove(event) {
	path.firstSegment.point = event.point;
	for (var i = 0; i < points - 1; i++) {
		var segment = path.segments[i];
		var nextSegment = segment.next;
		var vector = segment.point - nextSegment.point;
		vector.length = length;
		nextSegment.point = segment.point - vector;
	}
	path.smooth({ type: 'continuous' });
}

function onMouseDown(event) {
	path.fullySelected = true;
	path.strokeColor = '#041499';
}

function onMouseUp(event) {
	path.fullySelected = false;
	path.strokeColor = '#C05392';
}

