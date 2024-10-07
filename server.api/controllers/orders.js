import pool from '../models/db.js';

const storeOrders = async (req, res) => {
    const { orderData } = req.body;

    if (!Array.isArray(orderData) || orderData.length === 0) {
        return res.status(400).json({ success: false, message: 'Invalid order data' });
    }

    const client = await pool.connect(); 
    const response = [];
    try {
        //start a transaction
        await client.query('BEGIN'); 

        orderData.forEach( async (order) => {
        
            const query = `
                INSERT INTO public."Orders" 
                VALUES ($1, $2::json[])
            `;
            const values = [
                order.orderId, 
                order.orders.map(o => JSON.stringify(o))
            ];

            await client.query(query, values);
            response.push(order.orderId);
        });
        await client.query('COMMIT'); 

        res.status(200).send({orderId: response, message: 'Order stored successfully'});
    } catch (error) {

        await client.query('ROLLBACK'); 
        res.status(500).json({ error: error.message });

    } finally {
        client.release(); 
    }
};

export default  { storeOrders };