function displayAnimals() {
    var container = $("#animal-container");
    for (var index = 0; index < animals.length; index++) {
        var animal = animals[index];
        var div = $('<div/>');

        div.on("click", { animal : animal }, function(event) {
            var animal = event.data.animal;
            var isSelected = animal.isSelected;
            animal.isSelected = ! isSelected;
            $(this).toggleClass('selected');
        });

        var img = $("<img/>");
        img[0].src = animals[index].img;

        div.append(img);

        container.append(div);
    }
}

function GetSelectedAnimal() {
    return animals.find(function(animal) {
        return animal.isSelected
    });
}

function displayAnimalLocation() {
    var animal = GetSelectedAnimal();

    var output = $("#output");
            // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(output[0], {
          center: animal.location,
          scrollwheel: false,
          zoom: 8
        });
}