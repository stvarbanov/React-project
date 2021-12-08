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
            res.status(201).json({ todos: data });
        })
        .catch(err => console.log(err));


});
router.get('/in-progress', (req, res) => {
    notesService.getInProgress()
        .then(data => {
            res.status(201).json({ inprogress: data });
        })
        .catch(err => console.log(err));

});
router.get('/done', (req, res) => {
    notesService.getAllDone()
    .then(data => {
        res.status(201).json({ done: data });
    })
    .catch(err => console.log(err));

});


module.exports = router;