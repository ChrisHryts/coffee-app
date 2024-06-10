import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Transaction } from '../../types/Transaction';

type Props = {
  transactions: Transaction[];
};

const List: React.FC<Props> = ({ transactions }) => {
  const transactionsLength = transactions.length;

  return (
    <>
      {transactionsLength > 0 ? (
        <Table sx={{ mb: 4 }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Date</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Amount</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Category</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction: Transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date.split('T')[0]}</TableCell>
                <TableCell>{`$${transaction.amount.toFixed(2)}`}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>{transaction.type}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={1} style={{ fontWeight: 'bold' }}>
                Total:
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>
                {`$${transactions
                  .reduce((total, transaction) => total + transaction.amount, 0)
                  .toFixed(2)}`}
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : (
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          height='50vh'
        >
          <Typography variant='h3' color='#1879d1'>
            List is empty...
          </Typography>
        </Box>
      )}
    </>
  );
};

export default List;
