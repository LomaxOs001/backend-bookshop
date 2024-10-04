import { Router } from 'express';
const router = Router();
<<<<<<< HEAD
import book_cntrller from '../controllers/books.js'; 
import order_cntrller from '../controllers/orders.js'; 

router
.route('/books')
.get(book_cntrller.getBooks);

router
.route('/orders')
.post(order_cntrller.storeOrders);
=======
import cntrller from '../controllers/books.js'; 

router
.route('/books')
.get(cntrller.getBooks);

router
.route('/orders')
.post(cntrller.storeOrders);
>>>>>>> 45069c3e85fb4ab448afb77131f69c7965ae5615

export { router };