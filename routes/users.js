const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User List');
});

router
.route('/:id').get( (req, res) => {
    console.log(req.user);
    res.send(`Get user with id ${req.params.id}`)
}).put((req, res) => {
    res.send(`Update user with id ${req.params.id}`)
})
.delete((req,res)=>{
    
    res.send(`Delete user with id ${req.params.id}`)
})
  const users = [{name:"Kyle"},{name:"sally"}]
router.param("id",(req,res,next,id)=>{
    
    req.user =users[id];

    console.log(id);
    next()
})


module.exports = router;
