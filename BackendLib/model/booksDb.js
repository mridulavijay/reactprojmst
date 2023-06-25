const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://tiyars:mst@cluster0.l6d4x3p.mongodb.net/libmstdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

let Schema = mongoose.Schema;

const libSchema = new Schema({
    BookName:String,
    author:String,
    language:String,
    genre:String,
    bookNum:Number
});
var libModel = mongoose.model("book",libSchema);
module.exports = libModel;

