let menuToggled = false;
let container = document.createElement('div');
setTimeout(setup, 0);

function setup() {
  container.id = "lithiumContainer";

  container.style.position = "fixed"; /* Makes it stay in place even when you scroll */
  container.style.top = '0'; /* Starts at the top of the screen */
  container.style.left = '0'; /* Starts at the left of the screen */
  container.style.width = '100%'; /* Covers the whole width */
  container.style.height = '100%'; /* Covers the whole height */
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; /* Black with 50% transparency */
  container.style.z-index = '1000'; /* Makes it appear on top of everything */
  container.style.display = 'none'; /* Starts hidden */
}

document.addEventListener('keydown', function(event) {
  if (event.key === '\\') {
    console.log('key pressed');
    toggle();
  }
});

function toggle() {
  menuToggled = !menuToggled;
  if (menuToggled) {
    container.style.display = 'block';
  }
  else {
    container.style.display = 'none';
  }
}
