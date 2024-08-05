
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);


CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    tag_name VARCHAR(255) NOT NULL
);


CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL
);


CREATE TABLE product_tags (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    UNIQUE (product_id, tag_id)
);


CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_product_tags_product_id ON product_tags(product_id);
CREATE INDEX idx_product_tags_tag_id ON product_tags(tag_id);

INSERT INTO categories (category_name) VALUES ('Shirts'), ('Shorts'), ('Music'), ('Hats'), ('Shoes');
INSERT INTO tags (tag_name) VALUES ('rock music'), ('pop music'), ('blue'), ('red'), ('green'), ('white'), ('gold'), ('pop culture');
INSERT INTO products (product_name, price, stock, category_id) VALUES ('Plain T-Shirt', 14.99, 14, 1), ('Running Sneakers', 90.0, 25, 5), ('Branded Baseball Hat', 22.99, 12, 4), ('Top 40 Music Compilation Vinyl Record', 12.99, 50, 3), ('Cargo Shorts', 29.99, 22, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (1, 3), (1, 4), (2, 1), (3, 7), (4, 8);
