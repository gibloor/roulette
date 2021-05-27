const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db");

app.use(cors());
app.use(express.json());

//ROUTES imagesMenu//
app.post('/imagesMenu', async (req, res) => {
  try {
    const { link } = req.body;
    const newImage = await pool.query("INSERT INTO imagesMenu (link) VALUES($1) RETURNING *", [link]);
  
    res.json(newImage.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/imagesMenu', async (req, res) =>{
  try {
    const allImages = await pool.query("SELECT * FROM imagesMenu");
    res.json(allImages.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/imagesMenu/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const image = await pool.query("SELECT link FROM imagesMenu WHERE title = $1", [title])
 
    res.json(image.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

app.put('/imagesMenu/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { link, title } = req.body;
    const updateImage = await pool.query("UPDATE imagesMenu SET link = $1, title = $2 WHERE id = $3", [link, title, id]);
    
    res.json("Image was updated!");
  } catch (err) {
    console.error(err.message);
  }
})

app.delete('/imagesMenu/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteImage = await pool.query("DELETE FROM imagesMenu WHERE id = $1", [id]);

    res.json("Image was deleted!");
  } catch (err) {
    console.error(err.message);
  }
})

//END ROUTES imagesMenu//

//ROUTES cases//
app.post('/cases', async (req, res) => {
  try {
    const { title } = req.body;
    const newCase = await pool.query("INSERT INTO cases (title) VALUES($1) RETURNING *", [title]);
  
    res.json(newCase.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/cases', async (req, res) =>{
  try {
    const allCases = await pool.query("SELECT * FROM cases");
    res.json(allCases.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/cases/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const image = await pool.query("SELECT picture FROM cases WHERE title = $1", [title])
 
    res.json(image.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/cases/kit/:kit_cases', async (req, res) => {
  try {
    const { kit_cases } = req.params;
    const picture = await pool.query("SELECT * FROM cases WHERE kit_cases = $1", [kit_cases])
    res.json(picture.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/cases/kit_name/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const bag = await pool.query("SELECT * FROM cases WHERE title = $1", [title])
    res.json(bag.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.put('/cases/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { picture, title, cost, itemsLabel, itemsRareLabel, kitCases } = req.body;
    const updateCase = await pool.query("UPDATE cases SET picture = $1, title = $2, cost = $3, items_label = $4, items_rare_label = $5, kit_cases = $6 WHERE id = $7", [picture, title, cost, itemsLabel, itemsRareLabel, kitCases, id]);
    res.json("Case was updated!");
  } catch (err) {
    console.error(err.message);
  }
})

app.delete('/cases/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCase = await pool.query("DELETE FROM cases WHERE id = $1", [id]);

    res.json("Case was deleted!");
  } catch (err) {
    console.error(err.message);
  }
})

//END ROUTES cases//

//ROUTES items//
app.post('/items/', async (req, res) => {
  try {
    const { title } = req.body;
    const newItem = await pool.query("INSERT INTO items (title) VALUES($1) RETURNING *", [title]);
  
    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/items', async (req, res) =>{
  try {
    const allItems = await pool.query("SELECT * FROM items");
    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/items/kit', async (req, res) => {
  try {
    const { label, rareLabel} = req.query;
    const picture = await pool.query("SELECT * FROM items WHERE label = $1 AND rare_label = $2", [label, rareLabel])
    res.json(picture.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/items/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const item = await pool.query("SELECT picture FROM items WHERE title = $1", [title])
 
    res.json(item.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.put('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { picture, title, cost, label, rareLabel } = req.body;
    const updateItem = await pool.query("UPDATE items SET picture = $1, title = $2, cost = $3, label = $4, rare_label = $5  WHERE id = $6", [picture, title, cost, label, rareLabel, id]);
    res.json("Item was updated!");
  } catch (err) {
    console.error(err.message);
  }
})

app.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await pool.query("DELETE FROM items WHERE id = $1", [id]);
    res.json("Item was deleted!");
  } catch (err) {
    console.error(err.message);
  }
})

//END ROUTES items//



app.listen(5000, () => {
  console.log('server has started on port 5000');
});