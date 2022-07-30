const { Schema, model } = require("mongoose")

const userSchema = Schema({
	name: {
		type: String,
		maxLength: 50,
		required: true
	},
	email: {
		type: String,
		trim: true,
		unique: 1,
		required: true
	},
	password: {
		type: String,
		minLength: 5,
		required: true
	},
	lastname: {
		type: String,
		maxLength: 50,
		required: true
	},
	isAdmin: {
		type: Boolean,
		default: false,
		
	},
	
	image: String,
	
  })
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;
  