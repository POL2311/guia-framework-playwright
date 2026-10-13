@todo
Feature: todo management
    As a user
    I want to register and complete pending Task

    @smoke
    Scenario: Add a new Task
        Given I am on the Todo application
        When I add the task "Learn Playwright BDD"
        Then I should see the task "Learn Playwright BDD" 

    @smoke
    Scenario Outline: Add tasks with different names
        Given I am on the Todo application
        When I add the task "<name>"
        Then I should see the task "<name>" 
    Examples:
        | name |
        | Learn TypeScript |
        | Review selectors |

    @smoke
    Scenario: Agregar dos tareas y verificar el total de filas
        Given I am on the Todo application
        When I add the task "Comprar pan"
        And I add the task "Estudiar Playwright"
        Then I should see 2 tasks in the list

    @regression
    Scenario: Complete a task
        Given I am on the Todo application
        When I add the task "Review report"
        And I complete the task "Review report"
        Then the task "Review report" should be completed