---
title: Countries List
level: JavaScript
language: en-GB
embeds: "*.png"
materials: ["dist/*.*","res/*.*"]
stylesheet: web
...

# Introduction { .intro}

In this project, you’ll learn the basic concepts of programming using JavaScript.<br>

# Step 1: Creating the basic page { .activity}

Open up your favourite text editor to begin.<br>
Type into the editor the basic page structure that we are going to use for the rest of this lesson.

```
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```

Now save the file by clicking __File -> Save As__ making sure that the file is saved with '.html' at the end.<br>
<i>Ask you teacher if you need some help</i>

## Add a script block

JavaScript is a scripting language that has much in common with so many other programming languages.<br>
Because it is a scripting language, JavaScript can be run with a __web browser__ with no need for any additional software!

Let's add a script tag inside our `<head>` tag:

```
...
<head>
    <script>
    </script>
</head>
...
```

# Array of countries

Now we have added our script block, let's fill it with some script!<br>
We're going to fill our script block with an array of countries, but first let's see what an array is.

An array is a list of items, these item can be anything, they can be numbers or text, even other arrays or objects (we will get to objects later).<br>
Each item in a array has a position, this position is called an <i>index</i>.<br>
In JavaScript and most other programming languages the index of an array starts at 0, this is called a 0-based, as the base or start of the array is position 0.

![screenshot](res/array.svg)

Now let us add an array of countries to our script block.<br>
In JavaScript, arrays are written using square-brackets [ ] and each item in the array is separated using a comma.<br>
We are also going to be using a special keyword called <i>var</i> to create what's called a <i>variable</i> to store the array into:

```
...
<script>
    var countries = [ "Bermuda", "Bhutan", "Fiji", "Galapagos" ]
</script>
...
```

So now we have a <i>variable</i> called 'countries' that points to (assigned to) an array containing our favourite countries!

# Function

In order for us to display a list of countries, we need a place where our script can perform that task, a <i>function</i> is just that, a piece of script that performs a task.<br>

Now inside our script block, just after our 'countries' array, let's type in our function.<br>
Make sure you leave a blank line to add some space and call our function something sensible.<br>
In most programming language, spaces between word are not allowed, therefore we use a combination of uppercase and lowercase to create names made up of multiple words.<br>
__Note:__ In JavaScript we use a kind of writing style is called <i>camelCase</i>, some other language use <i>PascalCase</i>.

When we write a function we have to use some more special characters.<br>
The word <i>function</i> is a keyword that says that we are now writing a script block, the name we give our function is then followed by round brackets ( ), we then set the start and finish of our function by using curly bracket { }, everything inside these brackets is our function.


```
...
function displayCountries() {

}
...
```

Our function doesn't do anything at the moment, so let's add a little bit of script just so we can see it in action.<br>
Type the following inside of your function:

```
alert("Hello")
```

What do you suppose the above script will do?<br>
Yes that's right, the above script will display a alert saying "Hello".<br>
Now we have our function in place, now we need to call our function, we can do this using <i>Events</i>

# Events

Events are things that happen, such as loading a page or clicking a button, events are used to call a function that then performs a task.

We say what function we want to be called in our HTML, so let's do that now.<br>
We are going to use the <i>onload</i> event of the `<body>` tag to call our `displayCountries` function:

```
...
<body onload="displayCountries()">
...
```

At this point we can save our work again using __File -> Save__ and then double click on our file to open it in the browser.<br>
Our function should then run and a alert saying "Hello" will be displayed to you. You can also click on <i>Refresh</i> button to trigger the <i>load</i> event again.<br>
Remember to ask your teacher for help if needed.

# For loops
In JavaScript and other programming languages, a <i>for loop</i> is a special piece of code that tells our script that we wish to repeat something a given number of times.<br>
A <i>for loop</i> is made up of three statements, the beginning, while something is true, after each loop<br>
Each part of the <i>for loop</i> is separated with a semi-colon (;).

![screenshot](res/for-loop.svg)

+ At the beginning of our <i>for loop</i> we are creating a variable called `index` which we are assigning the value 0.<br>
+ Next we say that we want our loop to continue while the index is less then 10 (< is the symbol for less then).<br>
+ Lastly we say that at the end of each loop we want to increase the number by 1 (++ is the symbol to increase by 1).

Now we have learned how to create a <i>for loop</i>, let's put one into our function!

## Adding <i>for loop</i> block to our function

Let's change our alert to say the names of our countries instead of just saying "Hello":

```
...
for (var index = 0; index < countries.length; index++) {
    alert(countries[index])
}
...
```

In the above code we are we have created a loop block that will start at the beginning of our countries array __(remember arrays are 0 based)__ that will continue while the index variable is less the length of our countries array<br>
__Note:__ Here we are using the <i>Array.length</i> property, you can read more about the property [here](https://www.w3schools.com/js/js_arrays.asp)

So now we have a nice alert box displaying our countries one by one but our page is still blank, it would be nice to display our countries on our page.

# Displaying countries on the page

Now lets change our `displayCountries` function again, this time we are going to use something call the __Document Object Model__ or __DOM__ to add HTML elements to our page.<br>
__Note:__ You can read more about the Document Object Model [here](https://www.w3schools.com/js/js_htmldom.asp)

The first piece of code that we are going to add will get the `<body>` element of our page and store that in a variable.<br>
Type this code as the first line of our `displayCountries` function.

```
function displayCountries() {
    var body = document.body;
...
```

It the above code, we are getting the main `<body> element of our page and storing it into a variable<br>
__Note:__ You can read more about the __document.body__ [here](https://www.w3schools.com/jsref/prop_doc_body.asp)

Now that we have the `<body>` tag stored as a variable, we can now add code inside our <i>for loop</i> that will use this variable and add our countries to it.<br>

```
for (...) {
    var div = document.createElement('div');
    div.innerHTML = countries[index];
    body.appendChild(div);
}
...
```

In the first statement we are saying that we want to create a division (div) element and storing that element in a variable called `div`.<br>
Next we are assigning our countries to the `innerHTML` property of our element.<br>
Lastly we are adding our created element to the body element of our document.

## Add structure

So now we're almost there, let's just add a little bit of structure to our page to make it look better.

Let's add a division (`<div>`) element just inside our `<body>`, we will also give this element an ID so that we can reference it from inside our JavaScript function<br>
Because our `<div>` is a container for all our countries to go into, what would be a good name for our countries container?<br>
That's right let's call it "countries-container"!

```
<body>
    <div id="countries-container">
    </div>
</body>
```

So now we have a place to put all our countries, let's change our function to reference this element.<br>
In our code, we can replace the statement `var body = document.body;` with `var container = document.getElementById("countries-container");`<br>
__Note:__ I have also renamed he variable to be called "container", as this is more sensible now that we are not using the <body>, make sure you rename the variable in all places that it is used.

Okay one last thing, let's now give the `<div>` that we are creating some style!<br>
Type this code after we create the `<div>` element:

```
div.style.width = 200
div.style.display = "inline-block"
```

Can you guess what the above code is doing?<br>
Well the first line is simple, we are setting the width to be 200.<br>
The next line isn't so straight forward, we are changing the `<div>` to display as a block.

You can fin out more about [style.with here](https://www.w3schools.com/jsref/prop_style_width.asp).<br>
And more about [style.display here](https://www.w3schools.com/jsref/prop_style_display.asp).

# Challanges

## Challange 1 - List of images

In this lesson we will start from our previous Countries List lesson and add some images and interaction.

### Array of Objects

The first thing we want to do is to change our countries array from and array of strings to an array of objects.

#### What is an object?

An object is a simple list of properties and values surrounded buy curly brackets ({}).<br>
Each property is assigned a value using a colon (:).<br>
A very simple object with one property can be written line this:

```
{ name : "Galapagos" }
```

A object can hav more then one property by separating each property with a comma(,):

{ name : "Galapagos", tortoisePopulation : 15000 }

#### Changing our countries array

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

#### Image property

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

#### Display the image

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

## Challange 2 - For loop the Functional way..

When we write code to create our programs, those programs can become very big and so the code we will have to write a lot os code.<br>
We can organise our code into functions that perform a task, this makes sense to us and makes our code easily understandable, so the function `displayCountries` does exactly that, it displays the countries on screen.<br>
Sometimes when programs get much bigger we might want to perform more then one task, we might want to display the countries and then calculate their populations for example.<br>
It could be tempting to write the code for both of these tasks in the same function, but then our `displayCounties` function would perform two tasks and it would no longer have a single purpose.

__Functional Programming__ is creating function that perform only one task and only have a single purpose.<br>
So taking our example, if we wanted to perform the two task of displaying the counties and calculating their populations, what do you suppose we would do?<br>
We need to look at the problem and woprk out exactly what we want to do, Actually there are three tasks that we need to perfom

1) First we want to loop aroung each counry
2) Inside the loop we want to display that country on screen
3) Then also inside the loop, we want to calculate the countries population

So using __Functional Programming__ our code might look something like this:

```JavaScript
countries.forEach(function(country) {
    displayCountry(country);
    calculatePopulation(country);
});
```

Remember that `countries` is an array of our country objects.<br>
JavaScript has a nice little function called __forEach__, this is instead of _for loop_ in code, but it does a simular thing, the __forEach__ function is saying that for each item in the array we want to perform a given function.<br>
__Note:__ You can read more about the [forEach function here](https://www.w3schools.com/jsref/jsref_forEach.asp)

### What about our code?

Oh yes of course, I had almost forgot.<br>
Inside our `displayCountries` function we can replace our _for loop_ with the functional __forEach__ by writting the following code:

```JavaScript
countries.forEach(function(country) {
    var div = document.createElement('div');

    div.style.width = 200
    div.style.display = "inline-block"

    var img = document.createElement('img');
    img.src = country.img;

    div.appendChild(img);

    container.appendChild(div);
});
```

# End of lesson

Phew so that's the end of this lesson, in the next lesson we will add to our webpage to make it more colourful and interesting, for now just relax and let what we have learnt sink in.

