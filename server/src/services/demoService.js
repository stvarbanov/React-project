const Demo = require('../models/Demo.js');
//TODO rename demo

exports.create = (demoData) => Demo.create(demoData);

exports.updateOne = (demoId, demoData) => Demo.findByIdAndUpdate(demoId, demoData);

exports.delete = (demoId) => Demo.findByIdAndDelete(demoId);

exports.getOne = (demoId) => Demo.findById(demoId);

exports.getAll = () => Demo.find().lean();
