import { Box, Card, Container, Grid, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  // const cards = [
  //   {
  //     image: 'https://source.unsplash.com/random/400x200',
  //     title: 'Card 1',
  //     price: 6500000,
  //     tiket: 60000,
  //     yield: 9.25,
  //     days_left: 150,
  //     sold: 75,
  //   },
  // ];

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch('http://localhost:3000/cards');
      const data = await response.json();
      setCards(data);
    };
    fetchProductData();
  }, []);

return (
    <Box>
      <Navbar />
      <Header />
      <Box sx={{
        background: "#fff",
        m: {xs: "36px", md: "50px 80px"}
      }}>
        <Typography variant="h4" textAlign="left" mb="20px">
          Open Deals
        </Typography>
        <Cards cards={cards} />
      </Box>
    </Box>
  )
}

export default Home