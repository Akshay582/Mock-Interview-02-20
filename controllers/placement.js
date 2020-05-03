const Interview = require('../models/interview');

module.exports.placement = function(req, res) {
    Interview.find({})
        .populate('student_id')
        .populate('company_id')
        .exec(function(err, interviews){
            if(err) return handleError(err);
            res.render('placement', {
                interviews: interviews
            })
        })
}