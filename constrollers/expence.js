const path = require('path');

const Expence = require('../modules/expences')

exports.getExpences = ((req,res,next)=>{
  Expence.findAll()
  .then(expence=>{
    res.send(expence)
  })
});

exports.postExpence = ((req,res,next)=>{
    const expence = req.query.expence;
    const descrip = req.query.descrip;
    const category = req.query.category;
    const edit = req.query.edit;
    const id = req.query.id;
    console.log(id);
    if(!edit){
      Expence.create({
        expense:expence,
        description:descrip,
        category:category
  
      })
      .then(result=>{
        res.redirect('/home')
      })
    }else{
      Expence.findAll({where:{id:id}})
      .then(response=>{
        response[0].expense = expence;
        response[0].description = descrip;
        response[0].category = category;
        response[0].save();

      }).then(res.redirect('/home'))
    }
    
    
});

exports.editExpence = ((req,res,next)=>{
  const id = req.params.id;
  Expence.findAll({where:{id:id}})
  .then(expence=>{
    res.send(expence[0]);
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