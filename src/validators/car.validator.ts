import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).min(1).max(20).required().messages({
        "string.min":"The brand name must contain at least 1 char",
        "string.max":"The brand name should contain no more than 20 chars"
    }),
    year: Joi.number().required().min(1990).max(2024).required().messages({
        "number.min":"Year can be minimum 1990",
        "number.max":"Year cannot be gt 2024"
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        "number.min":"Price can be minimum 0",
        "number.max":"Price cannot be gt 1000000"
    })
})

export {
    carValidator
}