const Batch = require('../models/batch');

module.exports.create = function(req, res) {
    Batch.findOne({batch_id : req.body.batch_id}, (err, batch) =>{
        if(err) {console.log('Error in creating batch: ', err); return;}
        if(!batch){
            Batch.create(req.body, (err, batch) => {
                if(err) {console.log('Error after creating the batch: ', err); return;}
                return res.status(200).json({
                    message: 'The batch has been successfully created.',
                    batch_details: batch
                })
            })
        }else{
            return res.status(427).json({
                message: 'The Batch already exists, please try with a different ID.'
            });
        }
    });
};

module.exports.listAll = async function(req, res) {
    let batches = await Batch.find({});
    return res.status(200).json({
        message: 'List of all the batches',
        batches
    });
};

module.exports.update = async function(req, res) {
    let id = req.params.id;
    let no_of_students = req.query.nos;
    let current_status = req.query.status;
    let update = await Batch.findOneAndUpdate({batch_id: id}, {current_status, no_of_students}, {new: true});
    return res.status(200).json({
        message: 'The batch details have been updated', 
        update
    });
};