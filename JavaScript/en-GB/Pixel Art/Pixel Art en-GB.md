---
title: Pixel Art
level: JavaScript
language: en-GB
embeds: "*.png"
materials: ["dist/*.*","res/*.*"]
stylesheet: web
...

# Creating the basic parts

## Creating our page

First let's create our blank page were we will place our code:

```HTML
<html>
<head>
    <style>
    </style>
    <script>
    </script>
</head>
<body>
</body>
</html>
```

You can see here that we have a `<style>` element inside our `<head>`, we will be using some styles for this lesson, but it is not important that we know what they do.<br>
Let's create the styles now.

## Create the styles

Copy the following code into the `<style>` element:

```CSS
#grid-container {
    display: table;
    border-spacing: 1px;
    background-color: black;
    border: 5px solid black;
}

.row {
    display: table-row;
}

.pixel {
    display: table-cell;
    background-color: white;
    width: 40px;
    height: 40px;
}

.pen {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 2px solid black;
}
```

Next let's create the `<body>` of our page, this will be the basic structure that our code will use.

## Create the `<body>`

Replace your empty `<body>` element with the following code :

```HTML
<body onload="setup()">
    <div id="pens-container"></div>
    <div id="grid-container"></div>
</body>
```

We can notice three things about this peice of HTML:
1) We are assigning the `load` event to a JavaScript function called __setup__.
2) We have created a `<div>` that will contain the different colour pens.
3) We have created another `<div>` that will contain our grid.

# Coding the JavaScript

So now let us start coding our JavaScript.<br>
Before we create the function that will be called when our page loads - The __setup__ function - Our application will require a few varibles that will store the data that we need.

## Creating the varibles

Our functions are going the be using 3 varibles.
1) The size of the grid - This is made up of the number of rows and the number of columns.
2) The colours that we have to choose from.
3) The colour that the pen is set to - This is the colour that will be used to fill the pixel when clicked on.

Type in the following code just inside your `<script>`.

```JavaScript
var gridSize = { rows: 8, columns: 8 };
var penColours = ['red', 'chartreuse', 'blue', 'white', 'black'];
var penColour = 'black';
```

Now let's create the __setup__ function.

## Create the __setup__ function

It has been mentioned many times before and now is the moment you've been waiting for.<br>
Copy the following code into the `<script>` block:

```JavaScript
function setup() {
    setupPens();
    setupGrid();
}
```

Is that it?<br>
We have split the two parts of this function into two further functions so the __setup__ function itself it quite small, but we can see very clearly what it does becase the other two functions have discriptive names.

### Setup the pens

The first step inside the __setup__ function is to setup the pens.<br>
We already know what name we are going to give to our function, so let's code it now:

```JavaScript
function setupPens() {
    var container = document.getElementById('pens-container');
    penColours.forEach(function (colour) {

    });
}
```

Now after the `penColours.forEach(function...` we are going to type the code to create a new `<div>` and diplay that inside our container on the page:

```JavaScript
var div = document.createElement('div');
div.className = 'pen';
div.style.backgroundColor = colour;
div.onclick = () => setPenColour(colour);
container.appendChild(div);
```

This code is pretty self-explanitory and easy to understand, but one statement that might confuse you is the `div.onclick =...` statement.

Here we are saying that when the div is clicked upon, we want to call another function called __setPenColour__ which we are calling with the colour that our `forEach` function gives us.<br>
The __setPenColour__ function is contained in another funnction, here we are using __Arrow Functions__, we do this because the div element does not know which colour to set the pen to and so the __click__ event cannot call the function directly.