import { Router } from 'express';
const router = Router();
import book_cntrller from '../controllers/books.js'; 
import order_cntrller from '../controllers/orders.js'; 

router
.route('/books')
.get(book_cntrller.getBooks);

router
.route('/orders')
.post(order_cntrller.storeOrders);

export { router };