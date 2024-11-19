# Concepts

## Basic Concepts

### Workspace

A Vast workspace is a folder on your machine that stores all the code necessary to run your APIs. It organizes your files into a cohesive structure, allowing you to build and manage applications and libraries efficiently.

### Apps

An app (or application) is the part of your workspace that gets deployed. Workspaces can contain multiple apps, but it is common for a workspace to only contain a single app. Once deployed, each app typically has its own domain name and serves a specific purpose.

For example, in an Ecommerce project, you might deploy two separate apps: one for the customer-facing storefront and another for admin-related tasks. Apps can share common [libraries](#libraries) to reduce duplication and promote code reuse.

### Libraries

Libraries are reusable modules that can be shared across apps in your workspace. They allow you to extract common functionality, such as utilities or shared business logic, into a centralized location. Libraries help you maintain a clean and modular architecture, making your code easier to manage and test.

For example, a library might include functions for handling payments, user authentication, or data validation.

## Resources

### Controllers

Controllers are groupings of related routes that handle specific parts of your application's functionality. They organize and manage incoming requests, determining how they should be processed and what responses should be sent back to the client.

For instance, in an Ecommerce app, a `products` controller might group all the routes related to product management, such as creating, updating, or deleting products.

### Routes

Routes are the individual endpoints within a controller. Each route specifies how a specific type of request (e.g., GET, POST, PUT, DELETE) is handled. They define the paths and parameters clients can use to interact with your API.

For example, a route in the `products` controller might handle a `POST /products` request to add a new product. Routes in Vast follow RESTful principles and can include path parameters, query parameters, and request bodies as needed.

### Schemas

Schemas define the structure and validation rules for the data used in your application. They ensure that incoming data meets the required specifications, providing a consistent and reliable way to manage information.

For example, a schema for creating a product might define required fields such as `name`, `price`, and `category`. This ensures that only valid data is processed, reducing errors and simplifying communication between different parts of your application.
