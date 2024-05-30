var vegetables = [
    { name: "Carrot", price: 2.5 },
    { name: "Tomato", price: 3.0 },
    { name: "Broccoli", price: 4.5 },
    // Add more vegetables here
  ];
  
  function displayVegetables() {
    var list = document.getElementById("list");
  
    // Clear the existing list
    list.innerHTML = "";
  
    // Create list items for each vegetable
    vegetables.forEach(function(vegetable) {
      var listItem = document.createElement("li");
      listItem.textContent = vegetable.name + " - $" + vegetable.price.toFixed(2);
  
      list.appendChild(listItem);
    });
  }
  
  // Display the initial list
  displayVegetables();