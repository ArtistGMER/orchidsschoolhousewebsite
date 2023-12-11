function setup() {
  createCanvas(400, 400, WEBGL);
  normalMaterial();
  describe(
    'Camera orbits around a box when mouse is hold-clicked & then moved.'
  );
}
function draw() {
  background(mouseX, mouseY);

  // If you execute the line commented out instead of next line, the direction of rotation
  // will be the direction the mouse or touch pointer moves, not around the X or Y axis.
  orbitControl();
  // orbitControl(2, 1, 1, {freeRotation: true});

  rotateY(5);
  box(70, 50);
}