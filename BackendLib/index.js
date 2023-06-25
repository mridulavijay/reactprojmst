// 1.iMPORTING
const express = require ("express");
const libModel = require("./model/booksDb");
const cors = require ('cors');
// 2. in
const app = new express();

// 3.middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


// Api creation
// to post data
app.post('/addbooks',async (req,res)=>{
    console.log(req.body)
    var data = await libModel(req.body);
    data.save();
    res.send({status:"data saved"})
})

//to view all books
app.get('/viewbooks',async(req,res)=>{
    var data = await libModel.find();
    res.json(data);
})

// to view one book
app.get('/viewonebook',async(req,res)=>{
    let id = req.body._id
    console.log(id)
    var data = await libModel.findOne(id)
     res.json(data)
})
// to delete book
app.delete('/deletebooks/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id;
    await libModel.findByIdAndDelete(id);
    res.json({status:"deleted"})
})

// to update 

app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    try{
        await libModel.findByIdAndUpdate(id,req.body)
        res.json({status:"updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})

//port
app.listen(3008,()=>{
    console.log("app is running in port 3008")
})