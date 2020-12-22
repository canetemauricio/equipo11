CREATE DATABASE MagDB;

CREATE TABLE passwordreset (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NULL
    );
    
CREATE TABLE user (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    remember_token VARCHAR(100) NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NULL,
    passwordresetID INT UNSIGNED,
    FOREIGN KEY (passwordresetID) REFERENCES passwordreset(id)
    );
    
CREATE TABLE customer (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    DNI VARCHAR(255) NOT NULL,
    birthday DATE NOT NULL,
    phone INT UNSIGNED NULL
    );
    
CREATE TABLE cards (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	type VARCHAR(255) NOT NULL,
	issuer VARCHAR(255) NOT NULL,
	name VARCHAR(255) NOT NULL,
	number VARCHAR(255) NOT NULL,
	securitycode VARCHAR(255) NOT NULL,
	expirationdate DATE NOT NULL,
	customerID INT UNSIGNED,
	FOREIGN KEY (customerID) REFERENCES customer(id)
);

CREATE TABLE address (
		id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        street VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        zipcode INT UNSIGNED NOT NULL,
        customerID INT UNSIGNED,
		FOREIGN KEY (customerID) REFERENCES customer(id),
        sellerID INT UNSIGNED,
        FOREIGN KEY (sellerID) REFERENCES seller(ID)
        );
    
CREATE TABLE products (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    quality VARCHAR(255) NOT NULL,
    size VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    usestate VARCHAR(255) NOT NULL,
    costtype VARCHAR(255) NOT NULL,
    cost INT NOT NULL
    );
    
CREATE TABLE cart (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    customerID INT UNSIGNED,
    productsID INT UNSIGNED,
    FOREIGN KEY (customerID) REFERENCES customer(id),
    FOREIGN KEY (productsID) REFERENCES products(id),
    date TIMESTAMP NOT NULL,
    quantity INT UNSIGNED NOT NULL,
    subtotal INT UNSIGNED NOT NULL,
    taxes INT UNSIGNED NULL,
    total INT UNSIGNED NOT NULL
    );
    
CREATE TABLE seller (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    DNI VARCHAR(255) NOT NULL,
    birthday DATE NOT NULL,
    phone INT UNSIGNED NULL
    );

CREATE TABLE categories (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(255) NOT NULL,
    subtype VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    size VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    usestate VARCHAR(255) NOT NULL
	);

CREATE TABLE products_categories (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    productsID INT UNSIGNED,
    categoriesID INT UNSIGNED,
    FOREIGN KEY (productsID) REFERENCES products(id),
    FOREIGN KEY (categoriesID) REFERENCES categories(id)
    );
    