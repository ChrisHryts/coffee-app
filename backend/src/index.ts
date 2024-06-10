import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import transactionRoutes from './routes/transactionRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('', transactionRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
