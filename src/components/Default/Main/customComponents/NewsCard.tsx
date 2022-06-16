import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export interface ICardInfo 
{
    image: string,
    title: string,
    description: string,
}

const NewsCard: React.FC<ICardInfo> = ({image, title, description}: ICardInfo) => 
{
    return (<>
    <Card sx={{ maxWidth: 345 }} className="card-news">
        
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
        <NextPlanIcon fontSize='large'/>
        </IconButton>
        <IconButton>
        <AddCircleIcon fontSize='large'/>
        </IconButton>
      </CardActions>
    </Card>
    </>);
}

export default NewsCard;