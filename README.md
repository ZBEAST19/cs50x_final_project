# Project Title: 50xSketchWeb

## Video Demo

[https://youtu.be/kEUSAWIPWdw](https://youtu.be/kEUSAWIPWdw)

---

## Project Description

50xSketchWeb is a web-based drawing application developed as my **CS50x Final Project**. The main goal of this project is to provide users with a simple and intuitive platform where they can draw freely on a digital canvas and download their artwork to their computer.

This project combines both frontend and backend concepts learned throughout CS50x. On the frontend side, users interact with an HTML5 canvas using JavaScript, allowing real-time drawing, color selection, and tool switching. On the backend side, the project uses Flask to manage routes, user authentication, and sessions, as well as SQLite to store user data.

The idea behind this project was to build something practical that demonstrates how JavaScript can interact with the browser while still being securely controlled by a Python backend.

---

## Features

* User registration system
* User login and logout
* Session-based authentication
* Protected pages (only logged-in users can access the drawing canvas)
* Drawing on an HTML5 canvas
* Pen and eraser tools
* Color picker
* Brush size control
* Downloading drawings as image files

---

## File Structure and Explanation

### app.py

This is the main Flask application file. It handles:

* Routing between pages (login, register, homepage, canvas)
* User authentication logic
* Session management
* Database connections
* Access control to ensure only authenticated users can access the canvas

### app.db

This SQLite database stores user information such as usernames and hashed passwords. It is used to authenticate users during login and registration.

### templates/

This folder contains all HTML templates rendered by Flask:

* `login.html`: Login form for existing users
* `register.html`: Registration form for new users
* `homepage.html`: Main landing page after login
* `canvas.html`: The drawing interface containing the HTML5 canvas

### static/

This folder contains static assets such as CSS and JavaScript files:

* `canvas.css`: Styling for the drawing canvas page
* `canvas.js`: JavaScript logic for drawing, handling mouse events, colors, brush size, and downloading the drawing
* `login.css`: Styling for login and registration pages
* `images/`: Contains image assets used in the project

---

## Design Decisions

One important design decision was to separate frontend and backend logic clearly. All drawing logic is handled entirely in JavaScript on the client side to ensure smooth and responsive drawing performance. Flask is only responsible for authentication, routing, and security.

Another design choice was using session-based authentication instead of storing login state on the client side. This approach is more secure and aligns with best practices taught in CS50.

SQLite was chosen as the database because it is lightweight, easy to set up, and perfectly suited for a small-scale application like this.

---

## How to Run the Project

1. Install Flask if not already installed:

```bash
pip install flask
```

2. Run the Flask application:

```bash
flask run
```

3. Open your browser and visit:

```text
http://127.0.0.1:5000/
```

---

## What I Learned

Through this project, I learned how to:

* Build a complete Flask web application from scratch
* Implement user authentication and sessions
* Use SQLite with Python
* Integrate JavaScript with HTML Canvas
* Organize a web project with a clear structure
* Debug and improve both frontend and backend code

---

## AI Usage Disclosure

I used ChatGPT as a learning assistant for:

* Debugging errors
* Understanding concepts
* Improving code structure

All code logic, design decisions, and final implementation were done by me.

---

## Academic Honesty

This project complies with CS50’s Academic Honesty policy.
