CREATE TABLE product (
    product_id SERIAL PRIMARY KEY NOT NULL,
    name varchar(40) NOT NULL, 
    description varchar(80) NOT NULL,
    price intiger NOT NULL,
    image_url TEXT NOT NULL
);