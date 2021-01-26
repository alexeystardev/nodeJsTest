const Joi=require("joi");

const contactSchema = Joi.object({
	name: Joi.string().required().min(2).max(70),
	email: Joi.string().required().email(),
	phone: Joi.string().required().min(9),
	message: Joi.string().required().min(4).max(500),
	sendMessageButton: Joi.string().allow(null,"")
});

module.exports =contactSchema;