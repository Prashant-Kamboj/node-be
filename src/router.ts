import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProduct,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getOneUpdate,
  getUpdates,
  updateData,
} from "./handlers/update";

const router = Router();

/**
 * product
 */

router.get("/product", getProduct);
router.get("/product/:id", getOneProduct);

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  updateProduct
); // req.body object must have a field name , handler should only do the business logic

router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);
router.delete("/product/:id", deleteProduct);

/**
 * Update
 */

router.get("/update", getUpdates);
router.get("/update/:id", getOneUpdate);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  updateData
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  createUpdate
);
router.delete("/update/:id", deleteUpdate);

/**
 * Update point
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});

router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  (req, res) => {}
);
router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  (req, res) => {}
);

router.delete("/updatepoint/:id", () => {});

//error handler for subroutes
router.use((err, req, res, next) => {
  console.log(err);
  res.status(400).json({
    message: "something went wrong!",
  });
});

export default router;
