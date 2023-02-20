import React, { FC, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { iComments, iUsers, iAllData, iPosts } from "../../utility/type"
import { useRouter } from 'next/router';
interface CardProps {
  cardPost: iPosts;
  cardComments?: iComments,
  cardUser?: iUsers,
  innerRef?: any
}

interface CardsProps {
  cardList: Array<iPosts>,
  lastBookElementRef: any
}


 const BasicCard: FC<CardProps> = ({ cardPost, innerRef }) => {
  const router = useRouter()

  const buttonClick = () => {
    router.push(`/card/${cardPost.id}`)
  }

  return (
    <Card sx={{ minWidth: 275, margin: 5 }} ref={innerRef}>
        <CardContent>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            {cardPost.id}
          </Typography>
          <Typography variant="h5" component="div">
            {cardPost.title}
          </Typography>
          <Typography variant="body2">
            {cardPost.body.substring(0, 100)+"..." }
            <br />
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button size="small" onClick={buttonClick}>Learn More</Button>
        </CardActions>
    </Card>
  );
}


export const BasicCards: FC<CardsProps> = ({ cardList, lastBookElementRef }) => {
  return <>
      {cardList.map((card: iPosts, key: number) => {
          if (cardList.length === key + 1) {
              return <BasicCard key={card.id} cardPost={card} innerRef={lastBookElementRef} />
          } else {
              return <BasicCard key={card.id} cardPost={card} />
          }
      })}
  </>

}
