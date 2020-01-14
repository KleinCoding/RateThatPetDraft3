UPDATE posts
SET
  pet_name = $1,
  img_url = $2,
  
WHERE user_id = $3 AND post_id = $4;