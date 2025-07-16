const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.redirect('/themapjs');
});

app.get('/themapjs', (req, res) => {
  res.render('pages/themapjs');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/projects', (req, res) => {
  res.render('pages/projects');
});

app.get('/writing', (req, res) => {
  res.render('pages/writing');
});

app.get('/resume', (req, res) => {
  res.render('pages/resume');
});

app.get('/writing-father-with-coding', (req, res) => {
  res.render('pages/writing-father-with-coding');
});
app.get('/writing-first-project', (req, res) => {
  res.render('pages/writing-first-project');
});

app.get('/writing-goals', (req, res) => {
  res.render('pages/writing-goals');
});

app.get('/todo', (req, res) => {
  res.render('pages/todo-list/todo');
});

app.get('/login', (req, res) => {
  res.render('pages/todo-list/login');
});


app.get('/register', (req, res) => {
  res.render('pages/todo-list/register');
});

app.get('/calculator', (req, res) => {
  res.render('pages/calculator/calculator');
});

app.get('/resume', (req, res) => {
  res.render('pages/resume');
});

app.get('/writing-vscode-shortcut', (req, res) => {
  res.render('pages/writing-vscode-shortcut');
});

// 404 page (optional)
app.use((req, res) => {
  res.status(404).render('pages/404'); // if you create views/pages/404.ejs
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
