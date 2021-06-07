const express = require('express');
const router = express.Router();
const User = require('../db/user');

module.exports = router;


//ID room and name of other guy

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

        const chatsWithIds = user.chatHistory.rooms.map( room => {
            return { roomID: room.roomID, chatWith: room.roomID.replace(req.user.id,'')} 
        });

        let chatNames = [];

        for(let i = 0; i < chatsWithIds.length; i += 1)
        {
            const user = await User.findById(chatsWithIds[i].chatWith);

            chatNames.push({roomID: chatsWithIds[i].roomID, name: user.name});
        }
            
        res.json(chatNames);
    }
    catch (err) {
        res.status(401).json();
    }
})
;
