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
 * Display Animal's favourite video'
 */
var map;
function displaySelectedAnimalFavouriteVideo(animal) {
    var output = $("#output");

    var video = $("<video />");
    var src = $("<source />");
    
}

function displayFavouriteVideo() {
    var selectedAnimal = getAllSelectedAnimals();
    selectedAnimal.forEach(displaySelectedAnimalOnMap);
}