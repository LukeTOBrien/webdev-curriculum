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

In this lesson we will add a __location__ property to our animals and display their locations on a map.<br>
There are many diffent maps on the internet, but we are going to be using Google Maps.<br>
__Note:__ You can read about [Google Maps here](https://www.w3schools.com/graphics/google_maps_intro.asp)

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

# Add each animal's location

Let's add a new property to each animal, this property will be called __location__ and it will be an object made up of two more properties: __lat__ and __lng__:

```
location : {
     lat : -7.477825,
     lng : 178.679838
}
```

But what do they mean?<br>
Well, in geography, locations or coordinates on the earth are reprisented using two numbers called __latitude__ (lat) and __longitude__ (lng).<br>

We can use the internet to find some coordinates.<br>
Open up a web browser and navigate to https://www.google.co.uk/maps/<br>
Now click on the right mouse button and a menu will appear, click on the option that says "What's here?"<br>
Once you have clicked on the button, a window will appear at the bottom of the screen, inside this window you can see the name of the location you have clicked on, underneath the name are the latitude and longitude coordinates.<br>

Now you know how to find yourown latitude and longitude coordiate, you can use yourown cooridiates or use to ones in this lesson.<br>
Here are some example coordiates:

```
var animals = [
    { name : "sheep", ... location : { lat : -7.477825, lng : 178.679838 } },
    { name : "cow", ... location : { lat : 1.902488, lng : -157.365643 } },
    { name : "pig", ... location : { lat : -17.665097, lng : 178.785795 } },
    { name : "horse", ... location : { lat : -0.526364, lng: -90.691124 } }
];
```

Now that we have the animal objects set up, let's move on to making a button that  will display these locations on a map.

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

Here we are creating a new `<button>` that says "Display Location" and we type the name of the function that will display the animal for the __onclick__ event.<br>
That is all the changes we have to make in our HTML page, now let's add the script to make it work!

# Add the script

Let's add a empty `displayAnimalLocation()` function that we will add code to later:

```
function displayAnimalLocation() {

}
```

So now that we have our function in place, let's think about what we want to put in it.<br>
Let's break our function down, what do we want to do?
+ 1) Get the selected animal.
+ 2) Display the selected animal's location a map

Okay so we can see that there are two things that we want to do in our function, let's take them in turn.

## Get the selected animal

So let's now create a function that we will use to get the selected animal.

```
function getSelectedAnimal() {
    return animals.find(function(animal) {
        return animal.isSelected
    });
}
```

This might look a little bit complicated, we have two return statements, let's see what is going on.<br>

+ In the first return statement we are calling the function __find()__ that is a function of the Array object (animals is an Array)<br>
__Note:__ You can read more about the [find() function here](https://www.w3schools.com/jsref/jsref_find.asp)
+ The second return statement is inside the find function, we want to find the animal that is selected, so inside the find() function we create another function that take a animal and returns it's `isSelected` property<br>
This function will be called for every animal untill a selected animal is found.

So now let's use our new function in our main function:

```
function displayAnimalLocation() {
    var selectedAnimal = getSelectedAnimal();
}
```

Here we are creating a new varible that is assigned to the return result of the `getSelectedAnimal()` function.<br>

So that's the first part of our function done, now on to the second.

## Display selected animal's location on a map

Now we move on to creating the second part.<br>
Let's also create this part as a new seperote function.<br>

```
function displaySelectedAnimalOnMap(selectedAnimal) {
    var output = $("#output");
    var map = new google.maps.Map(output[0], {
        center: animal.location,
        zoom: 8
    });
}
```

In this code there are two statement (two semi-colons (`;`)).<br>
Let's take a look at what each statement is doing.<br>

+ In the first statement we get a reference of our "output" `<div>` element that is on our page.<br>
Remember we do this by using the special `$()` symbol arround the ID of the element.
+ In the secound statement we are creating a [Google Maps Object](), we are giving it our "output" `<div>` element by using the special array index symbol on our varible (`output[0]`).<br>
We are also giving the `Map()` function a configuration object that has two properties: center and zoom.<br>
We wish to centre the map on the animal's location, so we assign the `animal.location` property to the `center` property in the configuration object.<br>
We also set the `zoom` property because we want to zoom our map into the animal's location.<br>

Now that we have created our, we can now use it in our main function.<br>
Place the code to call our newly created function after we get our selected animal:

```
function displayAnimalLocation() {
    var selectedAnimal = ...
    displaySelectedAnimalOnMap(selectedAnimal);
}
```

Here we are calling our function and giving it our selected animal.

# It works!

Now we have created all the parts for our main function, let's save our work and open up the page in a web browser.<br>
To test that everything is working, click on a animal to select it and then click on the "Display Location" to display a map with the selected animal's location.

But there is one problem.<br>
Not every selected animal is displayed on the map, if we select more than one animal, we would like all of the animal locations displayed on the map, not just one.

Let's make the changes so that all animals are displayed.

## Get all selected animals

Let's create another function to get all selected animals.<br>
Type the following code:

```
function getAllSelectedAnimals() {
    return animals.filter(function(animal) {
        return animal.isSelected
    });
}
```

This is a simple change to our previous function.<br>
All we have done here is change the name of our function, `getAllSelectedAnimals` is a nice descriptive name, and we are now using the `filter` function of our `animals` array.<br>
The filter function will return all the selected animals rather then just the first one it finds.<br>
__Note:__ Read more about the [filter() function here]()

## Changing the displayOnMap function

This change is a little bit bigger than the last.

The first change we want to make is to move the `map` varible outside of the `displaySelectedAnimalOnMap` function.<br>
Then we want to add a `if` arround the `Google Map` function call.<br>
Replace your `displaySelectedAnimalOnMap` function with the following code:

```
var map;
function displaySelectedAnimalOnMap(animal) {
    var output = $("#output");
    if (! map) {
        map = new google.maps.Map(output[0], {
            center: animal.location,
            zoom: 8
        });
    }
}
```

You can see that our `if` statement is saying "if not map" this means that "if the map is nothing or if map is empty", as we are not assigning anything to `map`, th `map` varible is empty.

But this is not the only change that we want to make, we also want to add a marker on our map.<br>

### Add a marker

Now let's add a marker.<br>
We want to do this inside our function, below the `map` if statement.<br>
Type the following code:

```
if (! map) {
    ...
}
var marker = new google.maps.Marker({
    position: animal.location,
    map: map,
    label: animal.name
});
```

In this code above we are adding a new [Google Map Marker](https://developers.google.com/maps/documentation/javascript/examples/marker-simple).<br>
The Marker object also takes a configuration object, we are setting the congfiguration object's properties using the animal's location and name, we are also telling the Marker that the map we want to use is our `map` varible.<br>

The last thing we have to do is make changes to our main `displayAnimalLocation` function.

## Changes to displayAnimalLocation function

We are now going to make three changes to our main function.<br>
Let's look at the following code:<br>

```
function displayAnimalLocation() {
    map = null;
    var selectedAnimals = GetAllSelectedAnimals();
    selectedAnimals.forEach(displaySelectedAnimalOnMap);
}
```

Our function is now made up of three statements:

+ 1) We are making sure the `map` varible is nothing (null in computer terms) by assign the special keyword 'null' to it.
+ 2) We are getting all the selected animals by calling our new function that returns all selected animals.
+ 3) We are calling the `forEach()` function of the `selectedAnimals` array.<br>
The `forEach` function does exactly the same as a `for...loop`, only it is easier to understand because it is a function.
__Note:__ Read more about the [forEach function here](https://www.w3schools.com/jsref/jsref_forEach.asp)

# End of lesson

Phew so that's the end of this lesson, in the next lesson we will add to our webpage to make it more colourful and interesting, for now just relax and let what we have learnt sink in.

