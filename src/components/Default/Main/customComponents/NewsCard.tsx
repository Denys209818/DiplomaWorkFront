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
import { defaultImage } from '../../../../constants/defaultConsts';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Badge } from '@mui/material';

export interface ICardInfo 
{
    image: string,
    title: string,
    description: string,
    postTitle: string,
    groupImage:string,
    likes: number
}

const NewsCard: React.FC<ICardInfo> = ({image, title, description, postTitle, groupImage, likes}: ICardInfo) => 
{
    return (<>
    <Card sx={{ maxWidth: 345 }} className="card-news">
        
      <CardHeader
        avatar={image ? <Avatar src={defaultImage +"Group/" + groupImage}></Avatar> :
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader={postTitle}
      />
      <CardMedia
        component="img"
        height="194"
        image={defaultImage+ "Post/" +image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: description }}>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Badge badgeContent={likes} color="primary">

         <ThumbUpAltIcon/>
        </Badge>
      </CardActions>
    </Card>
    </>);
}

export default NewsCard;