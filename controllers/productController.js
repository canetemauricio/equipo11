const { validationResult } = require("express-validator");
const fs = require("fs");
const { RequestHeaderFieldsTooLarge } = require("http-errors");
const { title } = require("process");
let products = require("../data/products.json");
let db = require("../database/models");

const {
  product,
  category,
  brand,
  gender,
  Sequelize,
} = require("../database/models");

const Op = Sequelize.Op;

module.exports = {
  // list: function (req, res) {
  //   res.render("./products/list", { title: "PRODUCTS - MAG", products });
  // }, //   FUNCIONA
  list: function (req, res) {
    let categoryCheckbox = 0;
    let genderCheckbox = 0;
    let brandCheckbox = 0;
    let ReqCategory = db.category.findAll();
    let ReqGender = db.gender.findAll();
    let ReqBrand = db.brand.findAll();

    if (req.query.category != undefined) {
      categoryCheckbox = req.query.category;
    }
    if (req.query.gender != undefined) {
      genderCheckbox = req.query.gender;
    }
    if (req.query.brand != undefined) {
      brandCheckbox = req.query.brand;
    }
    let ReqProduct = [];
    // let where = {categoriesID: [1, 2]}
    // let checker = 1
    // if (checker == 1) {
    //   where['id'] = [3, 5]
    // }
    // console.log(where)
    // console.log('testo2')

    let where = {};

    if (categoryCheckbox !== 0) {
      where["categoriesID"] = categoryCheckbox;
    }
    if (genderCheckbox !== 0) {
      where["genderID"] = genderCheckbox;
    }
    if (brandCheckbox !== 0) {
      where["brandID"] = brandCheckbox;
    }
    console.log(where);
    console.log("test3");

    if (categoryCheckbox == 0 && genderCheckbox == 0 && brandCheckbox == 0) {
      ReqProduct = db.product.findAll({});
    } else {
      ReqProduct = db.product.findAll({
        where,
      });
    }
    Promise.all([ReqCategory, ReqProduct, ReqGender, ReqBrand]).then(
      ([CategoryFilter, product, GenderFilter, BrandFilter]) => {
        // console.log(product[2].categoriesID)
        // console.log(ReqProduct)
        console.log("test");
        res.render("./products/list", {
          CategoryFilter,
          product,
          GenderFilter,
          BrandFilter,
          title: "PRODUCTS - MAG",
        });
      }
    );
    // db.product
    //   .findAll({
    //     include: [
    //       { association: "gender" },
    //       { association: "category" },
    //       { association: "brand" },
    //     ],
    //   })
    //   .then(db.category.findAll())
    //   .then(function (product, category) {
    //     console.log("test");
    //     console.log(category);
    //     res.render("./products/list", {
    //       title: "PRODUCTS - MAG",
    //       category: category,
    //       product: product,
    //     });
    //   });
  },
  // detail: function (req, res) {
  //   let productResult = products.find(function (products) {
  //     return products.id == req.params.id;
  //   });

  //   if (productResult) {
  //     return res.render("./products/detail", {
  //       title: productResult.detalle,
  //       productResult,
  //     });
  //   }
  // }, //  FUNCIONA
  detail: function (req, res) {
    db.product.findByPk(req.params.id).then(function (product) {
      res.render("./products/detail", { product: product });
    });
  },
  // let userSearch = req.query.producto.toLowerCase();
  // //let upperFirst = userSearch.charAt(0).toUpperCase() + userSearch.slice(1).toLowerCase()
  // //let lowerSecond = userSearch.toLowerCase()
  // let results = products.filter(function (product) {
  //   return product.detalle.toLowerCase().includes(userSearch);
  // });

  // res.render("./products/productSearch", {
  //   title: "SEARCH RESULTS - MAG",
  //   results,
  // });

  create: function (req, res) {
    let categoriesF = category.findAll();
    let brandsF = brand.findAll();
    let gendersF = gender.findAll();

    Promise.all([categoriesF, brandsF, gendersF])
      .then(([categories, brands, genders]) => {
        allCategories = categories;
        allBrands = brands;
        allGenders = genders;
        res.render("products/create", {
          title: "Nuevo Producto - MAG",
          categories: allCategories,
          brands: allBrands,
          genders: allGenders,
        });
      })
      .catch((e) => console.log(e));
  },
  save: function (req, res) {
    // let categories = category.findAll();
    // let brands = brand.findAll();
    // let genders = gender.findAll();
    let errors = validationResult(req);
    if (errors.errors.length) {
      console.log("Error 1");
      console.log(errors);
      return res.render("./products/create", {
        title: "Nuevo Producto - MAG",
        categories: allCategories,
        brands: allBrands,
        genders: allGenders,
        old: req.body,
        errors: errors.mapped(),
      });
    }

    db.product
      .create({
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        categoriesID: Number(req.body.category),
        genderID: Number(req.body.gender),
        brandID: Number(req.body.brand),
        stock: 10,
        image: req.file.filename,
        // image: req.body.filename,
      })
      .catch((e) => {
        console.log(e);
        return e;
      })
      .then((product) => {
        console.log("Error 3");
        return res.redirect(`/products/${product.id}`);
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  },

  //   if (errors.isEmpty()) {
  //     const dBody = req.body;
  //     const img = req.file;
  //     dBody.price = Number(req.body.price);
  //     dBody.categoriesID = Number(req.body.category);
  //     dBody.genderID = Number(req.body.gender);
  //     dBody.brandID = Number(req.body.brand);
  //     img.filename = image;

  //     product
  //       .create(dBody, image)
  //       .then((product) => {
  //         return res.redirect(`/products/${product.id}`);
  //       })
  //       .catch((e) => console.log(e));
  //     console.log(product);
  //   } else {
  //     const categories = category.findAll();
  //     const brands = brand.findAll();
  //     const genders = gender.findAll();

  //     Promise.all([categories, brands, genders])
  //       .then(([categories, brands, genders]) =>
  //         res.render("./products/create", {
  //           title: "NEW PRODUCT - MAG",
  //           categories,
  //           brands,
  //           genders,
  //           errors: errors.mapped(),
  //           old: req.body,
  //         })
  //       )
  //       .catch((e) => console.log(e));
  //     console.log(product);
  //   }
  // },
  // ---------------------------------------------------------------------------------------------
  // save: function (req, res) {
  //   productsFile = fs.readFileSync("./data/products.json", {
  //     encoding: "utf-8",
  //   });

  //   if (productsFile == "") {
  //     productsList = [];
  //   } else {
  //     productsList = JSON.parse(productsFile);
  //   }
  //   productsList.push({
  //     id: productsList[productsList.length - 1].id + 1,
  //     detalle: req.body.detalle,
  //     precio: req.body.precio,
  //   });

  //   let productsJSON = JSON.stringify(productsList);
  //   fs.writeFileSync("./data/products.json", productsJSON);

  //   res.redirect("/products");
  // }, //   FUNCIONA
  // edit: function (req, res) {
  //   let productId = req.params.id;
  //   let editing = products[productId - 1];
  //   res.render("./products/edit", { title: "EDITING PRODUCT - MAG", editing });
  // },
  edit: function (req, res) {
    const products = product.findByPk(req.params.id);
    const categories = category.findAll();
    const brands = brand.findAll();
    const genders = gender.findAll();

    Promise.all([products, categories, brands, genders]).then(
      ([products, categories, brands, genders]) =>
        res.render(`./products/edit`, {
          title: "EDITING PRODUCT - MAG",
          products,
          categories,
          brands,
          genders,
        })
    );

    // let productoF = db.product.findByPk(id, {
    //   include: [
    //     { association: "category" },
    //     { association: "gender" },
    //     { association: "brand" },
    //   ],
    // });
    // let categoriesF = category.findAll();
    // let brandsF = brand.findAll();
    // let gendersF = gender.findAll();
    // Promise.all([productoF, categoriesF, brandsF, gendersF]).then(function ([
    //   product,
    //   categories,
    // ]) {
    //   res.render("./products/edit", {
    //     title: "EDITING PRODUCT - MAG",
    //     product: product,
    //     variant: variant,
    //   });
    // });
  },
  // refresh: function (req, res) {
  //   let productEdited = {
  //     id: req.body.id,
  //     detalle: req.body.detalle,
  //     precio: req.body.precio,
  //   };
  //   res.send(productEdited);
  // }, //   FUNCIONA
  refresh: function (req, res) {
    let errors = validationResult(req);
    if (errors.errors.length) {
      console.log(errors);
      return res.render("./products/edit", {
        title: "Nuevo Producto - MAG",
        categories: allCategories,
        brands: allBrands,
        genders: allGenders,
        old: req.body,
        errors: errors.mapped(),
      });
    }

    db.product
      .update(
        {
          name: req.body.name,
          description: req.body.description,
          price: Number(req.body.price),
          categoriesID: Number(req.body.category),
          genderID: Number(req.body.gender),
          brandID: Number(req.body.brand),
          stock: 10,
          image: req.file.filename,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .catch((e) => {
        console.log(e);
        return e;
      })
      .then((product) => {
        console.log("Error 3");
        return res.redirect(`/products/`);
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  },
  //   const errors = validationResult(req);

  //   if (errors.isEmpty()) {
  //     product
  //       .findByPk(req.params.id)
  //       .then((product) => {
  //         const eBody = req.body;

  //         eBody.price = Number(req.body.price);
  //         eBody.image = req.file != undefined ? req.filename : product.image;
  //         eBody.categoriesID = Number(req.body.category);
  //         eBody.genderID = Number(req.body.gender);
  //         eBody.brandID = Number(req.body.brand);
  //         eBody.stock = 10;

  //         return product.update(eBody, {
  //           where: {
  //             id: req.params.id,
  //           },
  //         });
  //       })
  //       .then((confirm) => res.redirect(`/products/${product.id}`))
  //       .catch((e) => console.log(e));
  //   } else {
  //     const categories = category.findAll();
  //     const brands = brand.findAll();
  //     const genders = gender.findAll();

  //     Promise.all([categories, brands, genders])
  //       .then(([categories, brands, genders]) => {
  //         return res.render(`./products/edit`, {
  //           product: req.body,
  //           id: req.params.id,
  //           categories,
  //           brands,
  //           genders,
  //           errors: errors.mapped(),
  //         });
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // -----------------------------------------------------
  // db.product.update(
  //   {
  //     name: req.body.name,
  //     description: req.body.description,
  //     price: req.body.price,
  //   },
  //   {
  //     where: {
  //       id: req.params.id,
  //     },
  //   }
  // );
  // res.redirect("/products/" + req.params.id);

  // delete: function (req, res) {
  //   heroesFile = fs.readFileSync("./data/products.json", { encoding: "utf-8" });

  //   if (heroesFile == "") {
  //     heroesList = [];
  //   } else {
  //     heroesList = JSON.parse(heroesFile);
  //   }

  //   let notdeleted = products.filter(function (product) {
  //     return product.id != req.params.id;
  //   });

  //   let toWrite = JSON.stringify(notdeleted);
  //   fs.writeFileSync("./data/products.json", toWrite);

  //   res.redirect("/products");
  // }, //    FUNCIONA
  delete: function (req, res) {
    db.product
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then();
    res.redirect("/products");
  },
};
