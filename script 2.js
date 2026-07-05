var products = ["item 1", "item 2", "item 3"];
var prices = [100, 200, 300];

// Read
for (let i = 0; i < products.length; i++) {
    console.log(products[i], prices[i]);
}

// Add
products.push("item 4");
prices.push(400);


// Delete
products.splice(1, 1);
prices.splice(1, 1);


// Update
products[0] = "item 10";
prices[0] = 1500;

["item 10", "item 2", "item 3"]
