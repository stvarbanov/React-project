const Note = require('../models/Note.js');
//TODO rename demo

exports.create = (demoData) => Note.create(demoData);

exports.updateOne = (demoId, demoData) => Note.findByIdAndUpdate(demoId, demoData);

exports.delete = (demoId) => Note.findByIdAndDelete(demoId);

exports.getOne = (demoId) => Note.findById(demoId);

exports.getAll = () => Note.find().lean();
