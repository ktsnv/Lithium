# Lithium
Tab cloaking type thing. Its basically a iframe that's visibility you can toggle.

## Installation
Open the devtools and paste the following code:
(Keep in mind some applications block this method of code injection)

```js
document.body.appendChild((()=>{const e=document.createElement('script');e.src='https://ktsnv.github.io/Lithium/index.js';return e;})());
```

or by adding a bookmark with the url:

```js
javascript:(function()%7Bdocument.body.appendChild((()%3D%3E%7Bconst%20e%3Ddocument.createElement('script')%3Be.src%3D'https%3A%2F%2Fktsnv.github.io%2FLithium%2Findex.js'%3Breturn%20e%3B%7D)())%7D)()
```

## Usage

Press <kbd>\\</kbd> to open the menu.
