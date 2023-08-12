# tournament-management-server
 To get started clone this repo and install dependencies.
 in the env file paste your mongo_URL


# Hit the below API in Postman to send a request...

#Replace http://localhost:3000.

# api for particopants CRUD
# 1) Create a new participant:

Method: POST
URL: http://localhost:3000/api/participants
ex.
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@example.com",
  "age": 30,
  "address": {
    "street": "123 main",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345",
    "country": "USA"
  }
}

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 2) Get all participants:

Method: GET
URL: http://localhost:3000/api/participants

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3) Get a single participant by ID:

Method: GET
URL: http://localhost:3000/api/participants/{participantId}
Replace {participantId} with the actual ID of the participant.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 4)Update a participant by ID:

Method: PUT
URL: http://localhost:3000/api/participants/{participantId}
Replace {participantId} with the actual ID of the participant.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 5) Delete a participant by ID:

Method: DELETE
URL: http://localhost:3000/api/participants/{participantId}
Replace {participantId} with the actual ID of the participant.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# api for tournament CRUD

# 1) Create a new tournament:

Method: POST
URL: http://localhost:3000/api/tournaments
Body (JSON, provide existing participant IDs from the database in the "participants" array):
ex..{
  "name": "Summer Championship",
  "startDate": "2023-08-15",
  "endDate": "2023-08-30",
  "participants": ["participantId1", "participantId2"], // Replace with actual participant IDs
  "status": "Upcoming"
}

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 2) Get all tournaments:

Method: GET
URL: http://localhost:3000/api/tournaments

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 3) Get a single tournament by ID:

Method: GET
URL: http://localhost:3000/api/tournaments/{tournamentId}
Replace {tournamentId} with the actual ID of the tournament.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 4) Update a tournament by ID:

Method: PUT
URL: http://localhost:3000/api/tournaments/{tournamentId}
Replace {tournamentId} with the actual ID of the tournament.
Body (JSON, you can update any field):
you have to update participants array as well..

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 5) Delete a tournament by ID:

Method: DELETE
URL: http://localhost:3000/api/tournaments/{tournamentId}
Replace {tournamentId} with the actual ID of the tournament.
