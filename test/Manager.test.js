const { it } = require("@jest/globals");
const Manager = require("../lib/Manager");


it("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Dave", 1, "test@test.com", testValue);
  expect(e.phone).toBe(testValue);
});

it('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

it("Can get office number via getOffice()", () => {
  const testValue = "555-555-5555";
  const e = new Manager("Mark", 1, "momot@iastate.edu", "555-555-5555", testValue);
  expect(e.getPhone()).toBe(testValue);
});
