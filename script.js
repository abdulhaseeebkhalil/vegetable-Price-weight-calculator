function calculatePrice() {
    var vegetable = document.getElementById("vegetable").value;
    var weight = document.getElementById("weight").value;
    var price = document.getElementById("price").value;
  
    // Calculate the price based on the weight and price per kg
    var totalPrice = weight * price;
  
    // Display the result
    var result = document.getElementById("result");
    result.innerHTML = "The price of " + weight + "kg of " + vegetable + " is $" + totalPrice.toFixed(2);
  }