const express = require('express');
const router = express.Router();
const User = require('../db/user');
const {Room} = require('../db/roomModel');
const ChatHistory = require('../db/chatHistoryModel');
const user = require('../db/user');
module.exports = router;
const mongoose = require('mongoose');


//ID room and name of other guy

router.post('/', async (req, res) => {

    try{

        console.log(req.body.userID);
        const room = await Room.create({roomID: `${req.body.userID}${req.user.id}`});
        
        // const res = await Promise.allSettled([User.findById(req.body.userID), User.findById(req.user.id)]);

        const user1 = await User.findById(req.body.userID);
        const user2 = await User.findById(req.user.id);

        if(!user1.chatHistory)
        {
            user1.chatHistory = new ChatHistory();
        }

        if(!user2.chatHistory)
        {
            user2.chatHistory = new ChatHistory(); 
        }

        user1.chatHistory.rooms.push(mongoose.Types.ObjectId(room._id));
        user2.chatHistory.rooms.push(mongoose.Types.ObjectId(room._id));

        await user1.chatHistory.save();
        await user2.chatHistory.save();

        await user1.save();
        await user2.save();
        // res.forEach(user => {
        //     if(!user.chatHistory)
        //     {
        //         user.chatHistory = new ChatHistory();
        //     }
        //     user.chatHistory.rooms.push(room);
        // })

        // console.log(res);

        // await Promise.all(res.map(user => user.save()));

        res.json();
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json(); 
    }
});

router.get('/userChats', async (req, res) => {

    try {
        const user = await User.findById(req.user.id).populate(
            {
                path: 'chatHistory',
                populate:
                {
                    path: 'rooms',
                },
            });
            
            console.log(user);
        const chatsWithIds = user.chatHistory.rooms.map( room => {
            return { roomID: room.roomID, chatWith: room.roomID.replace(req.user.id,'')} 
        });

        let chatNames = [];

        for(let i = 0; i < chatsWithIds.length; i += 1)
        {
            const user = await User.findById(chatsWithIds[i].chatWith);

            chatNames.push({roomID: chatsWithIds[i].roomID, name: user.name});
        }
            
        console.log(chatNames);

        res.json(chatNames);
    }
    catch (err) {
        res.status(401).json();
    }
})
;
