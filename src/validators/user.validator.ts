import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/w{4, }/).required().messages({
        "string.pattern.basse":"Only chars allowd"
    }),
    password: Joi.string().required().min(3).max(6).required().messages({
        "string.min":"password can be at least 3 chars",
        "string.max":"password cannot be gt 6 chars"
    }),
    age: Joi.number().min(1).max(117).required().messages({
        "number.min":"age can be at least 1 year",
        "number.max":"age cannot be gt 117 years"
    })
})

export {
    userValidator
}