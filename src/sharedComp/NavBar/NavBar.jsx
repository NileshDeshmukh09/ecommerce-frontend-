import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slices/authSlice';
import { Avatar, Badge, IconButton, Menu, MenuItem, styled, Tooltip } from '@mui/material';
import { CiBoxes, CiShoppingCart, CiUser } from 'react-icons/ci';
import { MdLogout } from 'react-icons/md';
import { FaCartShopping } from "react-icons/fa6";
import { TbShoppingCartStar } from "react-icons/tb";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.cart);
    const { auth, role, user } = useSelector((state) => state.auth);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLogOut = () => {
        localStorage.clear();
        dispatch(logout());
        navigate("/");
    };

    return (
        <nav className='bg-white scroll-smooth  sticky top-0 z-50'>
            <div className='container mx-auto px-4 py-3 flex justify-around items-center'>
                <Link to="/" className='transition duration-300 '>
                       {/* <Logo /> */}
                       <img src={`https://zerodha.com/static/images/products/console.svg`} alt="GLORY" className='h-10'/>
                       
                </Link>
                <div className='flex-1 max-w-xl mx-4'></div>
                <div className='flex items-center space-x-4'>
                    <Tooltip title="Cart">
                        <IconButton aria-label="cart" onClick={() => navigate("/cart")}>
                            <StyledBadge badgeContent={cartItems.length} color="secondary">
                                <FaCartShopping />
                            </StyledBadge>
                        </IconButton>
                    </Tooltip>
                    {auth ? (
                        <div>
                            <Tooltip title="Profile">
                                <IconButton onClick={handleClick}>
                                    <Avatar
                                        alt={`${user?.name || user?.FirstName}`}
                                        src={`${import.meta.env.VITE_API_URI}/${user?.userImage}`}
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                    },
                                }}
                            >
                                <MenuItem onClick={() => { handleClose();  }}>
                                    <Avatar src={`${import.meta.env.VITE_API_URI}/${user?.userImage}`} /> Profile
                                </MenuItem>
                                {role === "user" ? (
                                    <MenuItem onClick={() => { handleClose(); }}>
                                        <CiShoppingCart className='mr-2' /> My Order
                                    </MenuItem>
                                ) : (
                                    <div>
                                       
                                    </div>
                                )}
                                <MenuItem onClick={handleLogOut}>
                                    <MdLogout className='mr-2' /> Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <div className='space-x-2'>
                            <Link to="/login" className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300'>Login</Link>
                            <Link to="/signup" className='px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300'>Signup</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBar