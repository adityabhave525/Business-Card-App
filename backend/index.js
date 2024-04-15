const express = require('express');
const cors = require('cors');

const zod = require('zod');
const { createCard, updateCard } = require('./types');
const { card } = require('./db');

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/cards', async (req,res) => {
    const response = await card.find()
    res.json({
        response
    })
})

app.post('/card', async(req,res) => {
    const createCardPayload = req.body
    const parsedCardPayload = createCard.safeParse(createCardPayload)
    if(!parsedCardPayload.success){
        res.status(411).json({
            msg: "Wrong inputs, try again!"
        })
        return 

    }

    //enter data in mongodb
    await card.create({
        name: createCardPayload.name,
        info: createCardPayload.info,
        interest: {
            interest1: createCardPayload.interest["interest1"],
            interest2: createCardPayload.interest["interest2"],
            interest3: createCardPayload.interest["interest3"],
        },
        linkedin: createCardPayload.linkedin,
        twitter: createCardPayload.twitter
    })
    res.json({
        msg: "Card created!"
    })
})

app.put('/data', async (req,res) => {
    // const updateCardPayload = req.body
    // const parsedCardPayload = updateCard.safeParse(updateCardPayload)
    // if(!parsedCardPayload.success){
    //     res.status(411).json({
    //         msg: "Wrong inputs try again "
    //     })
    // }

    // await card.updateOne({
    //     _id: req.body.id
    // })
})

app.delete('/deleteCard', async (req,res) => {
    const deleteCardPayload = req.body
    const parsedCardPayload = updateCard.safeParse(deleteCardPayload)
    if(!parsedCardPayload.success){
        res.status(411).json({
            msg: "Try again some error occured"
        })
        return
    }

    await card.deleteOne({
        _id: req.body.id
    })
    res.json({
        msg: "Card Deleted Successfully"
    })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})