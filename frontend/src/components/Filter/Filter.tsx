import { Box, MenuItem, Select, Slider, Typography } from '@mui/material';
import { Category } from '../../types/Category';

type Props = {
  filterCategory: Category | '';
  setFilterCategory: (category: Category | '') => void;
  amountFilter: number[];
  setAmountFilter: (value: number[]) => void;
};

const Filter: React.FC<Props> = ({ filterCategory, setFilterCategory, amountFilter, setAmountFilter }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'left'
      }}
    >
      <Select
        value={filterCategory}
        onChange={(event) => setFilterCategory(event.target.value as Category)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{ width: 250, mt: 4, mb: 1.5 }}
      >
        <MenuItem value='' onClick={() => setFilterCategory('')}>
          All Categories
        </MenuItem>
        <MenuItem value='coffee'>Coffee</MenuItem>
        <MenuItem value='cake'>Cake</MenuItem>
      </Select>

      <Typography variant='subtitle1' sx={{ mt: 1 }}>
        Price Range
      </Typography>

      <Slider
        value={amountFilter}
        onChange={(_, newValue) => {
          setAmountFilter(newValue as number[]);
        }}
        valueLabelDisplay='auto'
        aria-labelledby='range-slider'
        getAriaValueText={(value) => `${value}`}
        min={0}
        max={100}
        step={20}
        sx={{
          width: 300,
          ml: 0.5,
          '& .MuiSlider-rail': { height: 2 },
          '& .MuiSlider-track': { height: 2 },
          '& .MuiSlider-thumb': { width: 15, height: 15 },
        }}
      />
    </Box>
  )
}

export default Filter;
