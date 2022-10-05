# ANGULAR TEST


```
ng test
```

# Tools
- Jasmine
- Karma

# UNIT testing

> TO test a single unit (class, function ...)

>  ISOLATED TESTS
- Pipe
- Service
- Class
- Component
- Directives

We should <b>mock</b> our dependencies, otherwise it isn't isolation anymore.

We don't test the template with the component
but only the logic into the ts file


# Integration or Functional testing

> <span> This is defined as more than a unit but less than a complete application test</span><br>
So we check than whether one part of the application is working with another part.

We create a module that we are going to test

- WE have 2 types of integration test:
    - <b>Shallow Test</b>
    - <b>Deep Test</b>

> <b>Shallow Test:</b><br>
We only test a single component with his template<br>
<b>UserComponent => UserComponentTemplate</b>

> <b>Deep Test:</b><br>
We test many components actually having child components<br>
<b>ParentComponent => ChildComponent => UserService</b>

# E2E testing

> Live running application

> <b>FED => BED => DB</b>

<span>Tests are written to manipulate the Browser in an automated way to do things like clik buttons, type values in the forms, navigate to the page and so on ...</span>

> So we can validate that the hole app it's working properly

- > Drawback
    - Speed
    - Difficulty of writing tests

> So E2E testings are tend to be less reliable than other types of automated tests(unit or integration test).

# MOCKING

- Dummies: we create a dummies class, service, dependencies, Object ...
- Stubs: we create another class or Object that will that the control, the behavior
- Spies: To spy on methods


