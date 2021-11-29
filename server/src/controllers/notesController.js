const router = require('express').Router();
const notesService = require('../services/notesService.js');

router.post('/create', async (req, res) => {

    //FIXME why empty
    const title = req.body;
    console.log(title);


    //TODO get current user here to set as owner
    // get current user color to set as color
    const noteData = {
        title,
        state: 'To do',
        color: '#1b460b',
        owner: '61a5416f4895c6e655a2157b'
    }


    try {
        // await notesService.create({ ...req.body, owner: req.user._id });
        await notesService.create(...noteData);

    } catch (error) {

    }

});

// function getErrFromMsg(error) {

//     let errorArray = Object.keys(error.errors);
//     if (errorArray.length > 0) {
//         return error.errors[errorArray[0]];
//     }
// };

// router.get(`/:_id/details`, async (req, res) => {

//     let demo = await notesService.getOne(req.params._id);
//     let demoData = await demo.toObject();

//     let isOwner = demoData.owner == req.user?._id;

//     // let tenants = demo.getTenants();
//     // let isAvailable = housing.availablePieces > 0;
//     // let rentedByYou = housing.tenants.some(demo => demo._id == req.user?._id);

//     res.render('demos/details', { ...demoData });

// });


// router.get('/:_id/delete', isAuthRouteGuard, async (req, res) => {
//     let demo = await notesService.getOne(req.params._id);
//     let demoData = await housing.toObject();
//     //check if isOwner - only owners can delete

//     let isOwner = demoData.owner == req.user?._id;
//     if (isOwner) {
//         await notesService.delete(req.params._id);

//         res.redirect('/demo');
//     } else {
//         res.redirect(`/demo/${req.params.housingId}/details`);
//     }
// });

// router.get('/:_id/edit', isAuthRouteGuard, async (req, res) => {

//     let demo = await notesService.getOne(req.params._id);
//     let demoData = await housing.toObject();
//     //check if isOwner - only owners can delete

//     let isOwner = demoData.owner == req.user?._id;
//     if (isOwner) {

//         res.render('demo/edit', { ...housing.toObject() });

//     } else {
//         res.redirect(`/demo/${req.params.housingId}/details`);
//     }
// });

// router.post('/:_id/edit', isAuthRouteGuard, async (req, res) => {


//     await notesService.updateOne(req.params._id, req.body)

//     res.redirect(`/demo/${req.params._id}/details`);

// });



// router.get('/:_id/rent', isAuthRouteGuard, async (req, res) => {

//     let demo = await notesService.getOne(req.params._id);
//     let demoData = await demo.toObject();
//     //check if notOwner - owners can rent his own housing
//     let isOwner = housingData.owner == req.user?._id;
//     if (!isOwner) {
//         // await housingService.addTenant(req.params.housingId, req.user._id);
//         res.redirect(`/demo/${req.params._id}/details`);
//     } else {
//         res.redirect(`/demo/${req.params._id}/details`);
//     }
// });


module.exports = router;