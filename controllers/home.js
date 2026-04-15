const Wish = require("../models/home");

exports.gethome=(req,res,next)=>
{
    res.render('home',{pageTitle:'Happiest Birthday Kalla'});
}
exports.getwishes=(req,res,next)=>
{
    Wish.fetchall(wishes=>
    {
            console.log(wishes);
             res.render('wishes',{pageTitle:'Sweet Wishes for Kalla',wishes:wishes});
    }
    )
   
}
exports.sendwish=(req,res,next)=>
{
res.render('getwish',{pageTitle:'Send Your Wishes to Kalla'});
}
exports.postwish=(req,res,next)=>
{
    const {name,wish}=req.body;
    const obj= new Wish(name,wish);
    obj.save();
   


    res.redirect('/');

}