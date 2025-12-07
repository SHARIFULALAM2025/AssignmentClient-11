import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';

const Logo = () => {
    return (
      <div className='flex'>
        <Avatar
          sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          src="https://i.ibb.co.com/8gVD0cGv/images.png"
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            ml: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
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

export default Logo;