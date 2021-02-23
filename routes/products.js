var express = require("express");
const productController = require("../controllers/productController");
var router = express.Router();
var check_admin = require("../middlewares/check-admin");
var authMiddleware = require("../middlewares/checkAuth");
const validator = require("../middlewares/validator");

let multer = require("multer");
let path = require("path");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({
  storage: storage,
});

// ,
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },

// function checkFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png|gif/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);
//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     return cb(null, false);
//   }
// }

router.get("/", productController.list);

router.get("/create", authMiddleware, check_admin, productController.create);
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  validator.createProduct,
  check_admin,
  productController.save
);

router.get("/:id", productController.detail);

router.get("/:id/edit", productController.edit);
router.put("/:id", upload.single("image"), productController.refresh);

router.post("/:id/delete", productController.delete);

module.exports = router;
