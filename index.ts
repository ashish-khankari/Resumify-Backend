import express from "express";

const app = express();
const PORT: number = 3000;

app.listen(PORT, () => {
    try {
        console.log("Server is running");
    } catch (error) {
        console.log("Error Starting Server");
    }
});