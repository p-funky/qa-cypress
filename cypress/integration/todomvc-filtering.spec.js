/// <reference types='cypress' />

import { TodoPage } from '../page-objects/todo-page';

describe('filtering', () => {
  const todoPage = new TodoPage();

  beforeEach(() => {
    todoPage.navigate();
    // just showing that options (e.g. timeout) can be added
    todoPage.addTodo('Clean room', {timeout: 6000});
    todoPage.addTodo('Do the dishes');
    todoPage.addTodo('Go to the gym');
    // mark "Do the dishes" as completed
    todoPage.toggleTodo(1);
  });

  it('should filter "Active" todos', () => {
    todoPage.showOnlyActiveTodos();
  
    todoPage.validateNumberOfTodosShown(2);
  });

  it('should filter "Completed" todos', () => {
    todoPage.showOnlyCompletedTodos();
  
    todoPage.validateNumberOfTodosShown(1);
  });

  it('should filter "All" todos', () => {
    todoPage.showAllTodos();
  
    todoPage.validateNumberOfTodosShown(3);
  });
});