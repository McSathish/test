const express=require("express");
const cors=require('cors')
const bodyParser=require('body-parser');
const mysql=require('mysql2');
const dotenv = require("dotenv");
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')
const cookieparser=require('cookie-parser')
// const { query, validationResult, body } = require('express-validator');

 dotenv.config();
const port=4002;
const app=express();
// app.use(express.json());
app.use(cors())
app.use(cookieparser())
app.use(bodyParser.json());
const con = mysql.createConnection({
    // server:'123.123.12.1',
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    insecureAuth:true,
    port:process.env.DB_PORT

  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
   } )

app.get("/",(req,res)=>{
 res.send("welcome")
});
app.post('/add',(req,res)=>{
    // const result = validationResult(req);,[body('personid').notEmpty(),body('userName').notEmpty().isLength({ max:16 })
// ,body('email').notEmpty(),body('mnumber').notEmpty(),body('address').notEmpty(),body('Password').notEmpty()]
    // if (result.isEmpty()) {
    const UID=req.body.personid
    const NAME = req.body.userName
    const EMAIL = req.body.email
    const ADDRESS = req.body.address
    const MNUMBER= req.body.mnumber
    const PASSWORD= req.body.Password
con.query('insert into  regsister  values(?,?,?,?,?,?)',[UID,NAME,EMAIL,MNUMBER,ADDRESS,PASSWORD],(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send("posted")
            console.log("successful")
        }
    })
// }else{
//     res.send({ errors: result.array()});
// }

})


app.get('/ge',(req,res)=>{
    
    con.query('select * from regsister',(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            
            // res.status(200).send('This code is used for a successful request.')
            res.send(result);
        }
    });

});



app.get('/getName/:userName',(req,res)=>{
    const ID=req.params.userName;
    con.query('select * from regsister  where userName=?',ID,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
        
                // res.send({ 
                //     message:` This details was update successfully in the employeedetail database`,status:"200"})
                
            res.json(result); 
            
        }
    })

})
// 
app.post('/added',(req,res)=>{
  
  
    const NAME = req.body.uname
    
    const MNUMBER= req.body.number
    const EMAIL = req.body.Email
    const UPI= req.body.Upi
    const ADDRESS = req.body.Address
   
con.query('insert into  news  values(?,?,?,?,?)',[NAME,MNUMBER,EMAIL,UPI,ADDRESS],(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send("posted")
        }
    })


})

// ________________________

app.put('/update/:userName',(req,res)=>{
  
    const NAME = req.params.userName
    // const EMAIL = req.body.email
    // const ADDRESS = req.body.address
    // const MNUMBER= req.body.mnumber
    const PASSWORD= req.body.Password
    con.query('UPDATE regsister SET Password=? where userName=?',[PASSWORD,NAME],(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           
            console.log(result);
            // res.send({ 
            //     message:` This details was update successfully in the employeedetail database`,status:"200"},result)
        }
    })

})
// ______________________________________________

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'rainastalin7849@gmail.com',
      pass: 'nqldftszgvgcsfbk', 
    },
  });

app.post('/generate-otp', (req, res) => {
    const { userName, email } = req.body;
  
    // Generate OTP
    const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
  
    // Store the OTP and associate it with the user's session or identifier
    // For simplicity, we'll just store it in memory here
    const userSession = {
      userName,
      otp,
    };
 
    // Send OTP to the user via email
    const mailOptions = {
      from: 'rainastalin7849@gmail.com',
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP is: ${otp}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to send OTP' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ message: 'OTP generated and sent successfully' ,otp:otp});
      }
    });
  });
// ______________________new database___________________


app.post('/addnew',(req,res)=>{

    Orderitem = req.body.Orderitem
    OrderName= req.body.OrderName,
    Mobilenumber= req.body.Mobilenumber
    OrderEmail= req.body.OrderEmail
    CardNumber = req.body.CardNumber
    Totalamount = req.body.Totalamount
    Address =req.body.Addressq
   


con.query('insert into  M  values(?,?,?,?,?,?,?)',[Orderitem,OrderName,Mobilenumber,OrderEmail,CardNumber,Totalamount,Address],(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send("posted")
            console.log("successful")
        }
    })

// 
const mailOptions = {
    from: 'rainastalin7849@gmail.com',
    to: OrderEmail,
    subject: 'Order placed successfully',
    text: ` ${OrderName}  Your  order have been placed successfully. your order item ${Orderitem} and price ${Totalamount}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Failed to send ' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Email sent successfully'});
    }
  });






// }else{
//     res.send({ errors: result.array()});
// }

})


app.get('/getnew',(req,res)=>{
    
    con.query('select * from M',(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            
            // res.status(200).send('This code is used for a successful request.')
            res.send(result);
        }
    });

});



// app.post('/generateotp', (req, res) => {
//     const { userName, email } = req.body;
//     console.log(userName)

//     // Send OTP to the user via email
//     const mailOptions = {
//       from: 'rainastalin7849@gmail.com',
//       to: email,
//       subject: 'Order placed successfully',
//       text: ` ${userName}  Your  order have been placed successfully. you will be redirected in secounds`,
//     };
  
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Failed to send ' });
//       } else {
//         console.log('Email sent: ' + info.response);
//         res.json({ message: 'Email sent successfully'});
//       }
//     });
//   });






app.listen(port,()=>{
    console.log("Runnning"+ port)
   });
console.log("server created")