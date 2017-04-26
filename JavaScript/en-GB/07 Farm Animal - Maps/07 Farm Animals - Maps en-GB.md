---
title: Farm Animals Maps
level: JavaScript
language: en-GB
embeds: "*.png"
materials: ["dist/*.*","res/*.*"]
stylesheet: web
...

# Introduction { .intro}

Our farm animals at not just confined to one farm, but they live in many different locations all over the world.

In this lesson we will add a <b>location</b> property to our animals and display their locations on a map.<br>
There are many diffent maps on the internet, but we are going to be using Google Maps.<br>
<b>Note:</b> You can read about [Google Maps here](https://www.w3schools.com/graphics/google_maps_intro.asp)

# Reference Google Maps

The first thing we have to do it to add a `<script>` at the top the references the Google Maps library.<br>
At the top of your page, inside the `<head>`, place the following code:

```
<script src="https://maps.googleapis.com/maps/api/js"></script>
```

Here we are saying that we want to include a new script with it's source at the Google Maps website.<br>
```
If you are curious, API stands for Application Programming Interface
```

# Add a button

Now let's add a button to our button panel.<br>
When we click on this button, it will display the selected animal location on a map.<br>
Place the following `<button>` element inside your button panel.

```
<div id="button-panel">
    ...
    <button onclick="displayAnimalLocation()">Display Location</button>
    ...
</div>
```

Here we are creating a new `<button>` that says "Display Location" and we type the name of the function that will display the animal for the <b>onclick</b> event.<br>
That is all the changes we have to make in our HTML page, now let's add the script to make it work!

# Add the script

Let's break our function down, what do we want to do?
+ 1) Get the selected animal.
+ 2) Display it's location a map

## Get the selected animal

Okay, so let's now create a function that we will use to get the selected animal.

```
function getSelectedAnimal() {
    return animals.find(function(animal) {
        return animal.isSelected
    });
}
```

This might look a little bit complicated, we have two return statements, let's see what is going on.<br>

+ In the first return statement we are calling the function <b>find()</b> that is a function of the Array object (animals is an Array)<br>
<b>Note:</b> You can read more about the [find() function here](https://www.w3schools.com/jsref/jsref_find.asp)
+ The second return statement is inside the find function, we want to find the animal that is selected, so inside the find() function we create another function that take a animal and returns it's `isSelected` property<br>
This function will be called for every animal untill a selected animal is found.

If we now save our page and refresh our browser we can see that something is wrong.<br>
Every animal that we click on displays an alert that say "horse".<br>
This isn't right, not every animal is a horse, so what is going on?

When our page load the `displayAnimals` function is called, then inside this function the <b>for loop</b> is performed.<br>
Some time later we click on an animal and the click event handler if called.<br>
Because the <b>for loop</b> has now completed, the animal varible is still set to the last animal in the array.

// TODO image for error

## How to solve

What we need to do is to pass the animal varible to the event hadler each time the <b>for loop</b> runs.<br>
But how pass data to the event handler?

We can do that by using a JavaScript library called <b>jQuery</b>.<br>
jQuery is a library that makes using JavaScript a lot more simpler, we can do more complex thing that just would not be possible for us to do without it.<br>
More spefificly, we are going to use a jQuery function called <b>on</b>.<br>
<b>Note:</b> You can [read about the on function here](http://api.jquery.com/on/)

The first thing we have to do is to add a `<script>` tag for jQuery in the `<head>` section of our page:

```
<head>
    <script src="js/jquery.js"></script>
    ...
</head>
```

Here we have told our browser that we wish to load jQuery.<br>
<b>Note:</b> Here the file `jquery.js` is inside a folder called `js`, if you do not have the file you could change the `src` attribute to https://code.jquery.com/jquery-3.2.0.min.js

Now we have added jQuery, let's change the event handler to use the <b>on</b> function.

```
$(img).on("click", { animal : animal }, function(event) {
    alert(event.data.animal.name)
});
```

We can see her that now we are using the function called `on` instead of `addEventListener` and we are also using special sympols `$()` the wrap around our `<img>` varible.<br>
The reason that we wrap our img varible in special sympols is because `on` is a jQuery function, so we must make our img into a jQuery object by typing `$(img)`.<br>
The main difference we can see with the code above is that we are creating an object with a property called animal that we are passing into our event handler.<br>
We then use the object `event.data` from inside our event handler to retrive the animal object.

## Changing a property

So now let's change our event so that it does something more useful then just display the animal's name, let's change our event so that the computer remebers which animal we have clicked on.<br>
By clicking on a animal, we are choosing (or selecting) a animal, once that animal has been selected, we can then use that selected animal in other functions that we will create in later lessons.

Change your `click` event to the following code:

```
div.on("click", { animal : animal }, function(event) {
    var animal = event.data.animal;
    var isSelected = animal.isSelected;
    animal.isSelected = ! isSelected;
    $(this).toggleClass('selected');
});
```

Wow, now doesn't that look complicated?<br>
Let's break each line down to see what it is doing<br>
- 1) Firstly we are getting the animal from our event data and then assigning it to a new varible called `animal`
- 2) Next we get the animals `isSelected` property and put that into a new varible too. This varible will tell us wheather or not the animal is selected.
- 3) Now we set the animal's isSelected property to be the oposite of whatever our varible is.
The `!` symbol means `not`.
- 4) The special symbol `this` is a varible that points to the the object that is calling the event, because our varible `div` is triggering the event, `this` points to our `div` varible


# Tidy up

In the world of computer programming, tidying up or reorganising code is called <b>Refactoring</b> (but this is just a posh word for tidying up).

## Using jQuery

So now we are using jQuery in one place only, but we could use it everywhere and it would make our life easier.<br>
Let's now change the `displayAnimals` function to use jQuery.

```
function displayAnimals() {
    var container = $("#animal-container");
    for (var index = 0; index < animals.length; index++) {
        var animal = animals[index];
        var div = $('<div/>');

        var img = $("<img/>");
        img[0].src = animals[index].img;

        img.on("click", { animal : animal }, function(event) {
            alert(event.data.animal.name)
        });

        div.append(img);

        container.append(div);
    }
}
```

So now we can see how jQuery has made things easier for us, instead of using functions from the `document` object, we can simply wrap strings of text using the special symbols `$()`.<br>
Actually, what goes inside the special symbols is called a <i>Selector</i>.<br>
You can read more about [jQuery selectors here](https://www.w3schools.com/jquery/jquery_selectors.asp)

The one bit of code that might confusse you is that we are using an array index when assigning the src property of our img `img[0].src = ...`.<br>
This is because the jQuery object is actually an array of elements, so we use a index to access the first element (rember array's start from 0).<br>
You can also notice that I have removed the lines of code that give syle to our `<div>`, I've done that so that we can we can add them again late using a stylesheet.

## Stylesheet

In the world of Web, a stylesheet is called a <b>CSS</b> file.<br>
We have a blank CSS file all ready for us, let's now type some style rules!

```
#animal-container > div {
    display: block;
    width: 200px;
}
```

In the above style rule we are doing exactly the same as what we where doing in our code.<br>
We are saying that any `<div>` element that is below (`>`) the `animal-container` should display itself as a block and have a width of 200 pixels (a pixel is a unit of measurement used by computers).

Now that we have our stylesheet, let's add it to our page.<br>
Add the following just below the `<head>` element in our page.

```
<link rel="stylesheet" type="text/css" href="styles.css">
```

Here we are saying that we wish to link to a stylesheet that is a text CSS file that is located in the file "styles.css".
<b>Note:</b> You can read more about the [`<link>` element here](https://www.w3schools.com/tags/tag_link.asp)

## Moving script

Let's now move some more of our code.<br>
Inside the `js` folder there are two more blank files, `animals.js` and `script.js`, these files end with `.js` which stands for `JavaScript`.<br>
Let's 



# End of lesson

Phew so that's the end of this lesson, in the next lesson we will add to our webpage to make it more colourful and interesting, for now just relax and let what we have learnt sink in.

