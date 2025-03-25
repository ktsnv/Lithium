let menuToggled = false;
let container;
let iFrame;
let isKeyPressed = false;
let link;
setTimeout(setup, 0);

function setup() {
  link = prompt("Please enter a link for the iframe");
  
  container = document.createElement('div');
  iFrame = document.createElement('iframe');

  container.id = "lithiumContainer";
  container.style.position = "fixed"; /* Makes it stay in place even when you scroll */
  container.style.top = '0'; /* Starts at the top of the screen */
  container.style.left = '0'; /* Starts at the left of the screen */
  container.style.width = '100%'; /* Covers the whole width */
  container.style.height = '100%'; /* Covers the whole height */
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; /* Black with 50% transparency */
  container.style.zIndex = '1000'; /* Makes it appear on top of everything */
  container.style.display = 'none'; /* Starts hidden */
  container.style.backdropFilter = 'blur(5px)'; /* Apply the blur effect */
  container.style.justifyContent = 'center'; /* Centers horizontally */
  container.style.alignItems = 'center'; /* Centers vertically */

  iFrame.id = "lithiumIframe";
  iFrame.src = link;
  iFrame.style.width = '80%'; /* Adjust the width of the iframe */
  iFrame.style.height = '80%'; /* Adjust the height of the iframe */
  //iFrame.style.maxWidth = '600px';
  //iFrame.style.maxHeight = '400px';
  iFrame.style.border = 'none'; /* Remove default iframe border */
  iFrame.style.borderRadius = '10px'; /* Rounded corners */
  iFrame.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'; /* Shadow */
  
  document.body.appendChild(container);
  container.appendChild(iFrame);
}

document.addEventListener('keydown', function(event) {
  if (event.key === '\\' && !isKeyPressed) {
    isKeyPressed = true;
    console.log('Lithium Menu Toggled');
    toggle(container);
  }
});
document.addEventListener('keyup', function(event) {
  if (event.key === '\\') {
    isKeyPressed = false;
  }
});
function toggle(object) {
  menuToggled = !menuToggled;
  if (menuToggled) {
    object.style.display = 'flex';
  }
  else {
    object.style.display = 'none';
  }
}
