import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController,
} from '../controllers/products.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.use('/products/:productId', isValidId);

router.get('/products', getProductsController);
router.get('/products/:productId', getProductByIdController);

router.post('/products', createProductController);
router.patch('/products/:productId', updateProductController);
router.delete('/products/:productId', deleteProductController);

export default router;
