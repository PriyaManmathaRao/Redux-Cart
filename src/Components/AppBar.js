import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon  from "@mui/icons-material/ShoppingCart";
import  FavoriteIcon  from "@mui/icons-material/Favorite";
import  PersonIcon  from "@mui/icons-material/Person";
import {Divider, ListItemButton, ListItemIcon} from "@mui/material";
import { AppBarContainer, AppBarHeader, MyList } from '../Style/AppBar/Index';
import { Colors } from '../Style/Theme/Index';
export default function AppBar(){
    return(
        <AppBarContainer>
            <AppBarHeader
            sx={{ marginBottom: '10px' }}
            >Shopping Cart</AppBarHeader>
            <MyList type='row'>
                <ListItemButton sx={{
                    
                    width: '1px', // Set the desired width
                    height: '1px',
                                justifyContent: 'center',
                
                            }}>
                    <ListItemIcon
                    sx={{
                        flexGrow:0
                    }}
                    >
                        <SearchIcon/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                 sx={{
                    width: '10px', // Set the desired width
        height: '10px',
                    justifyContent: 'center',
                }}>
                    <ListItemIcon
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        flexGrow:0
                    }}
                    >
                         <ShoppingCartIcon/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                 sx={{
               
                    width: '10px', // Set the desired width
                    height: '10px',
                    justifyContent: 'center',
    
                }}>
                    <ListItemIcon
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        flexGrow:0
                    }}
                    >
                        <FavoriteIcon/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                 sx={{
                    
        width: '10px', // Set the desired width
        height: '10px',
                    justifyContent: 'center',
    
                }}
                >
                    <ListItemIcon
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        flexGrow:0
                    }}
                    >
                         <PersonIcon/> 
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
            </MyList>
        </AppBarContainer>
    )
}