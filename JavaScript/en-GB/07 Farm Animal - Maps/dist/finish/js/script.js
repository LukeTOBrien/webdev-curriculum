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

function getSelectedAnimal() {
    return animals.find(function(animal) {
        return animal.isSelected
    });
}

function getAllSelectedAnimals() {
    return animals.filter(function(animal) {
        return animal.isSelected
    });
}

/*
 * Display Animal on Map
 */
var map;
function displaySelectedAnimalOnMap(animal) {
    var output = $("#output");
    if (! map) {
        map = new google.maps.Map(output[0], {
            center: animal.location,
            zoom: 8
        });
    }
    var marker = new google.maps.Marker({
        position: animal.location,
        map: map,
        label: animal.name
    });
}

function displayAnimalLocation() {
    map = null;
    var selectedAnimal = getAllSelectedAnimals();
    selectedAnimal.forEach(displaySelectedAnimalOnMap);
}