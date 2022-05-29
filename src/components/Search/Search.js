import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 26,
    backgroundColor: alpha(theme.palette.common.white, 1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.75),
    },
    marginLeft: 0,
    width: '48%',
    margin: '0 26%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   width: 'auto',
    // },
  }));
  
 export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
 export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '96%',
    height: 50,
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: "100%",
        '&:focus': {
          width: '95%',
        },
      },
    },
  }));