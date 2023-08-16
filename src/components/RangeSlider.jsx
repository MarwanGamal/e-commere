import {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Text = styled.div`
  font-size: 14px;
  font-weight: bold;
`

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#9c9c9c',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
  },
});


function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 5;

export default function RangeSlider() {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: 200 }}>
        <FlexContainer>
          <Text>min</Text>
          <Text>max</Text>
        </FlexContainer>
        <Slider
          min={18}
          max={120}
          getAriaLabel={() => 'Minimum distance shift'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          getAriaValueText={valuetext}
          disableSwap
          color='primary'
        />
        <FlexContainer>  
          <Text>${value[0]}</Text>
          <Text>${value[1]}</Text>
        </FlexContainer>
      </Box>  
    </ThemeProvider>
    
  );
}