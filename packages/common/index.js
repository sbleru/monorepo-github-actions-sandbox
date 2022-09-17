const uuid = require('uuid');

module.exports = {
  print: () => {
    console.log(`This is common. ${uuid.v4()}`);
  }
}
// print();

// module.exports = 'a'
