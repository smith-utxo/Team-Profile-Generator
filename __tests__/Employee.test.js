const Employee = require('../lib/Employee.js');
const employee = new Employee('Adam', '554627','awesomeGuy@hotmail.com');

test('test for values from employee object', () => {
  expect(employee.name).toBe('Adam'); 
  expect(employee.id).toBe('554627');
  expect(employee.email).toBe('awesomeGuy@hotmail.com');
})

test('test if the getName method returns name', () => {
  expect(employee.getName()).toBe('Adam');
})

test('test if getID method returns correct ID', () => {
  expect(employee.getId()).toBe('554627'); 
})

test('test if getEmail method returns correct email', () => {
  expect(employee.getEmail()).toBe('awesomeGuy@hotmail.com');
})

test('test if getRole method returns correct role', () => {
  expect(employee.getRole()).toBe('Employee');
})
