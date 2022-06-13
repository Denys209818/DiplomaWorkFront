import React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Button, Card, CardActions, CardContent, CssBaseline, Container, Grid, Typography } from '@mui/material';

import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const tiers = [
  {
    title: 'Групи',
    image: '/images/info1.jpg',
    text: 'Оберіть групу у вашій місцевості та намагайтеся приймати участь у різних проєктах та долучайтесь до різних акцій'
  },
  {
    title: 'Профіль',
    image: '/images/profile1.jpg',
    text: 'У вашому профілі є всі необхідні інструменти для створення груп і публікацій повідомлень. Створюйте контент!'
  },
  {
    title: 'Новини',
    image: '/images/news1.jpg',
    text: 'У розділі "Новини" ви знайдете найпопулярніші завдання, які зібрали найбільше лайків протягом тижня'
  },
];

const stylesForBlock: React.CSSProperties = {
  marginTop: '2em',
};

const stylesForJumbotron: React.CSSProperties = {
  marginTop: '4em',
  backgroundColor: '#BDD4D9',
  width: '100%',
  maxWidth: '100%',
};

const ContentCardsMain: React.FC = () => {
  return (<>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <Container style={stylesForBlock} maxWidth="md" component="main">
      <Grid container spacing={5} 
      direction="row"
      justifyContent="space-evenly"
      alignItems="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title + "contentCard"}
            xs={12}
            md={6}
            lg={4}
            
          >
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={tier.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {tier.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tier.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Перейти
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>


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

export default ContentCardsMain;