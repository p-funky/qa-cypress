export class TodoPage {
  navigate() {
    cy.visit('http://todomvc-app-for-testing.surge.sh');
  }

  addTodo(todoText, getOptions = {}) {
    cy.get('.new-todo', getOptions).type(`${todoText}{enter}`); 
  }

  validateTodoText(todoIndex, expectedText) {
    cy.get(`:nth-child(${todoIndex + 1}) > .view > label`).should('have.text', expectedText);
  }

  validateToggleState(todoIndex, shouldBeToggled) {
    const label = cy.get(`:nth-child(${todoIndex + 1}) label`);

    label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`);
  }

  toggleTodo(todoIndex) {
    cy.get(`:nth-child(${todoIndex + 1})  > .view > .toggle`).click();
  }

  validateTodoCompletedState(todoIndex, shouldBeCompleted) {
    const label = cy.get(`:nth-child(${todoIndex + 1}) > .view > label`);

    label.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through');
  }

  clearCompleted() {
    cy.contains('Clear completed').click();
  }

  validateNumberOfTodosShown(expectedNumberOfTodos) {
    cy.get('.todo-list li').should('have.length', expectedNumberOfTodos);
  }

  showOnlyCompletedTodos() {
    cy.contains('Completed').click();
  }

  showOnlyActiveTodos() {
    cy.contains('Active').click();
  }

  showAllTodos() {
    cy.contains('All').click();
  }
}