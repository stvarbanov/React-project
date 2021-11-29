const router = require('express').Router();
const demoService = require('../services/notesService.js');
const { isAuthRouteGuard } = require('../middleware/authMiddle.js');


router.get('/', async (req, res) => {
    //rename with ctrl+f2
    res.render('home');

});

// router.get('/create', isAuthRouteGuard, (req, res) => {

//     res.render('demo/create');

// });

// router.post('/create', isAuthRouteGuard, async (req, res) => {
//     //TODO Error example here
//     try {
//         await demoService.create({ ...req.body, owner: req.user._id });

//         res.redirect('/demo');
//     } catch (error) {
//         res.render('demo/create', { error: getErrFromMsg(error) });
//     }

// });

// function getErrFromMsg(error) {

//     let errorArray = Object.keys(error.errors);
//     if (errorArray.length > 0) {
//         return error.errors[errorArray[0]];
//     }
// };

// router.get(`/:_id/details`, async (req, res) => {

//     let demo = await demoService.getOne(req.params._id);
//     let demoData = await demo.toObject();

//     let isOwner = demoData.owner == req.user?._id;

//     // let tenants = demo.getTenants();
//     // let isAvailable = housing.availablePieces > 0;
//     // let rentedByYou = housing.tenants.some(demo => demo._id == req.user?._id);

//     res.render('demos/details', { ...demoData });

// });


// router.get('/:_id/delete', isAuthRouteGuard, async (req, res) => {
//     let demo = await demoService.getOne(req.params._id);
//     let demoData = await housing.toObject();
//     //check if isOwner - only owners can delete

//     let isOwner = demoData.owner == req.user?._id;
//     if (isOwner) {
//         await demoService.delete(req.params._id);

//         res.redirect('/demo');
//     } else {
//         res.redirect(`/demo/${req.params.housingId}/details`);
//     }
// });

// router.get('/:_id/edit', isAuthRouteGuard, async (req, res) => {

//     let demo = await demoService.getOne(req.params._id);
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


//     await demoService.updateOne(req.params._id, req.body)

//     res.redirect(`/demo/${req.params._id}/details`);

// });



// router.get('/:_id/rent', isAuthRouteGuard, async (req, res) => {

//     let demo = await demoService.getOne(req.params._id);
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