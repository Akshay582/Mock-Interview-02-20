const Interview = require('../models/interview');

// all this using the object id

module.exports.create = function(req, res) {
    Interview.findOne({_id: req.body.id}, (err, interview) => {
        if(err) {console.log('Error in creating interview: ', err); return;}
        if(!interview){
            Interview.create(req.body, (err, interview) => {
                if(err) {console.log('Error after creating interview: ', err); return;}
                return res.status(200).json({
                    message: 'Interview created successfully',
                    interview_details: interview
                })
            })
        }else{
            return res.status(457).json({
                message: 'The interview already exists, please try with different id and valid credentials.'
            })
        }
    })
}

module.exports.listAll = async function(req, res) {
    let interviews = await Interview.find({});
    return res.status(200).json({
        message: 'list of all the interviews',
        interviews
    })
};

module.exports.delete = function(req, res){
    let id = req.params.id;
    Result.remove({_id: id}, (err, result)=>{
        if(err){console.log(`Error in removing the result with id ${id}`); return;}
        res.status(200).json({
            message: 'Result data deleted.'
        })
    })
};