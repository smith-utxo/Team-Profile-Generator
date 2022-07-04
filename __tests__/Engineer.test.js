const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer'); 
const engineer = new Engineer('Satoshi', '567334', 'satoshi.nakamoto@gmail.com', 'satoshi-utxo'); 


test('test for values from employee object', () => {
  expect(engineer.name).toBe('Satoshi'); 
  expect(engineer.id).toBe('567334');
  expect(engineer.email).toBe('satoshi.nakamoto@gmail.com');
  expect(engineer.github).toBe('satoshi-utxo');
})

test('test if we can get the name from the getName() method', () => {
  expect(engineer.name).toBe('Satoshi');
})

test('test if getID method returns correct ID', () => {
  expect(engineer.getId()).toBe('567334'); 
})

test('test if getEmail method returns correct email', () => {
  expect(engineer.getEmail()).toBe('satoshi.nakamoto@gmail.com');
})

test('test if getRole method returns correct role', () => {
  expect(engineer.getRole()).toBe('Engineer');
})