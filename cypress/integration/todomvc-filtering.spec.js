/// <reference types="cypress" />

// to run the test: npx cypress open

describe("todo filtering", () => {
  beforeEach(() => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");
    cy.get(".new-todo").type("Clean room {enter}");
    cy.get(".new-todo").type("Learn JavaScript {enter}");
    cy.get(".new-todo").type("Have rest{enter}");
    cy.get(".todo-list li:nth-child(2) .toggle").click();
  });
  it("should filter active todos", () => {
    cy.contains("Active").click();
    cy.get(".todo-list li").should("have.length", 2);
  });
  it("should filter completed todos", () => {
    cy.contains("Completed").click();
    cy.get(".todo-list li").should("have.length", 1);
  });
  it("should filter All todos", () => {
    cy.contains("All").click();
    cy.get(".todo-list li").should("have.length", 3);
  });
});
