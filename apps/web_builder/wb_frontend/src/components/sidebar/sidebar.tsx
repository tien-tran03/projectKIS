import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const items = [
  { text: 'Dashboard', icon: '/header_img/akar-icons_folder.png', url: '/dashboard' },
  { text: 'Project', icon: '/header_img/akar-icons_folder.png', url: '/projects' },
  { text: 'Your Template', icon: '/header_img/carbon_template.png' },
  { text: 'Learn', icon: '/header_img/fluent_learning-app-24-regular.png' },
];

export function Sidebar() {
  return (
    <Box sx={{
      width: 'var(--side-bar--width)',
      backgroundColor: 'var(--side-bar--bg)',
      color: 'white',
    }} role="presentation" >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img
                src="/header_img/Group 12519.png"
                alt="Custom Icon"
                style={{ width: 24, height: 24 }}
              />
            </ListItemIcon>
            <ListItemText primary="Ranoar" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link to={item.url ?? '/'}>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    src={item.icon}
                    alt={item.text}
                    style={{ width: 24, height: 24 }}
                  />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
}
