const express = require('express');
const app = express();
const mongoose = require('mongoose');


main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('');

app.get('/', (req, res) => {
    res.send ('root is working')
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});