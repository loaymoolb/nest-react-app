import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'mui-image';
import React from 'react'

interface CardData {
  id: number;
  image: string;
  title: string;
  price: number;
  tiket: number;
  yield: number;
  daysLeft: number;
  sold: number;
}

interface CardGroupProps {
  cards: CardData[];
}

const Cards = ({ cards }: CardGroupProps) => {
  console.log(cards);
  return (
    <Box>
      <Grid container spacing="20px">
        {cards.map((card: CardData) => (
          <Grid item xs={12} sm={6}>
            <Card 
              key={card.id}
              sx={{ 
                background: `url(${card.image}) no-repeat center center`,                backgroundSize: 'cover', 
                height: 400, 
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))', 
                display: 'flex', 
                flexDirection: 'column'
              }}>
              <CardActionArea style={{ flexGrow: 1 }}>
                <CardContent sx={{ p: "20px 14px", textAlign: "left", position: "absolute", bottom: "0", width: "100%"}}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {card.title}
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <Typography variant="body2" component="p">
                        {card.price} Dhs
                      </Typography>
                      <Typography variant="body2" component="p">
                        Tiket - {card.tiket} Dhs
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" component="p">
                        Yield {card.yield}%
                      </Typography>
                      <Typography variant="body2" component="p">
                        Days left {card.daysLeft}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" component="p">
                        Sold {card.sold}%
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Cards