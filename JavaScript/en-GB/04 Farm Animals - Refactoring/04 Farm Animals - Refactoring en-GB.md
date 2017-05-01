
# Tidy up

In the world of computer programming, tidying up or reorganising code is called __Refactoring__ (but this is just a posh word for tidying up).

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

## Styling our page

The way we add style to our page is but creating __style rules__ inside a __stylesheet__, a stylesheet is saved in a special file called a __CSS__ file.<br>
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

Here we are saying that we wish to link to a stylesheet that is a text CSS file that is located in the file "styles.css".<br>
__Note:__ You can read more about the [`<link>` element here](https://www.w3schools.com/tags/tag_link.asp)

## Moving script

Let's now move some more of our code.<br>
Inside the `js` folder there are two more blank files, `animals.js` and `script.js`, these files end with `.js` which stands for `JavaScript`.<br>
Let's move our animals array into the `animals.js` folder.

## Moving the animals array

Drag your mouse over the entire __animals__ array and press the special cut command __Ctrl + X__.<br>
Now open up the file `animals.js` and press the special paste command __Ctrl + V__.<br>
Now our animals are well organised into a seperote file, but we still need to tell our page where the animals are.

We can tell our page to look for the animals in the file `animals.js` by copying the following code into your `<head>` element.

```
<script src="js/animals.js"></script>
```

This is a simple bit of code.<br>
Here we telling our page that we would like to use some scrip, and the __source__ (`src` means source) is located inside the `js` folder in a file called `animals.js`.

## Moving the `displayAnimals` function

Drag your mouse over the entire __displayAnimal__ function and press the special cut command __Ctrl + X__.<br>
Now open up the file `script.js` and press the special paste command __Ctrl + V__.<br>
Now our displayAnimal function is well organised into a seperote file, but we still need to tell our page where the displayAnimal function is.

We can tell our page to look for the displayAnimal function in the file `script.js` by copying the following code into your `<head>` element.

```
<script src="js/script.js"></script>
```

This is a simple bit of code.<br>
Here we telling our page that we would like to use some scrip, and the __source__ (`src` means source) is located inside the `js` folder in a file called `script.js`.

# End of lesson