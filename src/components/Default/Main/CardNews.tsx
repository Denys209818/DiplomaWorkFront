import { useState } from "react";

import './styles/cardNews.css';
import { styled } from "@mui/material/styles";
import { Box, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

const TextTiitle = styled("div")({
  color: "white",
  padding: 12,
  fontFamily: "cambria",
  fontSize: 30,
});

const CardNews = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box
          marginTop={2}
          marginBottom={0}
          sx={{
            bgcolor: "#000000",
            height: "8vh",
            width: "100%",
            whiteSpace: "normal",
          }}
        >
          <h1 className="newTitle">Останні новини</h1>
        </Box>
        <Box
          sx={{
            bgcolor: "#dcdcdc",
          }}
        >
          <Grid container spacing={0} margin={0}>
            <Card
              sx={{
                maxWidth: 345,
                marginTop: 2,
                marginBottom: 2,
                marginLeft: 2,
                marginRight: 2,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/card1.jpg"
                alt="Stoltenberg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Саміт НАТО
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p"
                >
                  Україна має отримати більше важкого озброєння від країн НАТО -
                  Столтенберг
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button size="small" color="primary">
                  Читати більше{" "}
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{
                maxWidth: 345,
                marginTop: 2,
                marginBottom: 2,
                marginLeft: 2,
                marginRight: 2,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/card1.jpg"
                alt="Stoltenberg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Саміт НАТО
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p"
                >
                  Україна має отримати більше важкого озброєння від країн НАТО -
                  Столтенберг
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button size="small" color="primary">
                  Читати більше{" "}
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{
                maxWidth: 345,
                marginTop: 2,
                marginBottom: 2,
                marginLeft: 2,
                marginRight: 2,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/card1.jpg"
                alt="Stoltenberg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Саміт НАТО
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p"
                >
                  Україна має отримати більше важкого озброєння від країн НАТО -
                  Столтенберг
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button size="small" color="primary">
                  Читати більше{" "}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default CardNews;
