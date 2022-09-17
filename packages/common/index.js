const uuid = require('uuid');
const uuidv4 = require('uuidv4');

module.exports = {
  print: () => {
    console.log(`This is common print. ${uuid.v4()}`);
  },
  print2: () => {
    console.log(`This is common print2. ${uuidv4.uuid()}`)
  }
}
// print();

// module.exports = 'a'
