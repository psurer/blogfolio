const express = require('express'); // Imports the Express.js module
const axios = require('axios'); // Imports the Axios library so we can make HTTP requests from a browser or node.js application
const app = express(); // We create an instance of the Express.js application
const bodyParser = require('body-parser'); // Imports the body-parser middleware, which is used to parse the request body
const nodemailer = require('nodemailer'); // Imports the nodemailer library, which is used to send email messages

// Sets up body parser middleware
app.use(bodyParser.urlencoded({ extended: false })); // Sets up the body-parser middleware to parse URL-encoded data with the extended option set to false.

app.use(bodyParser.json()); // Sets up the body-parser middleware to parse JSON data

// Serves static files from the "public" directory
app.use(express.static('public')); // Sets up a middleware to serve static files from the public directory.

// Handles POST requests to the contact form
                                                   /* !!!! 
*** CHECK THAT the Request.THIS works *** 
                                                   !!! */
app.post('/contact', (req, res) => { // This sets up a route for handling HTTP POST requests to the /contact URL
  const name = req.this.body.name; // Here we extract the name field from the HTTP request body
  const email = req.this.body.email; // Extracts the email field from the HTTP request body
  const message = req.this.body.message; // Extracts the message field from the HTTP request body

  // Creates a nodemailer transport .... in theory!  
  // ** NODEMAILER is a configuration object that is used to define the email service provider and authentication details for sending emails
  const transporter = nodemailer.createTransport({ // We want to create a nodemailer transport object using the createTransport method
    service: 'gmail', // specifies the email service provider
    auth: {
      user: 'myEmailUserName@gmail.com', // Specifies the email account credentials
      pass: 'myEmailPassword'
    }
  });

  // Sets up the email message object
  const mailOptions = { 
    from: 'yourGmailSserName@gmail.com', // Specifies the email sender address
    to: 'myEmailUserName@example.com', // Specifies the email recipient address


    subject: 'New contact form submission from ' + name, // Specifies the email subject line
    text: 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message // Specifies the email body text
  };

  // Sends the email
  transporter.sendMail(mailOptions, function(error, info){ // Sends the email message using the sendMail method of the nodemailer transport object
    if (error) { // Checks if there is an error in sending the email
      console.log(error); // Logging the error to the console ( we hope there won't be one )
      res.status(500).send('Error sending message'); // Sending an HTTP 500 error response to the client
    } else { // This line executes IF the email was sent successfully
      console.log('Email sent: ' + info.response); // Logs the response from the email service provider to the console
      res.status(200).send('Message sent successfully'); // Sends an HTTP 200 success response to the client
    }
  });
}); // line closes our callback function

app.get('/blogs', (req, res) => {
    axios.get('http://localhost:5000/api/blogs') // send GET request to the backend
      .then((response) => {
        console.log(response.data); // Logs the blog data to the console
        res.send(response.data); // Sends the blog data back to the client
      })
      .catch((error) => {
        console.error('Error retrieving blogs: ', error);
        res.status(500).send('Error retrieving blogs');
      });
  });

// Starts the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
