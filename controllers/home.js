const Student = require('../models/student');

module.exports.home = function(req, res) {
    Student.find({})
        .populate()
        .exec(function (err, students) {
            if(err) return handleError(err);
            res.render('home', {
                students: students
            });
        })
}