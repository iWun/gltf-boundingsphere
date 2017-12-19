# gltf-boundingsphere
Computes the bounding sphere of a gltf model

## Usage

```javascript
const fs = require('fs');
const gltfBoundingSphere = require('gltf-boundingsphere');
 
var gltf = fs.readFileSync('box.gltf'); 
const model = JSON.parse(gltf, 'utf8');
 
const boundingSphere = gltfBoundingSphere.computeBoundingSphere(model);
// BoundingSphere {
//   center: Cartesian3 { x: 0, y: 0, z: 0 },
//   radius: 0.8660254037844386 
// }
```
