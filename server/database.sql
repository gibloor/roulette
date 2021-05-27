CREATE DATABASE roulette;

CREATE TABLE imagesMenu (
  id SERIAL PRIMARY KEY,
  link VARCHAR(100),
  title VARCHAR(100)
)

CREATE TABLE cases (
  id SERIAL PRIMARY KEY,
  picture VARCHAR(100),
  title VARCHAR(50),
  cost INT,
  items_label VARCHAR(10),
  items_rare_label VARCHAR(15),
  set_cases VARCHAR(20)
)

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  picture VARCHAR(100),
  title VARCHAR(50),
  cost INT,
  label VARCHAR(10),
  rare_label VARCHAR(15)
)
