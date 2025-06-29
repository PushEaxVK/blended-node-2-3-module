import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController,
} from '../controllers/products.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createProductValidationSchema,
  updateProductValidationSchema,
} from '../validation/products.js';

const router = Router();

router.use('/products/:productId', isValidId);

router.get('/products', getProductsController);
router.get('/products/:productId', getProductByIdController);

router.post(
  '/products',
  validateBody(createProductValidationSchema),
  createProductController,
);
router.patch(
  '/products/:productId',
  validateBody(updateProductValidationSchema),
  updateProductController,
);
router.delete('/products/:productId', deleteProductController);

export default router;
