const { it } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

it("Can set GitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Vince", 1, "vincemomot@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

it("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Vince", 1, "vincemomot@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

it("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Vince", 1, "vincemomot@gmail.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});
