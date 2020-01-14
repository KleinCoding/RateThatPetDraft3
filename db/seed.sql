-- create users table
CREATE table users (
  user_id SERIAL PRIMARY KEY,
  owned_ imgs text references images(img_id)
  username VARCHAR(40) NOT NULL,
  hash TEXT
)



-- create images table
CREATE table posts (
  img_id SERIAL PRIMARY KEY,
  category_name VARCHAR(50) NOT NULL,
  pet_name VARCHAR(25) NOT NULL,
  img_url VARCHAR(500) NOT NULL,
  user_id INT REFERENCES users(user_id)
  img_rating INT
)



-- checkForUsername
SELECT * FROM users
WHERE username = $1;



-- registerUser
INSERT INTO users (username, hash)
VALUES ($1, $2);



-- addImage
INSERT INTO images (category_name, pet_name, img_url, user_id)
VALUES ($1, $2, $3, $4)



-- getAllImages | 
SELECT * FROM images;



-- editImage
UPDATE images
SET
  pet_name = $1,
  img_url = $2,
  img_rating = 0,
  WHERE user_id = $3 AND image_id = $4;



-- deleteImage
DELETE FROM images
WHERE img_id = $1 AND user_id = $2;



-- getAllImagesByCategoryName | 
SELECT * FROM images
WHERE category_name = $1;

-- getAllImagesByOwner | 
SELECT * FROM images
WHERE user_id = $1;




-- Dummy Data
INSERT INTO images (category_name, pet_name, img_url, img_rating, user_id)
VALUES ('Dog', 'Heidi', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/17154200/Boxer.1.jpg', 0, 1);
