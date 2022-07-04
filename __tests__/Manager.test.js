const Manager = require('../lib/Manager'); 
const Employee = require('../lib/Employee'); 
const manager = new Manager('John', '554895','awesomeGuy@hotmail.com', '952-555-5555');

test('tests if the constructor values from the manager object are passed', () => {
  expect(manager.name).toBe('John');
  expect(manager.id).toBe('554895');
  expect(manager.email).toBe('awesomeGuy@hotmail.com'); 
  expect(manager.officeNumber).toBe('952-555-5555');
})
test('test if the getName method returns name', () => {
  expect(manager.getName()).toBe('John');
})

test('test if getID method returns correct ID', () => {
  expect(manager.getId()).toBe('554895'); 
})

test('test if getEmail method returns correct email', () => {
  expect(manager.getEmail()).toBe('awesomeGuy@hotmail.com');
})

test('test if the getOfficeNumber method returns the officeNumber', () => {
  expect(manager.getOfficeNumber()).toBe('952-555-5555');
})

test('test if getRole method returns correct role', () => {
  expect(manager.getRole()).toBe('Manager');
})

