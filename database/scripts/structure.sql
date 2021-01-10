SET sql_mode = '';

CREATE DATABASE MagDB;

CREATE TABLE profile (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(24) NOT NULL,
    email VARCHAR(32) NOT NULL,    
    password VARCHAR(24) NOT NULL,    
    remember_token VARCHAR(100),
    firstname VARCHAR(24) NOT NULL,
    lastname VARCHAR(24) NOT NULL,
    gender VARCHAR(20),
    DNI VARCHAR(8),
    birthday DATE NOT NULL,
    phone VARCHAR(20),
    type VARCHAR(10) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
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
    
CREATE TABLE product (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(24) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(8,2) NOT NULL
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
	quantity INT NOT NULL,
	total DECIMAL(8,2) NOT NULL,
	productID INT UNSIGNED,
	cartID INT UNSIGNED,
	FOREIGN KEY (productID) REFERENCES product(id),
	FOREIGN KEY (cartID) REFERENCES cart(id)
	);

CREATE TABLE variant (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(24) NOT NULL,
    subtype VARCHAR(24) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    size VARCHAR(3) NOT NULL,
    color VARCHAR(16) NOT NULL,
    brand VARCHAR(32) NOT NULL,
    usestate VARCHAR(5) NOT NULL,
    quality INT UNSIGNED NOT NULL
	);

CREATE TABLE product_variant (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    productID INT UNSIGNED,
    variantID INT UNSIGNED,
    FOREIGN KEY (productID) REFERENCES product(id),
    FOREIGN KEY (variantID) REFERENCES variant(id)
    );    