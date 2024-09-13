# Online Chat Application

## Introduction

This project is a **simple Online Chat Application** built using Angular. It allows users to register, log in, and access a web-based chatroom where they can send and receive real-time messages. This is a work in progress and still requires several features and improvements to be implemented.

---

## Features
- User registration and login
- Real-time messaging
- Responsive and user-friendly interface

---

## Tech Stack
- **Frontend**: Angular
- **Backend**: Python (hosted on an EC2 instance)
- **Database**: MongoDB

---

## Installation

### Prerequisites
- **Node.js** and **npm** installed (for Angular setup)
- **Angular CLI** installed globally: `npm install -g @angular/cli`
- **Python backend** running on an EC2 instance (no need for local setup)

### Steps to Set Up the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-angular-repo-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-angular-repo-name
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. The backend server is hosted on an EC2 instance, so there’s no need to clone the backend repository. The frontend is already configured to interact with the hosted backend.

---

## Running the Application

### Start the Angular Development Server

To start the development server, run the following command:
```bash
ng serve
```

Open the application in your browser by navigating to `http://localhost:4200`.

Since the backend is already hosted on an EC2 instance, the frontend will automatically connect to it for features such as user registration, login, and chat functionality.

---

## Usage

### Registering an Account
1. On the login page, click on the "Register" button.
2. Fill in your username, email
3. Click "Submit" to create a new account(you'll be redirected to the chatroom).

### Accessing the Chat
1. After logging in, you'll be redirected to the chatroom.
2. Type a message in the input box and press the send icon to send.
3. Your messages, along with other user's messages, will appear in the chat window.

---

## Development Status

This project is **currently in development** and requires additional features and refinements, including:


- Security improvements (e.g., session management, password encryption)
- Error handling and form validation
- UI/UX improvements

---

## Backend

The backend for this project is written in **Python** and is hosted on an **AWS EC2 instance**. 

Since the backend is already deployed and accessible, **you do not need to clone or set up the backend locally**. The frontend will automatically interact with the backend via the configured API endpoints.

For reference, the backend code can be found in this repository: [Python Backend Repo](https://github.com/ajagtap2897/chat-backend-aws).
