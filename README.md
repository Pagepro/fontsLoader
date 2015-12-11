# FontsLoader

###Benefits
* Displays text after html is loaded
* Get rid of [FOIT](https://css-tricks.com/fout-foit-foft/)

## Requirements
1. [jQuery](https://jquery.com/)
2. [FontFaceObserver](https://github.com/bramstein/fontfaceobserver)

##Installation

###Step 1: Link plugins file

```html
<script src="/js/fontfaceobserver.js"></script>
<script src="/js/fontsloader.js"></script>
```

###Step 2: Set up css styles

```css
body {
    font-family: 'Arial';
}
.fonts-loaded body {
    font-family: 'Open Sans';
}
.fonts-loaded .special {
    font-family: 'Roboto'
}
```

###Step 3: Call function in javascript

```javascript
$(document).ready(function(){
  $('html').fontLoader({
        fonts: {
            'Open Sans': [200, 400, 600, 700],
            'Roboto': [100, 300, 400]
        },
        fontLoadedClass: 'fonts-loaded'
    });
});
```

##Configuration options


**fonts**
Objects with font fmaily name as key and array of weights as value
```
default: 'Arial': [400]
options: fonts
```

**fontLoadedClass**
Fonts Loaded Class name
```
default: 'fonts-loaded'
options: class name
```

##Licenses

FontFaceObserver
Copyright 2014-2015 Bram Stein.
https://github.com/bramstein/fontfaceobserver