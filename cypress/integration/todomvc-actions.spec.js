/// <reference types='cypress' />

import { TodoPage } from '../page-objects/todo-page';

describe('todo actions', () => {
  const todoPage = new TodoPage();

  beforeEach(() => {
    todoPage.navigate();
    // just showing that options (e.g. timeout) can be added
    todoPage.addTodo('Clean room', {timeout: 6000});
    todoPage.addTodo('Do the dishes');
  });

  it('should be able to add new todos to the list', () => {
    todoPage.validateTodoText(0, 'Do the dishes');
    todoPage.validateTodoText(1, 'Clean room');
  });
  
  it('should mark todos as completed', () => {
    todoPage.validateToggleState(0, false);
    todoPage.validateToggleState(1, false);
    todoPage.toggleTodo(0);
    todoPage.toggleTodo(1);

    todoPage.validateTodoCompletedState(0, true);
    todoPage.validateTodoCompletedState(1, true);
  });
  
  it('should clear completed todos', () => {
    todoPage.toggleTodo(0);
    todoPage.toggleTodo(1);

    todoPage.clearCompleted();
  
    todoPage.validateNumberOfTodosShown(0);
  });
});