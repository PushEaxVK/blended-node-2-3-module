import { Router } from 'express';
import {
  getProductByIdController,
  getProductsController,
} from '../controllers/products.js';

const router = Router();

router.get('/products', getProductsController);
router.get('/products/:productId', getProductByIdController);

router.post('/products', async () => {});
router.patch('/products/:productId', async () => {});
router.delete('/products/:productId', async () => {});

export default router;
