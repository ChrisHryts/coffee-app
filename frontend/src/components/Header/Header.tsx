import SearchIcon from '@mui/icons-material/Search';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Category } from '../../types/Category';
import { RoundedAppBar, Search, SearchIconWrapper, StyledInputBase } from './HeaderStyle';

type Props = {
  query: string;
  setQuery: (query: string) => void;
  setFilterCategory: (category: Category | '') => void;
  setAmountFilter: (value: number[]) => void;
};

const Header: React.FC<Props> = ({ query, setQuery, setFilterCategory, setAmountFilter }) => {
  const handleReset = () => {
    setQuery('');
    setFilterCategory('');
    setAmountFilter([0, 100]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <RoundedAppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <CurrencyExchangeIcon style={{ fontSize: 'large' }} />
          </IconButton>

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Transactions
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search by type...'
              inputProps={{ 'aria-label': 'search' }}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </Search>

          <Button
            variant='contained'
            onClick={handleReset}
            sx={{
              color: '#1879d1',
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#fff',
                transform: 'scale(1.2)',
              },
              fontWeight: '600',
              transition: 'transform 0.2s',
            }}
          >
            Reset
          </Button>
        </Toolbar>
      </RoundedAppBar>
    </Box>
  )
}

export default Header;
