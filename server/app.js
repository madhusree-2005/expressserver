import express from "express";
const app = express();
app.use(express.json())
const port = 5001;
app.get("/", (req, res) => {
    res.send("hello server");
});
app.get("/global", (req, res) => {
    res.send("hello global server")
});


app.post("/register", (req, res) => {
    let userData = req.body
    console.log("userData")
    res.json({ msg: "user registered sucessfully" })
})


app.post("/students/:id", (req, res) => {
    let userId = req.params.id
    console.log(userId)
    res.send(userId)
})



//req.params
app.post("/students/:roll", (req, res) => {
    let id = req.params.roll;
    console.log(id)
    res.json(id)
})


app.get("/link",(req,res)=>{
    try{
        res.redirect("https://goggle.com")
    }catch (error){
    console.log (error)
    }
    })

    app.get("/url/:link",(req,res)=>{
    try{
        let url = req.params.links;

     res.redirect('https://${url}.com');
    }catch (error){
    console.log (error);
    }
    });

    app.get("/download",(req,res)=>{
    try{
     res.download('./nature.webp')
    }catch (error){
    console.log (error)
    }
    });


app.listen(port, () => {
    console.log('server is running at http://localhost:${port}')
});