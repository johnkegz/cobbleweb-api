
# How to Run the Application

1. Clone the repo.
2. Navigate to the project folder.
3. Install dependencies by running in both front-end and api projects:
4. Provide the necessary environment variables by copying the example environment file(For backend):
5. Start the application in development mode:

# Postman Collection

[Link to Postman Collection](https://www.postman.com/dark-trinity-914469/workspace/cobbleweb-api
)

# Summary

## Backend(api)

- **MVC Architecture:** I structured the application using the MVC architectural pattern. This separation of concerns allowed for a clear distinction between the Model (representing the data and business logic), View (handling responses to clients), and Controller (managing request handling and orchestrating actions).

- **Modules:** Nest.js encourages modularization of code, and I utilized modules to group related components, such as controllers, services, and providers, together. This modular approach ensures better organization and maintainability of the codebase.

- **Services:** Services played a vital role in encapsulating business logic and data access. They were injected into controllers and other services to perform specific tasks, promoting code reusability and testability.

- **Swagger Documentation:** To facilitate API documentation, I integrated Swagger. This tool allowed for the automatic generation of detailed documentation for the API endpoints, making it easier for developers to understand and interact with the API.

- **DTOs (Data Transfer Objects):** I employed DTOs to define the structure of data exchanged between the client and the server. DTOs help in ensuring data consistency and reducing over-fetching or under-fetching of data.

- **Class Validators:** Class validators were used for performing various data validations. These validators helped ensure that incoming data met specific criteria, enhancing the reliability and security of the application.


## Frontend(front-end)

# Next.js Application

## Overview

This Next.js application incorporates various technologies and concepts to create a robust and maintainable web application.

## Key Technologies and Concepts

- **React Form Hook:** We leverage the `react-hook-form` library for efficient form data management and validation.

- **Redux Toolkit:** Our state management is powered by Redux Toolkit, simplifying setup and reducing boilerplate code.

- **Component-Based Architecture:** We follow a component-based approach to organize related components into directories, enhancing code organization, maintainability, and reusability.

- **Pages for Routing:** Utilizing Next.js pages, we implement client-side routing to create distinct views for different routes within the application.



