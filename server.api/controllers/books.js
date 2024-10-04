import pool from '../models/db.js';


const getBooks = async (req, res) => {
    const db_client = await pool.connect();
    const query = 'SELECT * FROM public."Books"';

    try {
        
        const results = await db_client.query(query);

        const books = results.rows.map(book => {
            return {
                id: book.id,
                author: book.author,
                name: book.name,
                description: book.description,
                category: book.category,
                price: book.price
            }
        });
        res
            .status(200)
            .json(books);
    }
    catch (err) {
        res
            .status(500)
            .json({ error: err.message });
    }
    finally {
        db_client.release();
    }
};

<<<<<<< HEAD
export default  { getBooks };
=======
const storeOrders = async (req, res) => {
    const { orderData } = req.body;

    if (!Array.isArray(orderData) || orderData.length === 0) {
        return res.status(400).json({ success: false, message: 'Invalid order data' });
    }

    const client = await pool.connect(); 
    try {
        //start a transaction
        await client.query('BEGIN'); 

        orderData.forEach( async (order) => {
        
            console.log(order);
            console.log("-----------");
            const query = `
                INSERT INTO public."Orders" 
                VALUES ($1, $2::json[])
            `;
            const values = [
                order.orderId, 
                order.orders.map(o => JSON.stringify(o))
            ];

            await client.query(query, values);
        });
        await client.query('COMMIT'); 

        res.status(201).send({ message: 'Orders stored successfully' });
    } catch (error) {

        await client.query('ROLLBACK'); 
        res.status(500).json({ error: error.message });

    } finally {
        client.release(); 
    }
};
export default  { getBooks, storeOrders };
>>>>>>> 45069c3e85fb4ab448afb77131f69c7965ae5615
