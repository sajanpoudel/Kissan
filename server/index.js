const express = require("express");
const app = express(); 
const cors = require("cors"); 
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

app.post("/appointments", async(req,res) => {
    try {
        const{name,location,phone_number,email} = req.body;
        console.log(
            req.body.name, 
            req.body.location,
            req.body.phone_number,
            req.body.email
        )

       const newApp = await pool.query("INSERT INTO appointments (name,location,phone_number,email)"+
        " VALUES($1,$2,$3,$4) RETURNING *",
     [req.body.name, req.body.location, req.body.phone_number,req.body.email]); 
        res.json(newApp.rows[0]); 

    } catch (error) {
        console.error(error.message); 
    }
})

app.get("/appointments", async(req,res) => {
    try {
        const allApps = await pool.query("SELECT * FROM appointments")
        res.json(allApps.rows);
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(4000, () => {
    console.log("Server has started on port 4000"); 
});