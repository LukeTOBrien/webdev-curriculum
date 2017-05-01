http://leafletjs.com

When using the method `array.find()`, your students may find it easier to use `Arrow Functions`<br>
However, not all browsers support this syntax, please check the website https://caniuse.com/#search=arrow to check if the browsers you are using support this feature.<br>
If you can suppor them, then I would advise mentioning them to your class or even using them in replace of tradition functions.

<b>Trational</b>
```
animals.find(function(animal) {
    return animal.isSelected
});
```
<b>Arrow Functions</b>
```
animals.find(animal => animal.isSelected);
```