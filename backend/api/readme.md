# API Documentation

This README provides documentation for the API endpoints of autorecord.

## Table of Contents
1. [Save Project](#save-project)
2. [Download Project](#download-project)
3. [Clean Temporary Files](#clean-temporary-files)
4. [Load Project](#load-project)
5. [Delete Project](#delete-project)
6. [List Projects](#list-projects)
7. [Health Check](#health-check)

## Save Project

**Endpoint:** `/api/save`
**Method:** POST
**Description:** Saves a project with JSON data and images.

**Request:**
- Form data:
  - `json_data`: JSON string containing project details
  - `images`: List of image files

**Response:**
- Success: "OK"
- Error: Error message

## Download Project

**Endpoint:** `/api/download/<code>`
**Method:** GET
**Description:** Downloads a project as a ZIP file.

**Parameters:**
- `code`: Project code

**Response:**
- Success: ZIP file
- Error: Error message or "Project not found"

## Clean Temporary Files

**Endpoint:** `/api/clean`
**Method:** DELETE
**Description:** Cleans temporary files.

**Response:**
- Success: "OK"
- Error: Error message

## Load Project

**Endpoint:** `/api/load/<code>`
**Method:** GET
**Description:** Loads a project's JSON data and images.

**Parameters:**
- `code`: Project code

**Response:**
- Success: JSON object containing:
  - `json_data`: Project data
  - `images`: List of base64-encoded images
- Error: Error message

## Delete Project

**Endpoint:** `/api/delete/<code>`
**Method:** DELETE
**Description:** Deletes a project.

**Parameters:**
- `code`: Project code

**Response:**
- Success: "OK"
- Error: Error message

## List Projects

**Endpoint:** `/api/list`
**Method:** GET
**Description:** Lists all projects.

**Response:**
- Success: JSON array of project codes
- Error: Error message

## Health Check

**Endpoint:** `/api/health`
**Method:** GET
**Description:** Checks if the API is running.

**Response:**
- "OK"

## Notes for Beginners

- All endpoints are prefixed with `/api/`
- Replace `<code>` in URLs with the actual project code
- For POST requests, ensure you're sending the correct form data
- Handle errors by checking if the response is an error message

For more detailed information about request and response formats, please refer to the API implementation or contact the development team.