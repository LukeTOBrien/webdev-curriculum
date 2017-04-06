---
title: Farm Animals Objects
level: JavaScript
language: en-GB
embeds: "*.png"
materials: ["dist/*.*","res/*.*"]
stylesheet: web
...

# Introduction { .intro}

In this lesson we will start from our previous Farm Animals List lesson and add some images and interaction.

# Array of Objects

The first thing we want to do is to change our animals array from and array of strings to an array of objects.

## What is an object?

An object is a simple list of properties and values surrouded buy curly brackets ({}).<br>
Each property is assigned a value using a colon (:).<br>
A very simple object with one property can be written line this:

```
{ name : "horse" }
```

A object can hav more then one property by seporating each property with a comma(,):

{ name : "horse", age : 12 }

## Changing our animal array

Now let's change our animal array to be an array of objects rather then an array of strings:<br>
<b>Remember</b> A statement can be written over many lines, since our animals array is now a much bigger statement, let's write each object on it's own line so that it is more readable.

```
var animals = [
    { name : "sheep" },
    { name : "cow" },
    { name : "pig" },
    { name : "horse" }
];
```

Doing this has now broken our code, is you save your file (<b>File -> Save</b>) and refresh your browser you will see that each animal is now displayed as `[Object object]`.<br>
Let's fix this now.

Each animal is now an object, and we want to display it's name property<br>
Change the `innerHTML` line of code to display the animal's name property by simply adding `.name` after we retrieve the object from the array:

```
div.innerHTML = animals[index].name;
```

## Image property

Text is all very well but it would look a lot nicer to display images of the animal instead of just it's name.<br>
Inside the `img` folder you will find pictures of the animals that we can use.<br>
Let's add these images to our animal object.<br>
We have `sheep.png`, `cow.png`, `pig.png` and `horse.png`, and remember they are inside the `img` folder:

```
var animals = [
    { name : "sheep", img : "img/sheep.png" },
    { name : "cow", img : "img/cow.png" },
    { name : "pig", img : "img/pig.png" },
    { name : "horse", img : "img/horse.png" }
];
```

Now that we have added the images to our objects, we can now change our code to display the images instead of the name of the animal.<br>
Replace the statement `div.innerHTML...` with the following code:

```
var img = document.createElement('img');
img.src = animals[index].img;
div.appendChild(img);
```

# End of lesson

Phew so that's the end of this lesson, in the next lesson we will add to our webpage to make it more colourful and interesting, for now just relax and let what we have learnt sink in.

