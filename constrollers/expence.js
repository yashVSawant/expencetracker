const path = require('path');

const Expence = require('../modules/expences')

exports.getExpences = ((req,res,next)=>{
  Expence.findAll()
  .then(expence=>{
    res.send(expence)
  })
});

exports.postExpence = ((req,res,next)=>{
    console.log(req.query)
    const expence = req.query.expence;
    const descrip = req.query.descrip;
    const category = req.query.category;

    Expence.create({
      expense:expence,
      description:descrip,
      category:category

    })
    .then(result=>{
      res.redirect('/home')
    })
    
});

exports.deleteExpence = ((req,res,next)=>{
  console.log(req.params.id)
  const id = req.params.id;
  Expence.findAll({where:{id:id}})
  .then(expence=>{
    expence[0].destroy()
    res.redirect('/home')
  })
  
});