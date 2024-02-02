import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const categories = [
  {  options: ['Option 1', 'Option 2', 'Option 3'], image: "../images/category/Fashion.webp" },
  {  options: ['Option A', 'Option B', 'Option C'], image: "../images/category/Appliances.webp" },
  {  options: ['Option X', 'Option Y', 'Option Z'], image: "../images/category/Electronics.webp" },
  {  options: ['Option I', 'Option II', 'Option III'], image: "../images/category/Groceries.webp" },
  {  options: ['Option I', 'Option II', 'Option III'], image: "../images/category/Home&Furniture.webp" },
  {  options: ['Option I', 'Option II', 'Option III'], image: "../images/category/Mobiles.webp" },
  {  options: ['Option I', 'Option II', 'Option III'], image: "../images/category/Toys.webp" },
  {  options: ['Option I', 'Option II', 'Option III'], image: "../images/category/Travel.webp" },
  {  options: ['Option I', 'Option II', 'Option III'], image: "../images/category/TwoWheelers.webp" },
];

const NavigationBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenuClick = (event, category) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    const handleOptionClick = (option) => {
      console.log(`Selected option: ${option}`);
      handleMenuClose();
    };
  
    return (
      <Toolbar>
        {categories.map((category, index) => (
          <div key={category.name} style={{ marginRight: index !== categories.length - 1 ? '10px' : '0' }}>
            <Button
              aria-controls={`menu-${category.name}`}
              aria-haspopup="true"
              onClick={(e) => handleMenuClick(e, category)}
              style={{ padding: '15px', margin: '8px' }} // Add margin for spacing
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Button>
            <Menu
              id={`menu-${category.name}`}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {category.options.map((option) => (
                <MenuItem key={option} onClick={() => handleOptionClick(option)}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ))}
      </Toolbar>
    );
  };

export default NavigationBar;
