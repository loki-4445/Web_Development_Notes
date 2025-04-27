const express = require('express');
const userApp = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenVerification = require('../middlewares/tokenVerify');
const expressAsyncHandler = require('express-async-handler');

// Posting data
userApp.post('/user', async (req, res) => {
    try {
        // Get users collection obj
        const usersCollection = req.app.get("usersCollection");
        
        // Get the body
        let newUser = req.body;
        console.log(newUser)
        // Verify the duplicates
        let existingUser = await usersCollection.findOne({ username: newUser.username });

        // If user already exists
        if (existingUser) {
            return res.status(400).send({ message: "User already exists" });
        } else {
            // Hash the password by (npm install bcryptjs)
            let hashedPassword = await bcryptjs.hash(newUser.password, 7);

            // Replacing the plain password with hashed password
            newUser.password = hashedPassword;
            //adding the empty products array
            newUser.products=[]
            // Save user
            await usersCollection.insertOne(newUser);

            // Send response
            res.status(201).send({ message: "User created" });
        }
    } catch (err) {
        // Handle errors
        console.error('Error creating user:', err);
        res.status(500).send({ message: "Internal server error" });
    }
});

// Getting data
userApp.get('/user', tokenVerification, async (req, res) => {
    try {
        // Get users collection obj
        const usersCollection = req.app.get("usersCollection");

        // Get the users data from collection
        let usersList = await usersCollection.find().toArray();

        // Send users data to client
        res.send({ message: "Users", payload: usersList });
    } catch (err) {
        // Handle errors
        console.error('Error getting users:', err);
        res.status(500).send({ message: "Internal server error" });
    }
});

// Read by ID
userApp.get('/user/:id', tokenVerification, async (req, res) => {
    try {
        // Get users collection
        const usersCollection = req.app.get("usersCollection");

        // Get the id 
        let idByUrl = Number(req.params.id);

        // Searching the id in collection
        let user = await usersCollection.findOne({ id: { $eq: idByUrl } });

        // If user not found
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        // Sending response
        res.send({ message: "User By Id", payload: user });
    } catch (err) {
        // Handle errors
        console.error('Error getting user by ID:', err);
        res.status(500).send({ message: "Internal server error" });
    }
});

// Login
userApp.post('/login', async (req, res) => {
    // Get users collection obj
    const usersCollection = req.app.get("usersCollection");

    // Get the body of login
    let userCred = req.body;

    // Verify username, if it is correct then check password
    let dbUser = await usersCollection.findOne({ username: userCred.username });

    // If the user does not exist
    if (dbUser === null) {
        res.send({ message: "Incorrect username" });
    } else {
        // Check whether the password is correct or not
        let result = await bcryptjs.compare(userCred.password, dbUser.password);

        if (result === false) {
            res.send({ message: "Incorrect password" });
        } else {
            // Create JWT token
            let signedToken = jwt.sign({ username: userCred.username }, process.env.SECRET_KEY, { expiresIn: '7d' });

            // Send response
            res.send({ message: 'Login success', token: signedToken, user: dbUser });
        }
    }
});

// Updating data
userApp.put('/user', tokenVerification, async (req, res) => {
    // Get users collection obj
    const usersCollection = req.app.get("usersCollection");

    // Get the body
    let modifiedUser = req.body;

    // Update by username
    await usersCollection.updateOne({ username: modifiedUser.username }, { $set: { ...modifiedUser } });

    // Sending response to the user
    res.send({ message: "Updated User" });
});

// Deleting data
userApp.delete('/user/:id', tokenVerification, async (req, res) => {
    // Get users collection obj
    const usersCollection = req.app.get("usersCollection");

    // Get the body 
    let deleteUser = Number(req.params.id);

    // Delete the user
    await usersCollection.deleteOne({ id: { $eq: deleteUser } });

    // Sending response
    res.send({ message: "Deleted User" });
});
// PUT endpoint to add a product to the cart
userApp.put('/add-to-cart/:username', expressAsyncHandler(async (req, res) => {
    try {
        // Get cart collection
        let cartCollection = req.app.get('cartCollection');

        // Get username from URL
        let usernameByUrl = req.params.username;

        // Get product object from request body
        let productObj = req.body.product;

        console.log(productObj); 

        // Find user cart or create one if it doesn't exist
        let userCart = await cartCollection.findOne({ username: usernameByUrl });
        if (!userCart) {
           console.log("Login to add the item into the cart")
        } else {
            // If cart exists, update it with the new product
            await cartCollection.updateOne( { username: usernameByUrl }, { $push: { products: productObj } } );
             // Send response
        res.send({ message: 'Product added to cart successfully' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Failed to add product to cart', error });
    }
}));
module.exports = userApp;
