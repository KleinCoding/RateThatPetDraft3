UPDATE posts
SET pet_name= $1, img_url= $2
WHERE post_id= $3 AND user_id= $4;