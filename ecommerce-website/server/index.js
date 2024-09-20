const express= require('express');
const cors=require('cors');
const app=express();
const userModel=require('./models/Db');
const sellerModel = require('./models/Dbs');

app.use(cors())
app.use(express.json());


app.get("/view",(req,res)=>{
    sellerModel.find()
    .then(notes=>res.json(notes))
    .catch(err=>res.json(err))
})

app.get("/views",(req,res)=>{
    userModel.find()
    .then(notes=>res.json(notes))
    .catch(err=>res.json(err))
})

app.post("/save",async (req,res)=>{
    
    const newUser=new userModel(
        {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "email": req.body.email,
            "phone": req.body.phone        }
    )
 
    
    await newUser.save();
    res.send(newUser);
    console.log(newUser);
});

app.post("/saves", async (req, res) => {

      const newseller = new sellerModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        productName: req.body.productName,
        address: req.body.address,
        price: req.body.price,
        brandName: req.body.brandName,
        yearOfUsage: req.body.yearOfUsage,
        like: req.body.like,
        image:req.body.image
      });
  
      await newseller.save();
      res.send(newseller);
      console.log(newseller);
    
  });
  

  app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedItem = await sellerModel.findByIdAndDelete(id);
        if (deletedItem) {
            res.status(200).json({ message: 'Item deleted successfully', id });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
});


app.put('/update', async (req, res) => {
    const id=req.body.id
    let like=req.body.like;
  
   
    console.log("Update request received:", id, like);
    const result = await sellerModel.findByIdAndUpdate(
        {"_id":id },
        { "like":like});
})



app.listen(3001,()=>
    {
        console.log("surver is running in port 3001");
    });