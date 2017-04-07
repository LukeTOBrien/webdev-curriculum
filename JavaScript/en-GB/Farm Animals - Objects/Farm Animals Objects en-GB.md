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

Here we are creating a `<img>` element which we are adding to our already created `<div>` element.<br>
We are using the <b>img</b> property to set the source (`src`) of the image to display that animal.<br>
Read about the (img element here)[https://www.w3schools.com/jsref/dom_obj_image.asp]

# Click event

Next let's add a event to each animal so that when it is clicked upon it's name will appear in a alert box<br>
First of all we want to create a new varible that we will store the animal into:

```
var animal = animals[index];
```

In the above statement we are retrieving the animal from the array using the index and storing it in a new varible called <b>animal</b>.<br>
Now we have the animal stored in a new varible we can add our click event.<br>
A `function` that is called when an event happens is called a <b>handler</b>, we can add a new handler to a element using the <b>addEventListener</b> function.<br>
You can read more about the [addEventListener function here](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

```
img.addEventListener("click", function(event) {
    alert(animal.name)
});
```

## Something is wrong

If we now save our page and refresh our browser we can see that something is wrong.<br>
Every animal that we click on displays an alert that say "horse".<br>
This isn't right, not every animal is a horse, so what is going on?

When our page load the `displayAnimals` function is called, then inside this function the <b>for loop</b> is performed.<br>
Some time later we click on an animal and the click event handler if called.<br>
Because the <b>for loop</b> has now completed, the animal varible is still set to the last animal in the array.

# End of lesson

Phew so that's the end of this lesson, in the next lesson we will add to our webpage to make it more colourful and interesting, for now just relax and let what we have learnt sink in.

