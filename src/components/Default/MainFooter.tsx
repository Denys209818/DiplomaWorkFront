import { Container, Typography } from "@mui/material";




const stylesForJumbotron: React.CSSProperties = {
    marginTop: '4em',
    backgroundColor: '#BDD4D9',
    width: '100%',
    maxWidth: '100%',
  };

const MainFooter: React.FC = () => 
{
    return (
        <>
            <Container style={stylesForJumbotron} component="div" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Sticky footer
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'Pin a footer to the bottom of the viewport.'}
                    {'The footer will move as the main element of the page grows.'}
                </Typography>
                <Typography variant="body1">Sticky footer placeholder.</Typography>
            </Container>
        </>
    );
}

export default MainFooter;