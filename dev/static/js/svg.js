// const path = document.querySelector('.arrow');
// const pathLength = path.getTotalLength();
//
// var pathStyles = document.body.style;
// pathStyles.setProperty('--pathLength', pathLength +'px');

var nS = 'http://www.w3.org/2000/svg';
var svgPaths = document.getElementsByTagNameNS(nS, 'path');

for (var x = 0; x < svgPaths.length; x++) {
    var path = svgPaths[x];
    var pathDimensions = path.getTotalLength();
    path.style.strokeDasharray = pathDimensions;
    path.style.strokeDashoffset = pathDimensions;

    var pathStyles = path.style;
    pathStyles.setProperty('--pathLength', pathDimensions + 'px');
};
