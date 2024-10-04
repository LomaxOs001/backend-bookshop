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

export default  { getBooks };