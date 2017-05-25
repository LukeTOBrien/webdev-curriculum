---
title: Questions - Build an object
level: JavaScript
language: en-GB
embeds: "*.png"
materials: ["dist/*.*","res/*.*"]
stylesheet: web
...

# Introduction

In this lesson we are going to build an object by answering questions about ourselves.

# Create the `page.html`

First of all we are going to need a page that will run our script, let's create a standard HTML page.

```HTML
<html>
    <head>
        <script>
        </script>
    </head>
    <body>
        <button onclick="questions()">Ask me some questions!</button>
    </body>
</html>
```

You can see in the above HTML code we have created our basic page with a `<script>` block and a button that will call a __function__ that will ask us some questions about yourselves.

Now save the file by clicking __File -> Save As__ making sure that the file is saved with '.html' at the end.<br>
<i>Ask you teacher if you need some help</i>

# Create the `questions()` function

Now let us create a `function` inside our `<script>` block.<br>
_A `function` is a grouping of code that goes together to perfoms a given task or a function._

Type the following code just inside your `<script>` block.

```JavaScript
function questions() {

}
```

Now we have a place where we can ask our questions, but what questions shall we ask?<br>
Well it makes sence to ask our name first, so let's ask that question.

Before we ask our question, let's display a friendly greeting.<br>
Type the following code inside the `questions` __function__.

```JavaScript
alert("Hello there!");
```

In this line of code, we are telling our page to display an alert box with the friendly message "Hello there!".<br>
_Note: Read more about the [alert function here]()_

## Asking your name with `prompt` function

Now we have displayed a friendly message, let's ask our question.<br>
Type the following code after the `alert` statement in the `questions` function.

```JavaScript
var name = prompt("What is your name?");
```

Here we are asking our question.<br>
You can see here that we are using the `prompt` function to ask the question and then we are storing the answer in a __varible__ called `name`.<br>
_Note: You can read more about the [prompt function here]()._

Now that we have our name stored in a virble, we can use this

## Asking more questions


