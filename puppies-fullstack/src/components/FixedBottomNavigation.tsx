import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import './FixedBottomNavigation.css';

type DataType = {
  puppies: {
    id: string,
    name: string,
    breed: string,
    dob: string,
  }[]
};

export default function FixedBottomNavigation({ puppies } : DataType) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {puppies.map((puppy, index) => {
          const { dob } = puppy;
          const d1 = dob.split('-')[2];
          const m1 = dob.split('-')[1];
          const y1 = dob.split('-')[0];
          if (parseInt(d1, 10) > d2) {
            d2 += month[m2 - 1];
            m2 -= 1;
          }
          if (parseInt(m1, 10) > m2) {
            m2 += 12;
            y2 -= 1;
          }
          const d = d2 - parseInt(d1, 10);
          const m = m2 - parseInt(m1, 10);
          const y = y2 - parseInt(y1, 10);

          return (
                <ListItem button key={index}>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                  primary={`${puppy.name} : ${y} years ${m} months ${d} days old`}
                  secondary={puppy.breed}
                  />
                </ListItem>
          );
        })}
      </List>
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
