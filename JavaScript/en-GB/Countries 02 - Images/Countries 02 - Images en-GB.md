---
title: Countries - Images
level: JavaScript
language: en-GB
embeds: "*.png"
materials: ["dist/*.*","res/*.*"]
stylesheet: web
...

# Introduction { .intro}

In this lesson we will start from our previous Countries List lesson and add some images and interaction.

# Array of Objects

The first thing we want to do is to change our countries array from and array of strings to an array of objects.

## What is an object?

An object is a simple list of properties and values surrounded buy curly brackets ({}).<br>
Each property is assigned a value using a colon (:).<br>
A very simple object with one property can be written line this:

```
{ name : "Galapagos" }
```

A object can hav more then one property by separating each property with a comma(,):

{ name : "Galapagos", tortoisePopulation : 15000 }

## Changing our countries array

Now let's change our countries array to be an array of objects rather then an array of strings:<br>
__Remember__ A statement can be written over many lines, since our countries array is now a much bigger statement, let's write each object on it's own line so that it is more readable.

```
var countries = [
    { name : "Bermuda" },
    { name : "Bhutan" },
    { name : "Fiji" },
    { name : "Galapagos" }
];
```

Doing this has now broken our code, if you save your file (__File -> Save__) and refresh your browser you will see that each country is now displayed as `[Object object]`.<br>
Let's fix this now.

Each country is now an object, and we want to display it's name property<br>
Change the `innerHTML` line of code to display the country's name property by simply adding `.name` after we retrieve the object from the array:

```
div.innerHTML = countries[index].name;
```

## Image property

Text is all very well but it would look a lot nicer to display images of the county instead of just it's name.<br>
Inside the `img` folder you will find pictures of the countries that we can use.<br>
Let's add these images to each of our country objects.<br>
We have `bermuda.png`, `bhutan.png`, `fiji.png` and `galapagos.png`, and remember they are inside the `img` folder:

```
var countries = [
    { name : "Bermuda", img : "img/bermuda.png" },
    { name : "Bhutan", img : "img/bhutan.png" },
    { name : "Fiji", img : "img/fiji.png" },
    { name : "Galapagos", img : "img/galapagos.png" }
];
```

Now that we have added the images to our objects, we can now change our code to display the images instead of the name of the country.<br>
Replace the statement `div.innerHTML...` with the following code:

```
var img = document.createElement('img');
img.src = countries[index].img;
div.appendChild(img);
```

Here we are creating a `<img>` element which we are adding to our already created `<div>` element.<br>
We are using the __img__ property to set the source (`src`) of the image to display that country.<br>
Read about the (img element here)[https://www.w3schools.com/jsref/dom_obj_image.asp]

# End of lesson