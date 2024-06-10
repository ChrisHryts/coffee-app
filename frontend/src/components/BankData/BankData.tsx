import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { RoundedAppBar } from "../Header/HeaderStyle";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

const BankData: React.FC = () => {
  const [accountBalance, setAccountBalance] = useState<number>(0);

  useEffect(() => {
    async function fetchAccountBalance() {
      const url = 'https://api.privatbank.ua/p24api/balance';
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      };

      const data = {
        cardnum: '1111 2222 3333 4444',
        password: '1234',
        id: '12345678',
      };

      try {
        const response = await axios.post(url, data, { headers: headers });
        setAccountBalance(response.data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    }

    fetchAccountBalance();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, border: '2px solid #1876d1', borderRadius: '8px', overflow: 'hidden', mb: 8 }}>
      <RoundedAppBar position='static' sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='primary'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <PointOfSaleIcon style={{ fontSize: 'large' }} />
          </IconButton>

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: 'none', sm: 'block', color: '#1876d1' } }}
          >
            Balance: {`$${accountBalance}`}
          </Typography>
        </Toolbar>
      </RoundedAppBar>
    </Box>
  );
};

export default BankData;
