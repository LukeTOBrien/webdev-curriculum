
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

In this lesson we are going to __Request__ our list or wildlife from the URL [http://www.bbc.co.uk/nature/wildlife/by/latest](http://www.bbc.co.uk/nature/wildlife/by/latest), go ahead and click on the address or copy it to your browser.<br>
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

# Create the basic page

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

There is also a music JavaScript file that we need, in the folder called `js` (js for JavaScript) there should be a file called __jquery.js__

```HTML
<script src="js/jquery.js"></script>
```