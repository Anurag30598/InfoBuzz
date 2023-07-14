
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';

const StyledApp = styled(AppBar)`
        background: #fff;
        height: 70px;
`;
    
const MenuIcon = styled(Menu)`
        color: #000;
`;
    
const Image = styled('img')({
        height: 70,
        margin: 'auto',
        paddingRight: 70
})

const Header = () => {
    const url = 'https://imgtr.ee/images/2023/07/14/fd8ce2a4fbd47ac27981df34fdc75ef4.png';

    return (
        <StyledApp>
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt="logo" />
            </Toolbar>
        </StyledApp>
    )
}

export default Header;