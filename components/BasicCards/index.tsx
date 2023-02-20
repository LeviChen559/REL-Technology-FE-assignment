import React, { FC, useState,MouseEvent } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { iComments, iUsers, iAllData } from "../../utility/type"
import Box from '@mui/material/Box';

interface CardProps {
  cardPost: iAllData;
  innerRef?: any,
  onClick:() => {}
}
interface postCardProps {
  main: string,
  detail: string
}
interface CardsProps {
  cardList: Array<iAllData>,
  lastBookElementRef: any,
  onClick:() => {}
}


 const BasicCard: FC<CardProps> = ({ cardPost, innerRef,onClick }) => {

  const [postCard, setPostCard] = useState<postCardProps>({
    main: "block",
    detail: "none"
  })

  const showDetail = () => {
    if (postCard.main === "block") {
      setPostCard({ main: "none", detail: "block" })
      onClick()
  
    } else {
      setPostCard({ main: "block", detail: "none" })
    }
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
          <Button size="small" onClick={showDetail}>Learn More</Button>
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
          <Box>
            <Typography component="span" sx={{ fontWeight: 700, fontSize: 12 }}>comments:</Typography>
            { cardPost.comments&&(cardPost.comments).map((comment,index:number)=>{
            return <div key={index}>
            <Typography  sx={{ fontSize: 12, fontWeight:600}} >
              {comment.name}
            </Typography>
            <Typography  sx={{ fontSize: 12, }} >
              {comment.body}
            </Typography>
            </div>
            })}
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button size="small" onClick={showDetail}>Close</Button>
        </CardActions>
      </div>
    </Card>
  );
}


export const BasicCards: FC<CardsProps> = ({ cardList, lastBookElementRef,onClick }) => {

  return <>

      {cardList.map((card: iAllData, key: number) => {
          if (cardList.length === key + 1) {
              return <BasicCard key={card.id} cardPost={card} innerRef={lastBookElementRef} onClick={onClick}/>

          } else {

              return <BasicCard key={card.id} cardPost={card} onClick={onClick}/>
          }
      })}
  </>

}
