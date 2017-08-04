
# Introduction

In this lesson we are going using to seach the internet for the latest wildlife you can read about on the BBC<br>
To do this we are going to use something called a __Web Server__

## What is a __Web Server__?

When you go to a restraunt and find a table, a waiter will come over and ask for your order.<br>
When giving your order you make a __Request__ for food and drink.
Then the waiter goes away to the kichen that prepares the food and drink ready for you.
When the waiter return, his __Response__ is to serve you the food and drink that you have asked for.

A __Web Server__ is the kitchen.<br>
A Web Server will prepare the food and drink.. or the HTML and data that you have asked for?

So how do we tell the Web Server what we want?.<br>
Well in the world of the interent there is something simuliar to the waiter.<br>
We call this something __HTTP__.

> HTTP stands for _HyperText transfer Protocal_ And you can [read more about it here](https://www.w3schools.com/tags/ref_httpmethods.asp)

When you navigate to your favourite website in your web browser, you are using __HTTP__ to __Request__ HTML which your browser displays on your screen.<br>
Let's look at the website address for the BBC.

> __HTTP__://www.bbc.co.uk

We can see that the first part of this address is the keywork __HTTP__.<br>
Here we are telling our browser to use HTTP and to __Get__ the HTML page from the server `www.bbc.co.uk`.

## Responding with data

Did you know that a website address is actually called a __URL__?<br>
__URL__ stands for _Universal Resourse Location_ - Notice the word `location`, anything can be at this location, not just an HTML page.

In this lesson we are going to __Request__ our list or wildlife from the URL [http://www.bbc.co.uk/nature/wildlife/by/latest.rss](http://www.bbc.co.uk/nature/wildlife/by/latest.rss), go ahead and click on the address or copy it to your browser.<br>
Once you do, you will see something like this:

```XML
<rss xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
    <channel>
        <title>BBC Nature - Latest Wildlife</title>
        <link>...</link>
        <description>
           ...
        </description>
        <language>en-gb</language>
        <image>
            <title>BBC Nature - Latest Wildlife</title>
            <url>...</url>
            <link>...</link>
        </image>
        <item>
            <title>Peregrine falcon</title>
            ...
            <media:thumbnail width="146" height="82" url="..."/>
    </item>
    </channel>
</rss>
```

WOW, that looks scary!<br>
Well let's take a closer look at it.

This URL is __Responding__ with __XML__, which is simular to HTML but __XML__ is data, is is not displayed on our screen like HTML is.<br>
__XML__ has elements like HTML, but these elements can be anything, for example `<description>` is more like a property with a value then a HTML element which is something to display.

Even though this data is not HTML, we can use this data to create HTML.<br>
This is what we are going, __Request__ data and then use the data to create HTML for our page.

# Let's begin

So now we know what we want to do, let's go ahead and get started.<br>
The first thing we need to do is to create a basic page, so let's do that now!

## Create the basic page

First of all we need to create a basic page:

```HTML
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```

Now let's add a little bit of markup to our `<body>`:

```HTML
<button onclick="getWildlifeList()">Get Wildlife!</button>
<div id="output">

</div>
```

Here we have added a `<button>` that will call a function `getWildlifeList` when we click on it.<br>
We have also added a `<div>` which we have givven an id of `output`, this will be where we place the Wildlife List when it returns from the Web Server.

There is also a magic JavaScript file that we need, in the folder called `js` (js for JavaScript) there should be a file called __jquery.js__.<br>
Let's add a `<script>` element to our `<head>` and point it's `src` attribute to the __jQuery__ file:

```HTML
<script src="js/jquery.js"></script>
```

## Create the main function

Let's create an new script block with a new empty function inside, remember we will name our function `getWildlifeList`.<br>
Remember the __URL__ we are using is http://www.bbc.co.uk/nature/wildlife/by/latest.rss, so we will also need a varible that contains this __URL__.<br>
Type the following code into the `<head>` section of your page:

```HTML
<script>
var url = "http://www.bbc.co.uk/nature/wildlife/by/latest.rss";

function getWildlifeList() {
}
</script>
```

Okay, that's not much, but it's a start, the next steps are a bit more complicated, so just take them slowly and ask you teacher if you need help.

### Requsing data from the server

Okay, so we want to __Request__ data from the __Server__ (which is bbc.co.uk).<br>
So how do we __Request__ data?

Well we do this using a technique called __Ajax__, Ajax stands for _ __A__syicronous __J__avaScript __A__nd __X__ml _.<br>
__Ajax__ allows us to send a __Request__ to a __Web Server__ and to call a function once we recieve a __Response__.<br>
The Asyncronous word mean that it does not cause our code to pause and wait for the response to come back, our code is free to perform other tasks.

> __Note:__ You can read more about [Ajax here](https://www.w3schools.com/xml/ajax_intro.asp)

Luckily __jQuery__ the magic little JavaScript file that we added to our page has some helpful functions that we can use.<br>
One of thouse functions is the __ajax__ function.

> __Note:__ You can read more about [the ajax fuction here](http://api.jquery.com/)

So let's call the `ajax` function in our code:

```JavaScript
function getWildlifeList() {
    $.ajax(url, {
        type: "GET",
        success: displayData,
        error: displayError
    });
}
```

This is our entire `getWildlifeList` function, not very big is it?<br>
In fact if you look closely it is only one statement long (one semi-colon `;`), but we are spacing it out like this so that it look nice and easy to read.<br>

The first thing to notice is the `ajax` function is actually a function of the specal jQuery dollar object (`$`).<br>
The `ajax` function hase two parameters, the __URL__ that the request will go to and a configuration object.<br>

Here we are saying that the type of request we want to make is a __GET__ request, we are also specifing two function names in the configuration object, we are saying that when the request is a __success__ we want to call the `displayData` function and when the request returns a __error__ we want to call the `displayError` function.<br>
At the moment we do not have those functions, so let's create them now.<br>
Type the following code after your main `getWildlifeList` function:

```JavaScript
function displayData(data) {
    console.log(data);
}

function displayError() {
    var output = $('#output');
    output.html("Oops!);
}
```

So these functions are pretty simple to understand, right?<br>
When the __Ajax__ __Request__ is a __success__, we want to call the `displayData` function that logs the data to the developer console.<br>
When the __Ajax__ __Request__ is an __error__, we want to call the `displayError` funtion that will output "Oops!" on to the page.

Let's save our work now and test out our page to see if it works.

#### Oops!

Well we didn't quite get "Oops!" displayed on our page, let's see what did happend by opening up our developer tools by pressing __F12__ on our keyboard and clicking on the console tab.

TODO: CORS erroe

> XMLHttpRequest cannot load http://www.bbc.co.uk/nature/wildlife/by/latest.rss. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.

So this error is a bit strange, what does it mean?

Well this is security built into our internet browser, it means that our __Origin__ (which means where we sent the __Request__ from, ie: The computer that you are using) is not allowed to access the __Web Server__ in this way.

> For a more detail (Warning: Very technical) see https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS

So how can we solve the issue?<br>
Well we can use a little trick called __JSONP__ which stands for _JSON with Padding_. ([Read more JSONP here](https://www.w3schools.com/js/js_json_jsonp.asp)).<br>
But unfortuatly that won't work for us here, as the __Web Server__ is __Respond__ing with __XML__ and not __JSON__.

So is there anything we can do?

Well yes, we are going to use a __Proxy__, this is another __Web Server__ that will act like a middleman and safely relay our __Request__.<br>
Add the following code to the top of your `<script>` block:

```JavaScript
var corsProxy = "https://crossorigin.me/";
```

Now let's change our call to `ajax` in our code to use the new __Proxy__:

```JavaScript
function getWildlifeList() {
    $.ajax(corsProxy + url, {
        ...
```

Now if we save our work an open it in our browser again, we should see the data logged into our console window:

TODO: ConsoleWithWildlifeData

If you leave the developer tools window open, you can then click on the __Network__ tab to see our __Request__:

TODO: DeveloperToolsNetwork

This is another complicated screen and we won't talk about it here, but it is nice to see what is happening.

> https://www.w3schools.com/tags/ref_httpmessages.asp

# End of lesson

Phew there is an aweful lot to learn in this lesson, if you are confussed about anything then ask your teacher.

# Challenges

## Challenge 1 - Display the data

It this challenge we are going to use the magic power of __jQuery__.<br>
Unfortunatly this challenge is also going to be quite hard, so take your time and look closely at the functions that we use.

### Main output function

Currently our `displayData` function is very simple, all we do here is display the data in the console window.<br>
What we would really like to do is display the data on the page.<br>
Let's modify our function a little:

```JavaScript
function displayData(data) {
    console.log(data);

    var output = $('#output');
    var channel = $(data).find('channel');
    outputChannel(channel, output);
}
```

So here you can see that after we log the data to the console we have added three more statements:
1) We are using the special __jQuery__ dollar (`$`) function to get the output `div` and storing it in a varible, remember the `div` has an `id` of output (`id="output"`) and that is why we are using the hash (`#`) here.
2) We are using the special `$` function again, but this time we are passing the `data` varible when we call it. We are doing this so that the `data` varible is wrapped into a special __jQuery__ object.<br>
Wrapping `data` into a __jQuery__ object then allows use to use other function that we couldn't normally use, in this case we can use the function __find__ to find the `channel` section of the `data`, which we are assigning to a varible.
3) Lastly we are callin a new function that we have not written yet, this function this function will display the `channel` section of our data to the `output` div on our page.

Let's create the `outputChannel` function now

### `outputChannel` function

This function will take two parameters, first the `channel` section or our data and scound is the `output` div on our page.<br>
We then want to do three things:

1) Add the title to the `output`.
2) Add the description to the `output`.
3) Add all the `item` sections from the `channel` to the `output`.

Look at the following function very closely and see if you can workout what is happening:

```JavaScript
function outputChannel(channel, output) {
    output.append(
        $('<h1 />').text(channel.find('title:first').text())
    )
    .append(
        channel.find('description:first').each(
            buildDescription
        ).html()
    )
    .append(
        outputItems(channel)
    );
}
```

We are appending (adding) three things to our `output`, you can notice here that there is only one statement (one semi-colon `;`), that is because we are calling each function one after the other, calling functions this way is called function __chaining__.

1) The first thing we are appending is a new heading element (`<h1 />`), we are setting it's text to that of the first `title` in our `channel`.
2) The second thing we are adding is the whole HTML of the first `description` element.<br>
But remember that the data returned from the __Web Server__ is XML not HTML, so we have to call another function `buildDescription` that will build the HTML that we need.
3) Lastly we appending all the `item` elements from our `channel` with another function that we will need the create called `outputItems`.

So let's now create the functions that we need, first is the `buildDescription` function.

> __Note:__ You can learn about all the functions we have used by reading the following pages:
> [append](http://api.jquery.com/append/)
> [text](http://api.jquery.com/text/)
> [find](http://api.jquery.com/find/)
> [each](http://api.jquery.com/each/)
> [html](http://api.jquery.com/html/)


#### `buildDescription` function

```JavaScript
function buildDescription() {
    $(this).find('a').each(function() {
        var me = $(this);
        me.attr('href', "http://www.bbc.co.uk" + me.attr('href'));
        me.attr('target', '_blank');
    });
}
```

If you remember, the reason why we need this function is we need to change the element a little bit to make it exactly what we want.<br>
What  we want to do is actually a very minour change, we only need to change the anchor `<a>` elements so that they point to the right place and open is a new blank window.

Take a close look at this function and see if you can work out what is going on.

There is only one stement (semi-colon `;`) here again, but let's take the functions one by one:
1) Firstly we are wrapping the specail keyword `this` into a __jQuery__ object by calling the dollor (`$`) function.<br>
_Remember:_ The `this` keyword is a varible and here it is the `<description>` element we got in our `outputChannel` function by using the code `find('description:first')`.
2) We are finding all of the anchor (`<a>`) elements inside the `<description>`.
3) Lastly, for each of the anchor element we are calling a function to modify it.

Let's take a look at the function we use to modify the anchor element.<br>
You can notice in this function the there are three statement (three `;`), but actually it could be reduced to one using __chaining__.<br>
Can you guess what is happening in this function? what would the code look like if it where chained together?
Let's take the three statements as they are and go over what they all do.

1) Firstly we are wrapping the specail keyword `this` into a __jQuery__ object by calling the dollor (`$`) function.<br>
_Remember:_ The `this` keyword is a varible and here it is the `<a>` element we got in our `outputChannel` function by using the code `find('a')`.
2) Then we are using the `attr` function to change the `href` attribute, we do not want to change it compleatly, only add a __URL__ to the begining, so we add the existing `href` attribute to the end of the __URL__ with the code `+ me.attr('href')`.
3) Lastly we want to add a new `target` attribte to our element, this is so that when we cllick on the link it will open in a blank window.

> __Note:__ You can read more about the [attr function here](http://api.jquery.com/attr/)

Now we have created the function to build the description, let's create the next function.

### `outputItems` function

In this function we are going to output all of the `<item>` element of our `channel`.<br>

Look closely at this function, see if you can work out what is happening:

```JavaScript
function outputItems(channel) {
    return $('<div />').append(
        channel.find('item').map(
            createItem
        ).get()
    );
}
```

In this function we are returning a new `<div></div>` element that we are adding all the `<item>` elements too.<br/>

You might be a little confused by the __map__ function.<br/>
This function takes every `item` we've found in the `channel` and then transforms it into something new using a function that we give it as a parameter, here we are giving it a function called `createItem` that we are going to create.<br/>
Lastly we call the __get__ function so that we can get the array of HTML elements that can be appended.

> __Note:__ You can read more about the [map function here](http://api.jquery.com/map/)
> __Also note:__ You can read more about the [get function here](http://api.jquery.com/get/)

Because `<item>` is not a HTML element we are creating the new function that will create the HTML and transform the `<item>`.<br/>

Let's look at the `createItem` function.

#### The `createItem` function

So if we remember, we are calling this function for each `<item>` element that we find, therefore the __this__ keyword is the `<item>` element thatwe are currently dealing with.<br/>
Okay, so we know what __this__ is, let's see if we can work out what the rest of the code is doing:

```JavaScript
function createItem() {
    var me = $(this);
    return $('<div />')
        .append(
            $('<h2 />').text(me.find('title').text())
        )
        .append(
            $('<div />').html(
                me.find('description').each(
                    buildDescription
                ).html()
            )
        )
        .append(
            me.find('[url]').map(
                createImage
            ).get()
        );
}
```

This function is simular to the first `outputChannel` function that we created, can you see the simularities?<br/>
In this function we are returning a `<div>` element which we are appending to three timess as you can see:<br>
The first and second `append` function calls are the same as in `outputChannel`, we are adding the title and description in the same way.<br>
The third `append` function call is a little different, we are finding all the elements we a `url` attribute (that means something like url="image") and then we calling anoth function that we will create called `createImage`.

Let's take a look at the `createImage` function now:

#### `createImage` function

Remember that we are callind our function for earch element that has a `url` attribute.<br>
So tht means that the __this__ varible has a value that looks something like this:

```XML
<media:thumbnail width="146" height="82" url="..."/>
```

So that looks simple to understand

```JavaScript
function createImage() {
    var me = $(this);
    var img = $('<img />');
    img.css({
        width: me.attr('width'),
        height: me.attr('height')
    });
    img[0].src = me.attr('url');
    return img;
}
```




