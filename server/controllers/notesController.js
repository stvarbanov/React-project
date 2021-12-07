const router = require('express').Router();

const notesService = require('../services/notesService');

router.post('/create/:userId/:title', (req, res) => {


    notesService.createNote(req.params.title, req.params.userId)
        .then(data => {
            res.status(201).json({ message: 'Successfully created note!', noteId: data._id });
        })
        .catch(err => console.log(err));
});


router.get('/to-do', (req, res) => {
    notesService.getAllToDos()
    .then(data => {
        res.status(201).json();
    })
    .catch(err => console.log(err));


});
router.get('/in-progress', (req, res) => {

});
router.get('/done', (req, res) => {

});


module.exports = router;