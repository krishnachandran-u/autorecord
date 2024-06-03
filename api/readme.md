# API Documentation

## Save Project

**Endpoint:** `/api/save`
**Method:** POST

Saves a project with the provided data and images.

### Request Body

- `code` (string): The code of the project.
- `images` (array of files): The images associated with the project.

### Response

- `OK` (string): The project was saved successfully.
- Error message (string): An error occurred while saving the project.

## Load Project

**Endpoint:** `/api/load/<code>`
**Method:** GET

Loads a project with the specified code.

### Path Parameters

- `code` (string): The code of the project to load.

### Response

- JSON object: The loaded project data, including content and images.
- Error message (string): An error occurred while loading the project.

## Delete Project

**Endpoint:** `/api/delete/<code>`
**Method:** DELETE

Deletes a project with the specified code.

### Path Parameters

- `code` (string): The code of the project to delete.

### Response

- `OK` (string): The project was deleted successfully.
- Error message (string): An error occurred while deleting the project.

## List Projects

**Endpoint:** `/api/list`
**Method:** GET

Lists all the saved projects.

### Response

- JSON array: The list of saved projects.
- Error message (string): An error occurred while listing the projects.

## Health Check

**Endpoint:** `/api/health`
**Method:** GET

Checks the health of the API.

### Response

- `OK` (string): The API is healthy.
