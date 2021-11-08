const { it } = require("@jest/globals");
const Intern = require("../lib/Intern");

it("Can set school via constructor", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

it("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "ISU");
  expect(e.getRole()).toBe(testValue);
});

it("Can get school via getSchool()", () => {
  const testValue = "ISU";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
