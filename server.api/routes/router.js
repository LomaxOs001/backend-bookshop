import { Router } from 'express';
const router = Router();
import cntrller from '../controllers/books.js'; 

router
.route('/books')
.get(cntrller.getBooks);

export { router };