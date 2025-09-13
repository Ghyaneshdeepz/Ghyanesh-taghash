import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const port = 3000;

app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'taghost',
  password: 'SQL72@sql',
  port: 5432,
});

// Test connection
pool.connect((err) => {
  if (err) {
    console.error('Connection error', err);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

// GET endpoint to fetch data from 'people' table
app.get('/getdata', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM people');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// POST endpoint to add new person
app.post('/addperson', async (req, res) => {
  const { name, gender, birthdate, is_vaccinated, vaccine_name } = req.body;
  try {
    await pool.query(
      'INSERT INTO people (name, gender, birthdate, is_vaccinated, vaccine_name) VALUES ($1, $2, $3, $4, $5)',
      [name, gender, birthdate, is_vaccinated, vaccine_name]
    );
    res.send('Person added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
