const joi = require('joi');

const validate = joi.object({
    name: joi.string().min(4).required(),
    //address: joi.string().required(),
})

module.exports ={
    validate
}