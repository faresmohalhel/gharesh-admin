const mongooes = require('mongoose');
const contactUsSchema = new mongooes.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    phone:{type: String, required: true},
    message:{type: String, required: true},
});
 
const Contact = mongooes.model('ContactUs',contactUsSchema);

module.exports = Contact;
