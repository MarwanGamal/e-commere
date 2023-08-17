import Checkbox from '@mui/material/Checkbox';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#1F304C',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      }
    },
  });
  

export default function IconCheckboxes() {
  return (
    <ThemeProvider theme={theme}>
        <div>
        <Checkbox
            {...label}
            color={"primary"}
            icon={<CircleOutlinedIcon />}
            checkedIcon={<CircleIcon />}
        />
        </div>
    </ThemeProvider>
  );
}