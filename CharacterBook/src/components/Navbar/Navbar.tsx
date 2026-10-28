/* -----------> Importing  React components   ----*/
import { Link } from  'react-router-dom';
import styled from '@emotion/styled';

/* -----------> Importing  Material Icons   ----*/
import  CottageIcon  from '@mui/icons-material/Cottage';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

/* -----------> Importing Styles   ----*/
import { NavbarStyled } from './NavbarStyled.styles';

const StyledCottageIcon = styled(CottageIcon)`
    color: #242424;
    transition: color .2s ease;

  &:hover {
    color: #00ffd5;
  }
`;

const StyledLocalFireDepartmentIcon = styled(LocalFireDepartmentIcon)`
   color: #242424;
    transition: color .2s ease;

  &:hover {
    color: #00ffd5;
  }
`;

export const Navbar = () => {
    return (
        <NavbarStyled>
            <ul>
                <li className='nav_element--li'>
                <Link to="/lobby">
                    <StyledCottageIcon sx={{ fontSize: 40 }}/>
                </Link>
            </li>

            <li className='nav_element--li'>
                <Link to="/missions">
                    <StyledLocalFireDepartmentIcon sx={{ fontSize: 40 }}/>
                </Link>
            </li>
        </ul>
        </NavbarStyled>  
            );
    };
