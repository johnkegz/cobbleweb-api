
# How to Run the Application

1. Clone the repo.
2. Navigate to the project folder.
3. Install dependencies by running:
4. Provide the necessary environment variables by copying the example environment file:
5. Start the application in development mode:

# Postman Collection

[Link to Postman Collection](https://www.postman.com/dark-trinity-914469/workspace/cobbleweb-api
)

# Summary

- **MVC Architecture:** I structured the application using the MVC architectural pattern. This separation of concerns allowed for a clear distinction between the Model (representing the data and business logic), View (handling responses to clients), and Controller (managing request handling and orchestrating actions).

- **Modules:** Nest.js encourages modularization of code, and I utilized modules to group related components, such as controllers, services, and providers, together. This modular approach ensures better organization and maintainability of the codebase.

- **Services:** Services played a vital role in encapsulating business logic and data access. They were injected into controllers and other services to perform specific tasks, promoting code reusability and testability.

- **Swagger Documentation:** To facilitate API documentation, I integrated Swagger. This tool allowed for the automatic generation of detailed documentation for the API endpoints, making it easier for developers to understand and interact with the API.

- **DTOs (Data Transfer Objects):** I employed DTOs to define the structure of data exchanged between the client and the server. DTOs help in ensuring data consistency and reducing over-fetching or under-fetching of data.

- **Class Validators:** Class validators were used for performing various data validations. These validators helped ensure that incoming data met specific criteria, enhancing the reliability and security of the application.
