SET sql_mode = '';

DROP SCHEMA MagDB;

CREATE DATABASE MagDB;
USE MagDB;

CREATE TABLE profile (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(24) NOT NULL,
    email VARCHAR(32) NOT NULL,    
    password VARCHAR(100) NOT NULL,    
    remember_token VARCHAR(100),
    firstname VARCHAR(24),
    lastname VARCHAR(24),
    gender VARCHAR(20),
    DNI VARCHAR(8),
    birthday DATE,
    phone VARCHAR(20),
    type VARCHAR(10) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
    );
    
CREATE TABLE card (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	type VARCHAR(10) NOT NULL,
	issuer VARCHAR(10) NOT NULL,
	name VARCHAR(24) NOT NULL,
	number VARCHAR(16) NOT NULL,
	securitycode VARCHAR(3) NOT NULL,
	expirationdate VARCHAR(7) NOT NULL,
	profileID INT UNSIGNED,
	FOREIGN KEY (profileID) REFERENCES profile(id)
);

CREATE TABLE address (
		id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        street VARCHAR(32),
        city VARCHAR(32),
        state VARCHAR(32),
        country VARCHAR(32),
        zipcode VARCHAR(10),
        profileID INT UNSIGNED,
		FOREIGN KEY (profileID) REFERENCES profile(id)
        );
        
CREATE TABLE categories (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(24) NOT NULL
	);
    
CREATE TABLE product (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(24) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    brand VARCHAR(20) NOT NULL,
    deletedAt TIMESTAMP,
    categoriesID INT UNSIGNED,
	FOREIGN KEY (categoriesID) REFERENCES categories(id)
    );
    
CREATE TABLE cart (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    date TIMESTAMP NOT NULL,
    subtotal DECIMAL(8,2) NOT NULL,
    taxes DECIMAL(8,2) NOT NULL,
    profileID INT UNSIGNED,
    FOREIGN KEY (profileID) REFERENCES profile(id)
    );
    
CREATE TABLE product_cart (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	quantity INT UNSIGNED NOT NULL,
	total DECIMAL(8,2) NOT NULL,
	productID INT UNSIGNED,
	cartID INT UNSIGNED,
	FOREIGN KEY (productID) REFERENCES product(id),
	FOREIGN KEY (cartID) REFERENCES cart(id)
	);