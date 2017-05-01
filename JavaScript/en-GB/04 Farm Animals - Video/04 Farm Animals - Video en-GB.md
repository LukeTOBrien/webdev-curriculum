---
title: 05 Farm Animals - Video
level: JavaScript
language: en-GB
embeds: "*.png"
materials: ["dist/*.*","res/*.*"]
stylesheet: web
...

# Introduction { .intro}

Sometime our farm animals like to watch videos on the internet, of course they always ask their parents or teachers first

In this lesson we will add a __favouriteVideo__ property to our animals and display their favourite videos.<br>
There are many diffent maps on the internet, but we are going to be using Google Maps.<br>
__Note:__ You can read about the [`<video>` element here](https://www.w3schools.com/html/html5_video.asp)

```javascript
var animals = [
    { name : "sheep", ... favouriteVideo : "https://youtu.be/KBMxpDbp51A" },
    { name : "cow", ... favouriteVideo : "https://youtu.be/0LEYwoooVfw" },
    { name : "pig", ... favouriteVideo : "https://youtu.be/Mh85R-S-dh8" },
    { name : "horse", ... favouriteVideo : "https://youtu.be/Ye8mB6VsUHw" }
];
```

Now that we have the animal objects set up, let's move on to making a button that  will display these locations on a map.

# Add a button

Now let's add a button to our button panel.<br>
When we click on this button, it will display the selected animal favourite video.<br>
Place the following `<button>` element inside your button panel.

```HTML
<div id="button-panel">
    ...
    <button onclick="displayFavouriteVideo()">Display Favourite Video</button>
    ...
</div>
```

Here we are creating a new `<button>` that says "Display Favourite Video" and we type the name of the function that will display the animal for the __onclick__ event.<br>
That is all the changes we have to make in our HTML page, now let's add the script to make it work!

# Add the script

Let's add a empty `displayFavouriteVideo()` function that we will add code to later:

```JavaScript
function displayFavouriteVideo() {

}
```

So now that we have our function in place, let's think about what we want to put in it.<br>
Let's break our function down, what do we want to do?
1) Get the selected animal.
2) Create a `<video>` element.
3) Set the __src__ property of the `<video>` element.

Okay so we can see that there are three things that we want to do in our function, let's take them in turn.

## Get the selected animal

So let's now create a function that we will use to get the selected animal.

```JavaScript
function getSelectedAnimal() {
    return animals.find(function(animal) {
        return animal.isSelected
    });
}
```

This might look a little bit complicated, we have two return statements, let's see what is going on.<br>

1) In the first return statement we are calling the function __find()__ that is a function of the Array object (animals is an Array)<br>
__Note:__ You can read more about the [find() function here](https://www.w3schools.com/jsref/jsref_find.asp)
2) The second return statement is inside the find function, we want to find the animal that is selected, so inside the find() function we create another function that take a animal and returns it's `isSelected` property<br>
This function will be called for every animal untill a selected animal is found.

So now let's use our new function in our main function:

```JavaSctipt
function displayFavouriteVideo() {
    var selectedAnimal = getSelectedAnimal();
}
```

Here we are creating a new varible that is assigned to the return result of the `getSelectedAnimal()` function.<br>

So that's the first part of our function done, now on to the second.

## Create the '<video>` element

Now we move on to creating the second and third task.<br>
Let's also create these part as a new seperote function.<br>

```JavaScript
function displaySelectedAnimalFavouriteVideo(animal) {
    var output = $("#output");

    var video = $("<video />");
    
    output.append(video);
}
```

In the above code, you can see that there are only three statement.<br>
1) In the first statement we are getting a reference to our output `<div>` which we are storing into a varible called __output__.
2) We are creating the `<video>` element which we will use later when we assign the __src__ property.
3) Lastly we are appending (adding) the `<video>` element to our output `<div>`.

So now we are creating our `<video>` and adding it to our page, we can now add a call to the function in our main function.

```JavaScript
function displayFavouriteVideo() {
    var selectedAnimal = ...
    displaySelectedAnimalFavouriteVideo(selectedAnimal);
}
```

Here we are calling our function and giving it our selected animal.<br>
However our `<video>` element will not do display anything without a video source, so let's add that now.

## Assigning the `<video>` __src__ property

Let's add the following code just after we create the `<video>` in the `displaySelectedAnimalFavouriteVideo` function.
```JavaScript
function displaySelectedAnimalFavouriteVideo(animal) {
    ...

    var video ...
    video[0].controls = true;
    video[0].src = animal.video;

    ...
}
```

We are actually doing more than just assigning the __src__ property, we are also telling the `<video>` that we would like it to display some helpfull controls, such as play and pause.<br>
__Note:__ You can read more about the [controls property here]()

# It works!

Now we have created all the parts for our main function, let's save our work and open up the page in a web browser.<br>
To test that everything is working, click on a animal to select it and then click on the "Display Favourite Video" to display the favouite video of the selected animal.

But there are two problems.<br>
1) If you click on the "Display Favourite Video" again and again (repetivly), the video will get appended to the page again and again.
2) Not every selected animal's favourite video is displayed, if we select more than one animal, we would like all of the animal favourite videos displayed, not just one.

Let's make the changes.

## __Empty__ the output `<div>` to stop repeating

The first problem is easy to solve, all we want to do is call the __empty()__ function of __jQuery__.<br>
__Note:__ You can read about the [__empty()__ function here]()

```JavaScript
function displayFavouriteVideo() {
    $("#output").empty();
    ...
}
```

This helpful function will make sure our output `<div>` is empty before we add anything to it.

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

## Changes to displayFavouriteVideo function

We are now going to make three changes to our main function.<br>
Let's look at the following code:<br>

```JavaScript
function displayFavouriteVideo() {
    $("#output").empty();
    var selectedAnimal = getAllSelectedAnimals();
    selectedAnimal.forEach(displaySelectedAnimalFavouriteVideo);
}
```

Our function is now made up of three statements:

1) We are making sure that our output is empty before we add anything to it.
2) We are getting all the selected animals by calling our new function that returns all selected animals.
3) We are calling the `forEach()` function of the `selectedAnimals` array.<br>
The `forEach` function does exactly the same as a `for...loop`, only it is easier to understand because it is a function.
__Note:__ Read more about the [forEach function here](https://www.w3schools.com/jsref/jsref_forEach.asp)

# End of lesson

Phew so that's the end of this lesson, in the next lesson we will add to our webpage to make it more colourful and interesting, for now just relax and let what we have learnt sink in.

