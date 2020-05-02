const Company = require('../models/company');

module.exports.create = function(req, res) {
    Company.findOne({company_name: req.body.company_name}, (err, company) => {
        if(err) {console.log('Error in creating company: ', err); return;}
        if(!company){
            Company.create(req.body, (err, company) => {
                if(err) {console.log('Error after creating company: ', err); return;}
                return res.status(200).json({
                    message: 'Company created successfully',
                    company_details: company
                })
            })
        }else{
            return res.status(457).json({
                message: 'The company already exists, please try with different id and valid credentials.'
            })
        }
    })
}

module.exports.listAll = async function(req, res) {
    let companies = await Company.find({});
    return res.status(200).json({
        message: 'list of all the companies',
        companies
    })
};

module.exports.update = async function (req, res) {
    let name = req.params.name;
    let no_of_students_recruited = req.query.no_of_students_recruited;
    let job_designations = req.query.job_designations;
    let update = await Company.findOneAndUpdate({company_name: name}, {no_of_students_recruited, job_designations}, {new: true});
    return res.status(200).json({
        message: 'The student data has been updated successfully.',
        update
    })
};

module.exports.delete = function(req, res){
    let name = req.params.name;
    Company.remove({company_name: name}, (err, company)=>{
        if(err){console.log(`Error in removing the company with id ${id}`); return;}
        res.status(200).json({
            message: 'Company data deleted.'
        })
    })
};