const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  constemployee= new Employee();
  expect(typeof(employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Vince";
  constemployee= new Employee(name);
  expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 1;
  constemployee= new Employee("Foo", testValue);
  expect(employee.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "vincemomot@gmial.com";
  constemployee= new Employee("Foo", 1, testValue);
  expect(employee.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Tom";
  constemployee= new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 2;
  constemployee= new Employee("Foo", testValue);
  expect(employee.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  constemployee= new Employee("Foo", 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  constemployee= new Employee("Alice", 1, "test@test.com");
  expect(employee.getRole()).toBe(testValue);
});
