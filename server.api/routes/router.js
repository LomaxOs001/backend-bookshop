import { Router } from 'express';
const router = Router();
import cntrller from '../controllers/books.js'; 

router
.route('/books')
.get(cntrller.getBooks);

router
.route('/orders')
.post(cntrller.storeOrders);

export { router };