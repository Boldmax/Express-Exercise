const express = require('express');
const router = express.Router()
const data = ['milk', 'chocolate', 'sugar']


router.get('/', async (req, res) => {
    console.log("router is up")
    try{
        const users = await data.slice()
        res.json(users)
     } catch (err){
        res.status(500).json({message:"err.message"})
     }

})

router.post('/', async (req, res) => {
    const grocery = req.body.name
    try{
        const users = await data.push(grocery)
        res.json(users)
     } catch (err){
        res.status(500).json({message:"err.message"})
     }
})

router.patch('/:user', async (req, res) => {
    try{
        const users = await data.splice(this.param)
        res.json(users)
     } catch (err){
        res.status(500).json({message:"err.message"})
     }

})

router.delete('/:item', async (req, res) => {
    const item = req.body.param
    try{
        const users = await data.pop()
        res.json(users)
     } catch (err){
        res.status(500).json({message:"err.message"})
     }
})

module.exports = router;