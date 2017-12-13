UPDATE books 
SET title = $2, author = $3, in_stock = $4, description = $5, img = $6
WHERE id = $1;
