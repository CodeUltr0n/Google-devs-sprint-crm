const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve login page
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FinAuto - Login</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                text-align: center;
                background: #e0f2fe;
            }
            .header {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                background: white;
                box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
            }
            .logo {
                font-size: 28px;
                font-weight: bold;
                color: #0077b6;
            }
            .login-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 80vh;
            }
            .login-form {
                background: white;
                padding: 30px;
                width: 350px;
                border-radius: 12px;
                box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .login-form h3 {
                color: #0077b6;
                margin-bottom: 20px;
                font-size: 22px;
            }
            .login-form input {
                width: 100%;
                padding: 12px;
                margin: 10px 0;
                border: 1px solid #ccc;
                border-radius: 8px;
                font-size: 16px;
            }
            .login-form button {
                width: 100%;
                background: #0077b6;
                color: white;
                padding: 12px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                margin-top: 15px;
                font-size: 16px;
                transition: background 0.3s;
            }
            .login-form button:hover {
                background: #005f8a;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="logo">FinAuto</div>
        </div>
        <div class="login-container">
            <div class="login-form">
                <h3>Login to FinAuto</h3>
                <form action="/login" method="POST">
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="password" name="password" placeholder="Password" required>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </body>
    </html>
    `);
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // In a real application, authenticate the user
    console.log(`Email: ${email}, Password: ${password}`);
    res.send('Login successful (placeholder response).');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
