const getGreeting = require("./project");

test("can create a basic greeting", () => {
  expect(getGreeting("Sam")).toBe("Hi Sam");
});

test("can create a basic greeting 2", () => {
  expect(getGreeting("Mitch")).toBe("Hi Mitch");
});
