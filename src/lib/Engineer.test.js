const Engineer = require("./Engineer");

describe("Engineer", () => {
  const name = "Bob Smith";
  const id = "123456";
  const email = "yourname@gmail.com";
  const github = "bob_smith";
  const test = { name, id, email, github };

  const engineer = new Engineer(test);

  it("Should pass the testName value", () => {
    expect(engineer.getName()).toEqual(name);
  });
  it("Should return the testID value", () => {
    expect(engineer.getId()).toEqual(id);
  });
  it("Should return the testEmail value", () => {
    expect(engineer.getEmail()).toEqual(email);
  });
  it("Should return the testgithub value", () => {
    expect(engineer.getGithub()).toEqual(github);
  });
  it("Should return the Engineer for getRole method", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
