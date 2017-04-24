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
    return animals.find(function(animal) { animal.isSelected });
}

function displayAnimalLocation() {
    var animal = GetSelectedAnimal();

    var div = $("<div />");
    div.appendTo($("#output"));
            // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(div[0], {
          center: {lat: -34.397, lng: 150.644},
          scrollwheel: false,
          zoom: 8
        });
}