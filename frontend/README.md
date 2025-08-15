# Full-Stack Portfolio Website

This repository contains the code for a full-stack portfolio website built with React.js for the frontend and Spring Boot for the backend.

## Folder Structure

- `frontend/`: Contains the React.js application.
- `backend/`: Contains the Spring Boot API.

## Prerequisites

- Node.js and npm
- Java 11 or higher
- Maven

## Running the Backend (Spring Boot)

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2.  Build the project using Maven:
    ```bash
    mvn clean install
    ```

3.  Run the application:
    ```bash
    mvn spring-boot:run
    ```

The backend server will start on `http://localhost:8080`. The `/contact` endpoint will be available for POST requests.

## Running the Frontend (React.js)

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm start
    ```

The frontend application will open in your browser at `http://localhost:3000`.

## How It Works

-   The **frontend** is a single-page application built with React that features several pages to showcase professional information.
-   The **Contact** page has a form that sends the user's name, email, and message to the backend.
-   The **backend** is a simple Spring Boot API with a single endpoint (`/contact`) that receives the data from the contact form and logs it to the console.
-   **CORS** is enabled on the backend to allow requests from the frontend domain (`http://localhost:3000`).