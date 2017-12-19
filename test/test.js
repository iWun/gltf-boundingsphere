const fs = require('fs');
var gltfBoundingSphere = require('../index.js') ;

var gltf = fs.readFileSync('box.gltf'); 
const model = JSON.parse(gltf, 'utf8');
//{
//  center: Cartesian3 { x: 0, y: 0, z: 0 },
//  radius: 0.8660254037844386 
//} 
const boundingSphere = gltfBoundingSphere.computeBoundingSphere(model);
