let menuToggled = false;
let lithiumContainer;
let iFrame;
let title;
let details;
let input;
let isKeyPressed = false;
let link;
setTimeout(setup, 0);

function setup() {
  link = "https://ktsnv.github.io/"
  
  lithiumContainer = document.createElement('div');
  iFrame = document.createElement('iframe');
  title = document.createElement('div');
  input = document.createElement('input');
  details = document.createElement('div');
  
  lithiumContainer.id = "lithiumContainer";
  lithiumContainer.style.position = "fixed"; /* Makes it stay in place even when you scroll */
  lithiumContainer.style.top = '0'; /* Starts at the top of the screen */
  lithiumContainer.style.left = '0'; /* Starts at the left of the screen */
  lithiumContainer.style.width = '100%'; /* Covers the whole width */
  lithiumContainer.style.height = '100%'; /* Covers the whole height */
  lithiumContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; /* Black with 50% transparency */
  lithiumContainer.style.zIndex = '1000'; /* Makes it appear on top of everything */
  lithiumContainer.style.display = 'none'; /* Starts hidden */
  lithiumContainer.style.backdropFilter = 'blur(5px)'; /* Apply the blur effect */
  lithiumContainer.style.justifyContent = 'center'; /* Centers horizontally */
  lithiumContainer.style.alignItems = 'center'; /* Centers vertically */
  lithiumContainer.style.flexDirection = 'column';

  iFrame.id = "lithiumIframe";
  iFrame.src = link;
  iFrame.style.width = '60%'; /* Adjust the width of the iframe */
  iFrame.style.height = '60%'; /* Adjust the height of the iframe */
  iFrame.style.border = '3px solid #eb4034';
  iFrame.style.borderRadius = '3vmin'; /* Rounded corners */
  iFrame.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'; /* Shadow */
  iFrame.style.background = 'rgb(255,255,255)';
  
  title.style.color = 'white'; /* make the text white */
  title.style.fontSize = '40px'; /* make the text bigger */
  title.style.weight = '700';
  title.style.marginBottom = '10px'; /* add some space between the text and the iframe */
  title.style.fontFamily = 'Arial, sans-serif'; /* Add this line! */
  title.innerHTML = 'Lithium';

  input.type = 'text'
  input.value = link;
  input.id = 'lithiumInput';
  input.style.marginTop = '10px';
  input.style.border = '3px solid #000';
  input.style.borderRadius = '3vmin';
  input.style.height = '50px';
  input.style.lineHeight = 'normal';
  input.style.color = '#282828';
  input.style.display = 'block';
  input.style.width = '60%';
  input.style.boxSizing = 'border-box';
  input.style.userSelect = 'auto';
  input.style.fontSize = '16px';
  input.style.padding = '0 6px';
  input.style.paddingLeft = '12px';
  input.style.border = '3px solid #eb4034';
                
  details.style.color = 'white'; /* make the text white */
  details.style.fontSize = '20px'; /* make the text bigger */
  details.style.marginTop = '10px'; /* add some space between the text and the iframe */
  details.style.fontFamily = 'Arial, sans-serif'; /* Add this line! */
  details.innerHTML = 'Enter to reload page, \\ to toggle menu';    
  details.style.weight = '400';
  
  document.body.appendChild(lithiumContainer);
  lithiumContainer.appendChild(title);
  lithiumContainer.appendChild(iFrame);
  lithiumContainer.appendChild(input);
  lithiumContainer.appendChild(details);
}

document.addEventListener('keydown', function(event) {
  if (event.key === '\\' && !isKeyPressed) {
    isKeyPressed = true;
    console.log('Lithium Menu Toggled');
    toggle(lithiumContainer);
  }
  if (event.key === 'Escape' && menuToggled) {
    console.log('Lithium Menu Off');
    toggle(lithiumContainer);
  }
  if (event.key === 'Enter' && menuToggled) {
    let inputField = document.getElementById("lithiumInput");
    link = inputField.value;
    if (link == null || link == '') {
      link = "https://ktsnv.github.io/"
    }
    iFrame.src = link;
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
