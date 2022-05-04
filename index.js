// Get all cars to show in the car listing
var carListingContainer = document.getElementById('carListingContainer');
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', './database/carsDB.json');
ourRequest.onload = function() {
  var cars = JSON.parse(ourRequest.responseText);
  var i = 0;
  // Run Here
  cars.forEach(element => {
    // Create Car Card
    var carCardAdd = document.createElement('div');
    carListingContainer.appendChild(carCardAdd);
    carCardAdd.className = 'carCard'; // + cars[i].id;
    // Get the car's image
    var carImageAdd = document.createElement('img');
    carCardAdd.appendChild(carImageAdd);
    carImageAdd.src = 'assets/cars/' + cars[i].id + '.png';
    carImageAdd.className = 'carImage';
    // Get the car's name
    var carNameAdd = document.createElement('h2');
    carCardAdd.appendChild(carNameAdd);
    carNameAdd.innerHTML = cars[i].name;
    carNameAdd.className = 'carName';
    // Create Car Info
    var carInfoAdd = document.createElement('div');
    carCardAdd.appendChild(carInfoAdd);
    carInfoAdd.className = 'carInfo';
    // Get the car's price
    var carPriceAdd = document.createElement('h2');
    carInfoAdd.appendChild(carPriceAdd);
    carPriceAdd.innerHTML = 'R$ ' + cars[i].price;
    carPriceAdd.className = 'carPrice';
    // Get the car's fuel
    var carFuelAdd = document.createElement('h2');
    carInfoAdd.appendChild(carFuelAdd);
    carFuelAdd.innerHTML = cars[i].fuel;
    carFuelAdd.className = 'carFuel';
    // Get the car's seats
    var carSeatsAdd = document.createElement('h2');
    carInfoAdd.appendChild(carSeatsAdd);
    carSeatsAdd.innerHTML = cars[i].seats + ' Lugares';
    carSeatsAdd.className = 'carSeats';
    // Get the car's type
    var carTypeAdd = document.createElement('h2');
    carInfoAdd.appendChild(carTypeAdd);
    carTypeAdd.innerHTML = cars[i].type;
    carTypeAdd.className = 'carType';
    // Add to var iterable
    i++;
    console.log(cars);
    carListingContainer.style.display = 'none';
  });
  // Run Here
}
ourRequest.send();
// Get all cars to show in the car listing

// Toggle the car listing
var toggleListingBtn = document.getElementById('fullListingBtn');

function toggleListing() {
  if (carListingContainer.style.display === 'none') {
    carListingContainer.style.display = 'flex';
  } else {
    carListingContainer.style.display = 'none';
  }
}

toggleListingBtn.addEventListener('click', toggleListing);
  // Toggle the car listing