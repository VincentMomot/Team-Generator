const { it } = require("@jest/globals");
const Employee = require("../lib/Employee");

it("Can instantiate Employee instance", () => {
  const employee= new Employee();
  expect(typeof(employee)).toBe("object");
});

it("Can set name via constructor arguments", () => {
  const name = "Vince";
  const employee= new Employee(name);
  expect(employee.name).toBe(name);
});

it("Can set id via constructor argument", () => {
  const testValue = 1;
  const employee= new Employee("Vince", testValue);
  expect(employee.id).toBe(testValue);
});

it("Can set email via constructor argument", () => {
  const testValue = "vincemomot@gmial.com";
  const employee= new Employee("Vince", 1, testValue);
  expect(employee.email).toBe(testValue);
});

it("Can get name via getName()", () => {
  const testValue = "Tom";
  const employee= new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

it("Can get id via getId()", () => {
  const testValue = 2;
  const employee= new Employee("2", testValue);
  expect(employee.getId()).toBe(testValue);
});

it("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const employee= new Employee("vincemomot@gmail.com", 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});

it("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const employee= new Employee("Tony", 1, "test@test.com");
  expect(employee.getRole()).toBe(testValue);
});
