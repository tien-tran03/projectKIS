import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ButtonCreateNewApp: React.FC = () => {
    const navigate = useNavigate(); 
    const handleNavigateToAddElementApp = () => {
      
        navigate("/add-element-app");
      };
    

    const handleClose = () => {
        navigate('/dashboard'); // Điều hướng về trang Dashboard
    };
    return (
        <Box>
            {/* Header Content */}
            <Box
                sx={{
                    width: '87%',
                    position: 'fixed', // Sticks to the top
                    top: 0, // Align at the top
                    zIndex: 1000, // Ensure visibility
                    padding: '16px 32px', // Padding for header
                    backgroundColor: '#fff', // White background for header
                    borderBottom: '1px solid #ccc', // Border below header
                }}
            >
                {/* Title and Close Button */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontSize: '18px', color: '#000' }}>
                        Creating new app
                    </Typography>
                    <Button
                        onClick={handleClose} // Gọi hàm điều hướng khi nhấn nút
                        sx={{
                            minWidth: 'auto',
                            padding: 0,
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#000',
                            background: 'none',
                            border: 'none',
                            '&:hover': { color: '#555' },
                        }}
                    >
                        ×
                    </Button>
                </Box>

                {/* Divider */}
                <Divider sx={{ marginY: 2, borderColor: '#ccc' }} />

                {/* Action Content */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '16px',
                            color: '#000',
                        }}
                    >
                        Use Pre-Designed Template
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            textTransform: 'none',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '24px',
                            color: '#FFF',
                            background: '#0081BD',
                            padding: '8px 16px',
                            borderRadius: '4px',
                        }}
                    >
                        <Typography onClick={handleNavigateToAddElementApp} sx={{ whiteSpace: 'nowrap' }}>Start from scratch</Typography>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M4 12H20M13 5L20 12L13 19"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        backgroundColor: '#f0f0f0', // Grey background
                        padding: '20px 24px', // Padding mới
                        display: 'flex', // Sử dụng flexbox
                        justifyContent: 'space-between', // Căn đều các ảnh
                        alignItems: 'flex-start', // Căn ảnh từ trên xuống
                        alignSelf: 'stretch', // Đảm bảo container kéo dài đầy đủ
                        marginTop: '16px',
                        borderRadius: '4px',
                    }}
                >
                    {/* Images */}
                    <img
                        src="/demo_template_new_app/image 12.png"
                        alt="Image 1"
                        style={{
                            width: '244.61px',
                            height: '529.32px',
                            borderRadius: '8px',
                            flexShrink: 0,
                        }}
                    />
                    <img
                        src="/demo_template_new_app/image 13.png"
                        alt="Image 2"
                        style={{
                            width: '244.61px',
                            height: '529.32px',
                            borderRadius: '8px',
                            flexShrink: 0,
                        }}
                    />
                    <img
                        src="/demo_template_new_app/image 14.png"
                        alt="Image 3"
                        style={{
                            width: '244.61px',
                            height: '529.32px',
                            borderRadius: '8px',
                            flexShrink: 0,
                        }}
                    />
                    <img
                        src="/demo_template_new_app/image 14.png"
                        alt="Image 4"
                        style={{
                            width: '244.61px',
                            height: '529.32px',
                            borderRadius: '8px',
                            flexShrink: 0,
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};
