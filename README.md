# Jim Varney Tribute API

A simple ExpressJS REST API that provides information about Jim Varney and the characters he portrayed throughout his career.

## About Jim Varney

Jim Varney (1949-2000) was an American actor, comedian, and voice actor best known for his character Ernest P. Worrell. Born in Lexington, Kentucky, Varney began acting in local theater at the age of 8. He rose to fame playing Ernest in hundreds of television commercials and several feature films, including "Ernest Goes to Camp" and "Ernest Saves Christmas." Besides his iconic Ernest character, Varney also played Jed Clampett in "The Beverly Hillbillies" movie and voiced Slinky Dog in the first two "Toy Story" films.

## Project Description

This API provides a simple interface to store and retrieve information about Jim Varney and the characters he portrayed. It's built with Express.js and uses an in-memory array to store data, making it a lightweight solution for learning and demonstration purposes.

## Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   node app.js
   ```

The server will run on port 3008 by default. You can access it at http://localhost:3008.

## API Endpoints

### GET /

Returns a welcome message with a brief introduction to Jim Varney.

### GET /student

Returns all records in the database, which includes Jim Varney and several of his characters.

### GET /student/:id

Returns a specific record by ID.

Example: `GET /student/2` will return information about Jim Varney himself.

### POST /student

Creates a new record. Requires a JSON body with at least a name field.

Example request body:
```json
{
  "name": "Auntie Nelda",
  "age": 60,
  "major": "Comedy Character"
}
```

### PUT /student/:id

Updates an existing record. Requires a JSON body with the fields to update.

Example: `PUT /student/1` with body:
```json
{
  "age": 45
}
```

### DELETE /student/:id

Deletes a record by ID.

## Initial Data

The API is pre-loaded with information about:
1. Ernest P. Worrell - Jim Varney's most famous character
2. Jim Varney himself, with biographical details
3. Jed Clampett - from The Beverly Hillbillies
4. Slinky Dog - from Toy Story
5. Lothar Zogg - from 3 Ninjas: High Noon at Mega Mountain

## Technical Details

- Built with Express.js
- Uses in-memory data storage (no database required)
- RESTful API design
- HTTP methods: GET, POST, PUT, DELETE
- JSON response format

## Error Handling

The API returns appropriate HTTP status codes:
- 200: Success
- 201: Resource created successfully
- 400: Bad request
- 404: Resource not found

All error messages are themed with Ernest P. Worrell's catchphrases for a fun user experience.
