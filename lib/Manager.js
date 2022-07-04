const Employee = require('./Employee'); 


class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // still need super keyword to reference parent constructor: 
  super(name, id, email);
  this.officeNumber = officeNumber; 
  }
  getOfficeNumber() {
    return this.officeNumber; 
  }
  getRole(){
    return "Manager";
  }
}

module.exports = Manager; 