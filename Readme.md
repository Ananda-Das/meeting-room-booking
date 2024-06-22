## Installation

1. **Clone the repository:**
   git clone https://github.com/Ananda-Das/meeting-room-booking

2. **Install dependencies:**
   cd product-management-api <br>
   npm install

3. **Set up environment variables:**
   Create a .env file in the root directory and define the following variables:
   PORT=
   DATABASE_URL=
   BCRYPT_SALT_ROUNDS=
   JWT_ACCESS_SECRET=
   JWT_ACCESS_EXPIRES_IN=

## Usage

### User Authintication

- **Create a user / user signup:** POST /api/auth/signup

- **Login a user:** POST /api/auth/login

### Room Endpoints

- **Create a Room** POST /api/rooms

- **Get a Room** GET /api/rooms/:id

- **Update Room (Only Accessible by Admin)** PUT /api/rooms/:id

- **Delete a Room (Soft Delete, Only Accessible by Admin)** DELETE /api/rooms/:id

### Slot Endpoints

- **Create Slot** POST /api/slots

- **Get available slots** GET /api/slots/availability, /api/slots/availability?date=2024-06-15&roomId=60d9c4e4f3b4b544b8b8d1c5

### Booking Endpoints

- **Create a Booking** POST /api/bookings

- **Get All Bookings (Only Accessible by Admin)** GET /api/bookings

- **Get User's Bookings (Only Accessible by Authenticated User)** GET /api/my-bookings

- **Update Booking (Only Accessible by Admin)** PUT /api/bookings/:id

- **Delete Booking (Soft Delete, Only Accessible by Admin)** DELETE /api/bookings/:id

## Live API URL

You can access the live API at https://assignment-2-dun-nine.vercel.app/
