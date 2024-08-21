import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
    const StyledToolBar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evely",
    }));

    return (
        <>
            <AppBar position="absolute">
                <StyledToolBar>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Habilidades</MenuItem>
                    <MenuItem>Projetos</MenuItem>
                </StyledToolBar>
            </AppBar>
        </>
    );
};

export default NavBar;
