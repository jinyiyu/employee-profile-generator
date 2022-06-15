const Employee = require("./Employee");

describe("Employee", () => {
  const name = "Bob Smith";
  const id = "123456";
  const email = "yourname@gmail.com";
  const test = { name, id, email };

  const employee = new Employee(test);

  it("Should pass the testName", () => {
    expect(employee.getName()).toEqual(name);
  });
  it("Should return the testID", () => {
    expect(employee.getId()).toEqual(id);
  });
  it("Should return the testEmail", () => {
    expect(employee.getEmail()).toEqual(email);
  });
});
