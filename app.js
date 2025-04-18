const express = require('express');
const app = express();
const PORT = 3008;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory array to store students
let students = [
    { id: 1, name: 'John Doe', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Jane Smith', age: 22, major: 'Mathematics' }
];

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Students API. Use /student endpoints to access the API.');
});

// GET /student - Retrieve all students
app.get('/student', (req, res) => {
    res.json(students);
});

// GET /student/:id - Retrieve a specific student
app.get('/student/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    
    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }
    
    res.json(student);
});

// POST /student - Create a new student
app.post('/student', (req, res) => {
    // Check if required fields are provided
    if (!req.body.name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    
    // Generate a new ID
    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    
    // Create new student object
    const newStudent = {
        id: newId,
        name: req.body.name,
        age: req.body.age || null,
        major: req.body.major || null
    };
    
    // Add to array
    students.push(newStudent);
    
    // Return the created student
    res.status(201).json(newStudent);
});

// PUT /student/:id - Update a student
app.put('/student/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === id);
    
    if (studentIndex === -1) {
        return res.status(404).json({ message: 'Student not found' });
    }
    
    // Update student data
    const updatedStudent = {
        id: id,
        name: req.body.name || students[studentIndex].name,
        age: req.body.age !== undefined ? req.body.age : students[studentIndex].age,
        major: req.body.major !== undefined ? req.body.major : students[studentIndex].major
    };
    
    // Replace the student in the array
    students[studentIndex] = updatedStudent;
    
    res.json(updatedStudent);
});

// DELETE /student/:id - Delete a student
app.delete('/student/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === id);
    
    if (studentIndex === -1) {
        return res.status(404).json({ message: 'Student not found' });
    }
    
    // Remove from array
    const deletedStudent = students.splice(studentIndex, 1)[0];
    
    res.json({ 
        message: 'Student deleted successfully', 
        deletedStudent 
    });
});

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
