const Result = require('../models/result');

// all this using the object id

module.exports.create = function(req, res) {
    Result.findOne({_id: req.body.id}, (err, result) => {
        if(err) {console.log('Error in creating result: ', err); return;}
        if(!result){
            Result.create(req.body, (err, result) => {
                if(err) {console.log('Error after creating result: ', err); return;}
                return res.status(200).json({
                    message: 'Result created successfully',
                    result_details: result
                })
            })
        }else{
            return res.status(457).json({
                message: 'The result already exists, please try with different id and valid credentials.'
            })
        }
    })
}

module.exports.listAll = async function(req, res) {
    let results = await Result.find({});
    return res.status(200).json({
        message: 'list of all the results',
        results
    })
};

module.exports.delete = function(req, res){
    let id = req.params.id;
    Result.remove({_id: id}, (err, result)=>{
        if(err){console.log(`Error in removing the result with id ${id}`); return;}
        res.status(200).json({
            message: 'result data deleted.'
        })
    })
};