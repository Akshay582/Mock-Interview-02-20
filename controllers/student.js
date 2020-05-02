const Student = require('../models/student');

module.exports.create = function(req, res) {
    Student.findOne({student_id: req.body.student_id}, (err, student) => {
        if(err) {console.log('Error in creating student: ', err); return;}
        if(!student){
            Student.create(req.body, (err, student) => {
                if(err) {console.log('Error after creating student: ', err); return;}
                return res.status(200).json({
                    message: 'Student created successfully',
                    student_details: student
                })
            })
        }else{
            return res.status(457).json({
                message: 'The student already exists, please try with different id and valid credentials.'
            })
        }
    })
}

module.exports.listAll = async function(req, res) {
    let students = await Student.find({});
    return res.status(200).json({
        message: 'list of all the students',
        students
    })
};

module.exports.update = async function (req, res) {
    let id = req.params.id;
    let phone = req.query.phone;
    let status = req.query.status;
    let update = await Student.findOneAndUpdate({student_id: id}, {phone, status}, {new: true});
    return res.status(200).json({
        message: 'The student data has been updated successfully.',
        update
    })
};

module.exports.delete = function(req, res){
    let id = req.params.id;
    Student.remove({student_id: id}, (err, student)=>{
        if(err){console.log(`Error in removing the student with id ${id}`); return;}
        res.status(200).json({
            message: 'Student data deleted.'
        })
    })
};