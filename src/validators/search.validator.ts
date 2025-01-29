import Joi from "joi";

const searchValidator = Joi.object({
    password: Joi.string().required().min(1)
})

export {
    searchValidator
}