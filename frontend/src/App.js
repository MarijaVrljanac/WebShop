import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import "./App.css";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Proizvodi from "./components/Proizvodi";
import Korpa from "./components/Korpa";
import Kontakt from "./components/Kontakt";
import WelcomePage from "./components/WelcomePage";
import AdminDashboard from "./components/AdminDashboard";
import Poruke from "./components/Poruke";
import Adresa from "./components/Adresa";
import GiftBox from "./components/GiftBox";
import NotFound from "./components/NotFound";
import axios from "axios";

import DodajProizvod from "./components/DodajProizvod";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0);
  const [token, setToken] = useState();
  const [user_id, setUserId] = useState(0);

  const [poruke, setPoruke] = useState([]);
  axios
    .get("api/poruke")
    .then((res) => {
      setPoruke(res.data);
      //console.log(poruke)
    })
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    });
  const [products] = useState([
    {
      id: 1,
      image:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/rainbow-candy-lolipop-shana-novak.jpg",
      name: "Lizalica",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price: 250,
      amount: 0,
      category: "lizalica",
    },
    {
      id: 2,
      image:
        "https://madus.com.np/wp-content/uploads/2020/12/Chocolate-cake-recipe-1200a.jpg",
      name: "Cokoladna torta sa lesnicima",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price: 2000,
      amount: 0,
      category: "torta",
    },
    {
      id: 3,
      image:
        "https://previews.123rf.com/images/mazzzur/mazzzur1808/mazzzur180800134/107633298-assorted-gummy-candies-in-the-shop-top-view-jelly-sweets-.jpg ",
      name: "Gumene bombone u raznim oblicima",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price: 750,
      amount: 0,
      category: "bombone",
    },
    {
      id: 4,
      image:
        "http://images.kurir.rs/slika-620x419/gumene-bombone-foto-profimedia-1460386556-884283.jpg",
      name: "Gumene bombone gliste",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price: 300,
      amount: 0,
      category: "bombone",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/photos/ice-cream-picture-id500545362?k=20&m=500545362&s=612x612&w=0&h=47BAAM62P7qU-m8rZcAJVJcINlidqv5jxvKj58VVBtk=",
      name: "Sareni sladoled",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price: 169,
      amount: 0,
      category: "sladoled",
    },
    {
      id: 6,
      image:
        "https://thumbs.dreamstime.com/b/lollipop-colorful-isolated-against-white-30521506.jpg",
      name: "Lizalica",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price: 984,
      amount: 0,
      category: "lizalica",
    },
    {
      id: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55J1g26iCVmkbTn7MhsmLTK9ava4aP-EyZw&usqp=CAU",
      name: "Cokoladna torta",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price: 354,
      amount: 0,
      category: "torta",
    },
    {
      id: 8,
      image:
        "https://i2.wp.com/mnemagazin.me/wp-content/uploads/2017/02/gumene-bombone-e1486640233242.jpg?ssl=1",
      name: "Gumene bombone u raznim oblicima",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price: 741,
      amount: 0,
      category: "bombone",
    },
    {
      id: 9,
      image: "https://s3.envato.com/files/240029552/DSC_2558.jpg",
      name: "Gumene bombone lubenica",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price: 974,
      amount: 0,
      category: "bombone",
    },
    {
      id: 10,
      image:
        "https://www.thespruceeats.com/thmb/RrP9qTWy2BbntDB6GCwWi8Yy29U=/3000x2000/filters:fill(auto,1)/UbeIceCreamHERO-ae953a4c3ede4690bd2f0ccbc104ea12.jpg",
      name: "Ljubicasti sladoled",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price: 190,
      amount: 0,
      category: "sladoled",
    },
  ]);

  function refreshCart() {
    let u_korpi = products.filter((p) => p.amount > 0);
    setCartProducts(u_korpi);
  }
  function addProduct(name, id) {
    setCartNum(cartNum + 1);

    products.forEach((p) => {
      if (p.id === id) {
        p.amount++;
        setSumPrice(sum + p.price);
      }
    });
    refreshCart();
  }

  function removeProduct(name, id) {
    setCartNum(cartNum - 1);
    products.forEach((p) => {
      if (p.id === id) {
        if (p.amount === 0) {
          return;
        } else {
          p.amount--;
        }
      }
    });
    refreshCart();
  }

  function addToken(auth_token) {
    setToken(auth_token);
  }

  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum} token={token}></NavBar>
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>} />
        <Route
          path="/kupovina"
          element={<Proizvodi onAdd={addProduct} onRemove={removeProduct} />}
        />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/login" element={<LoginPage addToken={addToken} user_id={user_id}/>} />
        <Route path="/logout" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/poruke" element={<Poruke poruke={poruke} />} />
        <Route path="/admin/addProduct" element={<DodajProizvod />} />
        <Route
          path="/korpa" // /cart*prihvata sve putanje; konkretna putanja bi bila npr /cart/:id
          element={<Korpa products={cartProducts} sum={sum} cartNum={cartNum} />}
        />
        <Route path="/kontakt" element={<Kontakt></Kontakt>} />
        <Route path="/adresa" element={<Adresa></Adresa>} />
        <Route path="/giftbox" element={<GiftBox></GiftBox>} />
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
