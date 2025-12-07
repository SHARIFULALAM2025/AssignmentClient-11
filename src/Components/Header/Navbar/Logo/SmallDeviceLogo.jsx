import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';

const SmallDeviceLogo = () => {
    return (
      <div className='flex items-center'>
        <Avatar
          sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          src="https://i.ibb.co.com/8gVD0cGv/images.png"
        />
        <Typography
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontSize: 10,

            fontFamily: 'monospace',
            fontWeight: 800,
            wordSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          BookCourier
        </Typography>
      </div>
    )
};

export default SmallDeviceLogo;