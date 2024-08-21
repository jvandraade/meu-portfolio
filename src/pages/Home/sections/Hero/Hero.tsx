import { Button, Container, Grid, styled, Typography } from "@mui/material";
import portfolio from "../../../../assets/images/portfolio.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",
    }));

    const StyledImage = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImage src={portfolio} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography
                                color="primary"
                                variant="h1"
                                textAlign="center"
                            >
                                João Vitor Andrade Santos
                            </Typography>
                            <Typography
                                color="primary"
                                variant="h2"
                                textAlign="center"
                            >
                                I'm a Developer Software
                            </Typography>
                            <Grid
                                container
                                display="flex"
                                justifyContent="center"
                            >
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    display="flex"
                                    justifyContent="center"
                                >
                                    <Button>
                                        <DownloadIcon />
                                        Baixar CV
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    display="flex"
                                    justifyContent="center"
                                >
                                    <Button>
                                        <EmailIcon />
                                        Contato
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
};

export default Hero;
