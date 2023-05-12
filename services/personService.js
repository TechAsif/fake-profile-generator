const faker = require('faker');
const AvatarGenerator = require('random-avatar-generator')
function generatePerson(selectedProperties){
    const person = {};
    
    selectedProperties.forEach(property => {

        person[property] = generatePropertyValue(property);
    });

    return person;
}

function generatePropertyValue(property) {
    const randomNumber = Math.floor(Math.random() * 5);
    const images = [
        "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png",
        "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png",
        "https://images.pexels.com/photos/2290856/pexels-photo-2290856.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8487251/pexels-photo-8487251.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8489309/pexels-photo-8489309.jpeg?auto=compress&cs=tinysrgb&w=800",
    ]
    switch (property) {
      case 'firstName':
        return faker.name.firstName();
      case 'lastName':
        return faker.name.lastName();
      case 'email':
        return faker.internet.email();
      case 'age':
        return faker.random.number({ min: 18, max: 80 });
      case 'address':
        return faker.address.streetAddress();
      case 'avetar':
        return images[randomNumber];
      default:
        return null;
    }
  }

  module.exports = {generatePerson}