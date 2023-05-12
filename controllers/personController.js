const {generatePerson} = require('../services/personService');

exports.generatePersonProfile = (req, res) => {
    const {properties} = req.query;
    const selectedProperties = properties.split(',');

    const person = generatePerson(selectedProperties);

    res.status(200).json(person);
}