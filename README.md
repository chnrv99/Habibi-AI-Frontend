# Habibi AI - Getting Started Guide

Habibi AI is a friendly AI imbued with a sense of humor, designed to interact with users in an entertaining and engaging manner.

## Running the Project

Follow these steps to set up and run the Habibi AI project:

### Clone Repositories
1. Clone the frontend repository:
   ```
   git clone "https://github.com/chnrv99/Habibi-AI-Frontend"
   ```
2. Clone the backend repository:
   ```
   git clone "https://github.com/chnrv99/Habibi-AI-Backend"
   ```

### Install Dependencies
1. Open a terminal and navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install npm packages:
   ```
   npm install
   ```
3. Open another terminal and navigate to the backend directory:
   ```
   cd backend
   ```
4. Install npm packages:
   ```
   npm install
   ```

### Start Backend Server
1. In the backend terminal, start the server on the default port 3000:
   ```
   npm run start:dev
   ```

### Start Frontend Server
1. In the frontend terminal, start the server on the default port 3001:
   ```
   npm start
   ```

### Configure Environment Variables
1. Create a `.env` file in the backend directory.
2. Add the following environment variables to the `.env` file and fill in the respective values:
   ```
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   GOOGLE_CALLBACK_URL=http://localhost:3000/redirect
   JWT_SECRET=
   MONGO_URI=
   GOOGLE_API_KEY=
   ```

### Login and Chat
Once everything is set up and running, you can navigate to the frontend application in your browser. You should be able to login using Google OAuth and start chatting with the Habibi AI bot.

Enjoy interacting with Habibi AI, your friendly and funny AI companion!
