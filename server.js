const express = require('express')
const cors = require('cors')
const axios = require('axios')
const path = require('path')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

var value =''

app.get('/' ,(req,res)=>{

})

app.post('/', async (req, res) => {
    const { msg } = req.body;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+msg+"&appid=c1dce56d74908012ceafaa7fb33120fc";
    var data = await axios.get(url)
    console.log(data.data)
    res.json(data.data)
    
});


app.listen(process.env.PORT || 4000, ()=>{
    console.log('started')
})