var express = require('express');
var app = express();

// Add a root route for easier testing
app.get('/', function(req, res) {
   res.send('Welcome to Express app. Try /things/12345 for a valid ID example.');
});

// Use a standard route parameter (no inline regex)
app.get('/things/:id', function(req, res) {
   // Validate the ID format inside the handler
   if (/^\d{5}$/.test(req.params.id)) {
      res.send('id: ' + req.params.id);
   } else {
      res.status(400).send('ID must be exactly 5 digits');
   }
});

// Route to handle ID and port number format like "12345:1"
app.get('/things/:idWithPort', function(req, res, next) {
   // Check if the parameter contains a colon
   if (req.params.idWithPort.includes(':')) {
      const parts = req.params.idWithPort.split(':');
      const id = parts[0];
      const port = parts[1];
      
      // Validate the ID format
      if (/^\d{5}$/.test(id)) {
         res.send(`ID: ${id}, Port: ${port}`);
      } else {
         res.status(400).send('ID must be exactly 5 digits');
      }
   } else {
      // Forward to the next route if it doesn't match our pattern
      next();
   }
});

// Add route for pattern /things/tutorialspoint/12345
app.get('/things/:section/:id', function(req, res) {
   const section = req.params.section;
   const id = req.params.id;
   
   // Validate the ID format
   if (/^\d{5}$/.test(id)) {
      res.send(`Section: ${section}, ID: ${id}`);
   } else {
      res.status(400).send('ID must be exactly 5 digits');
   }
});

// Add route for pattern /things/tutorialspoint/id/12345
app.get('/things/:section/id/:id', function(req, res) {
   const section = req.params.section;
   const id = req.params.id;
   
   // Validate the ID format
   if (/^\d{5}$/.test(id)) {
      res.send(`Section: ${section}, ID: ${id}`);
   } else {
      res.status(400).send('ID must be exactly 5 digits');
   }
});

// Add a custom 404 handler - this must be the last route
app.use(function(req, res, next) {
   res.status(404).send('404 - Sorry, the page you requested was not found.');
});

app.listen(3008, function() {
   console.log('Server running on http://localhost:3008');
});