
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
        <link>http://www.bbc.co.uk/nature/wildlife/by/latest</link>
        <description>
           ...
        </description>
        <language>en-gb</language>
        <image>
            <title>BBC Nature - Latest Wildlife</title>
            <url>http://www.bbc.co.uk/nature/apscss/life/aps/images/wildlife.jpg</url>
            <link>http://www.bbc.co.uk/nature/wildlife/by/latest</link>
        </image>
        <item>
            <title>Peregrine falcon</title>
            ...
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
Unfortunatly this challenge is also going to be quite hard, so follow closely.





TODO: Network tab

http://api.jquery.com/attr/

