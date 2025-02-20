import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { SearchBox } from '../search_bar';

export function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Chuyển hướng đến trang login
  const handleLoginClick = () => {
    handleMenuClose(); // Đóng menu trước
    navigate("/auth/login"); // Điều hướng đến trang đăng nhập
  };


  return (
    <Box
      sx={{
        backgroundColor: 'white', // Màu nền của header
        color: 'black', // Màu chữ
        boxShadow: 'none', // Xóa bóng mặc định
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Căn các phần tử sang 2 đầu
          alignItems: 'center',
          backgroundColor: 'white',
          borderBottom: '1px solid #E0E0E0',
        }}
      >
        {/* Tiêu đề bên trái */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Project
        </Typography>

        {/* Vùng chứa thanh tìm kiếm và các biểu tượng bên phải */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2, // Khoảng cách giữa các thành phần
          }}
        >
          {/* Thanh tìm kiếm */}
          <SearchBox />

          {/* Các biểu tượng bên phải */}
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Box
            display="flex"
            flexDirection="row"
            gap={1}
            onClick={handleMenuOpen}
            sx={{ cursor: 'pointer' }}
          >
            <IconButton edge="end" color="inherit" aria-label="account">
              <img
                src="/header_img/Ellipse 1.png"
                alt="User Icon"
                style={{ width: 32, height: 32, borderRadius: '50%' }}
              />
            </IconButton>
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Account</span>
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              sx: { mt: 1, minWidth: 150 },
            }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleLoginClick}>Login</MenuItem> {/* Chuyển hướng */}
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
}
