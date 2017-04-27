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

function displaySelectedAnimalOnMap(selectedAnimal) {
    var output = $("#output");
    var map = new google.maps.Map(output[0], {
        center: animal.location,
        scrollwheel: false,
        zoom: 8
    });
}

function displayAnimalLocation() {
    var selectedAnimal = GetSelectedAnimal();
    displaySelectedAnimalOnMap(selectedAnimal)
}