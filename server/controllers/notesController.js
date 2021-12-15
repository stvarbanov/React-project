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

router.get('/details/:noteId', async (req, res) => {
    await notesService.getNoteById(req.params.noteId)
        .then(data => {
            res.status(201).json({ data });
        })
        .catch(err => console.log(err));

});
router.get('/owner/:userId', async (req, res) => {
    await notesService.getNotesOfUser(req.params.userId)
        .then(data => {
            console.log(data);
            res.status(201).json({ notes: data });
        })
        .catch(err => console.log(err));

});



module.exports = router;