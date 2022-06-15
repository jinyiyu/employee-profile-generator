const Intern = require("./Intern");

describe("Intern", () => {
  const name = "Bob Smith";
  const id = "123456";
  const email = "yourname@gmail.com";
  const school = "University of Birmingham";
  const test = { name, id, email, school };

  const intern = new Intern(test);

  it("Should pass the testName value", () => {
    expect(intern.getName()).toEqual(name);
  });
  it("Should return the testID value", () => {
    expect(intern.getId()).toEqual(id);
  });
  it("Should return the testEmail value", () => {
    expect(intern.getEmail()).toEqual(email);
  });
  it("Should return the testschool value", () => {
    expect(intern.getSchool()).toEqual(school);
  });
  it("Should return the intern for getRole method", () => {
    expect(intern.getRole()).toEqual("Intern");
  });
});
