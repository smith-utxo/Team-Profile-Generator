const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern')
const intern = new Intern('Rebecca', '568992', 'Rebecca.Smith@yahoo.com','Carelton');

test('test for values from intern object', () => {
  expect(intern.name).toBe('Rebecca'); 
  expect(intern.id).toBe('568992');
  expect(intern.email).toBe('Rebecca.Smith@yahoo.com');
  expect(intern.school).toBe('Carelton');
})

test('test if the getName method returns name', () => {
  expect(intern.getName()).toBe('Rebecca');
})

test('test if getID method returns correct ID', () => {
  expect(intern.getId()).toBe('568992'); 
})

test('test if getEmail method returns correct email', () => {
  expect(intern.getEmail()).toBe('Rebecca.Smith@yahoo.com');
})

test('test if getRole method returns correct role', () => {
  expect(intern.getRole()).toBe('Intern');
})

test('test if getSchool() method returns school', () => {
  expect(intern.getSchool()).toBe('Carelton');
})
