# School Management API

A set of RESTful APIs built with Node.js, Express.js, and MySQL to manage school data. The system allows users to add new schools and retrieve a list of schools sorted by proximity to a specified location.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Other Tools:** `mysql2` (Driver), `dotenv` (Environment Variables)

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prnjall/school-management-api.git
   cd school-management-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Database Setup:**
   - Execute the `schema.sql` file in your MySQL environment to create the `school_db` database and the `schools` table.

4. **Environment Variables:**
   - Create a `.env` file in the root directory and configure your database credentials:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=your_mysql_password
     DB_NAME=school_db
     PORT=3000
     ```

5. **Start the Server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

## API Endpoints

### 1. Add a School
- **Endpoint:** `/addSchool`
- **Method:** `POST`
- **Description:** Adds a new school to the database. Includes validation for all input fields.
- **Payload (JSON):**
  ```json
  {
    "name": "Springfield High",
    "address": "742 Evergreen Terrace",
    "latitude": 19.9975,
    "longitude": 73.7898
  }
  ```

### 2. List Schools
- **Endpoint:** `/listSchools`
- **Method:** `GET`
- **Description:** Fetches all schools and sorts them based on geographic proximity (using the Haversine formula) to the user's provided coordinates.
- **Query Parameters:**
  - `latitude` (Float)
  - `longitude` (Float)
- **Example Request:**
  ```text
  GET /listSchools?latitude=19.9975&longitude=73.7898
  ```

## Live Links & Documentation

- **Live API Base URL:** [https://school-management-api-w5ri.onrender.com](https://school-management-api-w5ri.onrender.com)
- **Postman Collection:** [View and Test API in Postman](https://prnjall-1887678.postman.co/workspace/School-Management-API~2c59e375-d149-4839-b20d-5d99a715f60a/request/54625784-e17a8b59-5a96-4a18-bcd3-d4d2fda368ef?action=share&creator=54625784)
