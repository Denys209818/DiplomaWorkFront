import { BorderBottom } from "@mui/icons-material";
import {Box, Grid, Link, Container} from "@mui/material";
import Column from "antd/lib/table/Column";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

import PublicIcon from '@mui/icons-material/Public';
import TranslateIcon from '@mui/icons-material/Translate';

const stylesForJumbotron: React.CSSProperties = {
    marginTop: '4em',
    backgroundColor: '#2f3030',
    width: '100%',
    maxWidth: '100%',
    color: 'silver',
  };

const offTextDecoration: React.CSSProperties =  {
    textDecoration: 'none',
}
const MainFooter: React.FC = () => 
{
    return (
        <>
            <Box style={stylesForJumbotron} sx={{ flexDirection: 'row' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={5} sm={2} lg={2}>
                            <Box fontWeight={'bold'} fontSize={'h7.fontSize'} color={'white'} > Products </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                iDEs
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                .NET & Visual Studio
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Teams Tools
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Plugins
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Education
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Languages
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                All products
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={5} sm={2} lg={2}>
                            <Box fontWeight={'bold'} fontSize={'h7.fontSize'} color={'white'} > Solutions </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                C++ Tools
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Data Tools
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                DevOps
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Education
                                </Link>
                            </Box>
                            <Box >
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Game Development
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Software Development
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Tools For Business
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Quality Assurance
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={5} sm={2} lg={2}>
                            <Box fontWeight={'bold'} fontSize={'h7.fontSize'} color={'white'} > Inltlatives </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Kotlin
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                JetBrains Mono
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                JetBrains Research
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Open Source Projects
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={5} sm={2} lg={2}>
                            <Box fontWeight={'bold'} fontSize={'h7.fontSize'} color={'white'} > Community </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Acedemic Licensing
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Open Source Support
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                User Groups
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Events Partnership
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Developer Recognition 
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={5} sm={2} lg={2}>
                            <Box fontWeight={'bold'} fontSize={'h7.fontSize'} color={'white'} > Resources </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Sales Support
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Product Support
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Licensing FAQ
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Documentation 
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Early Access
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Events and Webinars
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Newsletters
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Industry Reports 
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Blog
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Desktop Art
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={5} sm={2} lg={2}>
                            <Box fontWeight={'bold'} fontSize={'h7.fontSize'} color={'white'}> Company </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                About
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Contacts
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Careers
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                News
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Customers & Awards
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Brand Assets
                                </Link>
                            </Box>
                            <Box>
                                <Link style={offTextDecoration} href="/" color="inherit">
                                Partners and Resellers
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={15} sm={25}>
                            <Box borderBottom={1}> </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} pt={{ xs: 2, sm: 2 }} pb={{ xs: 2, sm: 3 }}>
                        <Box mr={2}>
                            <Link href="/" color="inherit">
                                <FacebookIcon></FacebookIcon>
                            </Link>
                        </Box>
                        <Box mr={2}>
                            <Link href="/" color="inherit">
                                <TwitterIcon></TwitterIcon>
                            </Link>
                        </Box>
                        <Box mr={2}>
                            <Link href="/" color="inherit">
                                <LinkedInIcon></LinkedInIcon>
                            </Link>
                        </Box>
                        <Box mr={2}>
                            <Link href="/" color="inherit">
                                <YouTubeIcon></YouTubeIcon>
                            </Link>
                        </Box>
                        <Box mr={2}>
                            <Link href="/" color="inherit">
                                <InstagramIcon></InstagramIcon>
                            </Link>
                        </Box>
                        <Box mr={2}>
                            <Link href="/" color="inherit">
                                <GitHubIcon></GitHubIcon>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                <GoogleIcon></GoogleIcon>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid container spacing={1} item xs={8}>
                        <Box mr={2}>
                            <Link style={offTextDecoration} href="/" color="inherit">
                                Privacy & Security
                            </Link>
                        </Box>
                        <Box mr={2}>
                            <Link style={offTextDecoration} href="/" color="inherit">
                                Terms of Use 
                            </Link>
                        </Box>
                        <Box mr={2}>
                            <Link style={offTextDecoration} href="/" color="inherit">
                                Trademarks
                            </Link>
                        </Box>
                        <Box mr={2}>
                            <Link style={offTextDecoration} href="/" color="inherit">
                                Legal
                            </Link>
                        </Box>
                        <Box mr={2}>
                            <Link style={offTextDecoration} href="/" color="inherit">
                                Genuine Tools
                            </Link>
                        </Box>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        VOLONTER.IO &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default MainFooter;