const express = require('express');
const router = express.Router();
const Deal = require('../db/dealModel')

router.get("/:id", async (req, res) => {
    try{
        const deal = Deal.findById(req.params.id);
        res.json(deal);
    }
    catch(e)
    {
        res.status(400).json(e.message);
    }
})

router.patch("/:id", async (req,res) => {
 
    try{
       if(req.body.toggle)
       {
           console.log(req.user.id);

           const deal = await Deal.findById(req.params.id);
           for(let i = 0; i < deal.participants.length; i += 1)
           {
               if(deal.participants[i].userID._id.equals(req.user.id))
               {
                   deal.participants[i].ready = !deal.participants[i].ready;
                   break;
               }
           }

           await deal.save();
           res.json(deal);
       } 
    }
    catch(e)
    {
        res.status(400).json(e.message);
    }

})

router.post("/", async (req, res) => {
    const { dealOne, dealTwo } = req.body;
    const deal = new Deal({ participants: [dealOne, dealTwo] });
    await deal.save();

    res.json(deal);
  });
  

module.exports = router
