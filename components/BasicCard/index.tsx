import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { iComments, iUsers, iAllData } from "../../utility/type"

interface Props {
  cardPost: iAllData;
  cardComments?: iComments,
  cardUser?: iUsers,
  innerRef?: any
}
interface postCardProps {
  main: string,
  detail: string
}


const BasicCard: FC<Props> = ({ cardPost, innerRef }) => {

  const [postCard, setPostCard] = useState<postCardProps>({
    main: "block",
    detail: "none"
  })

  const buttonClick = () => {
    if (postCard.main === "block") {
      setPostCard({ main: "none", detail: "block" })
    } else
      setPostCard({ main: "block", detail: "none" })
  }

  return (
    <Card sx={{ minWidth: 275, margin: 5 }} ref={innerRef}>
      <div style={{ display: postCard.main }}>
        <CardContent>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            {cardPost.id}
          </Typography>
          <Typography variant="h5" component="div">
            {cardPost.post_title}
          </Typography>
          <Typography variant="body2">
            {cardPost.post_body.substring(0, 100)}
            <br />
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button size="small" onClick={buttonClick}>Learn More</Button>
        </CardActions>
      </div>
      <div style={{ display: postCard.detail }}>
        <CardContent>
          <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
            {cardPost.id}
          </Typography>
          <Typography sx={{ fontSize: 12 }} component="div">
            user name: {cardPost.username} | user_email: {cardPost.email}
          </Typography>
          <Typography variant="h5" component="div">
            {cardPost.post_title}
          </Typography>
          <Typography variant="body2">
            {cardPost.post_body}
            <br />
          </Typography>
          <Typography variant="body2">
            <Typography component="span" sx={{ fontWeight: 700, fontSize: 12 }}>comments:</Typography>
            <br />
            {cardPost.comments}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button size="small" onClick={buttonClick}>Close</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default BasicCard