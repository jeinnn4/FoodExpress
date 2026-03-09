const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send(`
        <h1 style="color: green;">Welcome to FoodExpress API</h1>
        <p>Use the following endpoints:</p>
        <ul>
            <li><b>/menu</b> - GET food menu</li>
            <li><b>/order</b> - GET order example</li>
        </ul>
    `);
});

app.get("/menu", (req,res)=>{
    res.json({
        status: "success",
        message: "Here is the food menu",
        data: {
            food: ["Pizza", "Burger", "Pasta"]
        }
    });
});

app.get("/order", (req,res)=>{
    res.json({
        status: "success",
        message: "Order API is working",
        exampleOrder: {
            id: 1,
            item: "Pizza",
            quantity: 2
        }
    });
});

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});