import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import './FixedBottomNavigation.css';
// import Puppies from './Puppies';

// type DataType = {
//   puppies: {
//     id: string,
//     name: string,
//     breed: string,
//     dob: string,
//   }[]
// };

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      {/* <Puppies puppies={puppies}/> */}
      <Paper sx={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
      }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
