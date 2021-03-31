import "./styles.css";
import "./app-styles.css";


import {
  Header,
  Home,
  Sidebar,
  Avatar,
  Alert,
  Badge,
  Button,
  Card,
  Image,
  Input,
  Rating,
  List,
  Modal,
  FooterNav,
  FooterSocial,
  Navigation,
  Notify,
  Text,
  Snackbar,
  Slider
} from "./components";
import { useEffect, useState } from "react";

export default function App() {
  const components = [
    "home",
    "avatar",
    "alert",
    "badge",
    "button",
    "card",
    "image",
    "input",
    "list",
    "modal",
    "navigation",
    "rating",
    "slider",
    "notify",
    "text",
    "snackbar"
  ];
  const [route, setRoute] = useState("home");

  // implement staying on the same page on reload
  // useEffect(() => {
  //   localStorage.setItem({ currentPage: route });
  // }, [route]);

  return (
    <div className="App">
      {/* header */}
      <div className="header">
        <Header setRoute={setRoute} />
      </div>

      {/* Home */}
      {route === "home" && (
        <div className="home w-f56 pt-20 m-auto">
          <Home setRoute={setRoute} />
        </div>
      )}

      {/* container of sidebar and main content*/}
      <>
        {/* Home */}
        {route !== "home" && (
          <div className="grid-container w-f56 m-auto ">
            {/* sidebar */}

            {/*  Sidebar*/}
            {route !== "home" && (
              <div className="sidebar mt-24">
                <Sidebar setRoute={setRoute} route={route} />
              </div>
            )}

            {/* main */}
            <div className="main w-f56 m-auto pl-16 pt-4 mt-24 ">
              {/* button */}
              {route === "button" && (
                <div className="button">
                  <Button />
                </div>
              )}
              {/* card */}
              {route === "card" && (
                <div className="card-container">
                  <Card />
                </div>
              )}
              {/* avatar */}
              {route === "avatar" && (
                <div className="avatar-container">
                  <Avatar />
                </div>
              )}
              {/* badge */}
              {route === "badge" && (
                <div className="badge-container">
                  <Badge />
                </div>
              )}
              {/* alert */}
              {route === "alert" && (
                <div className="alert-container">
                  <Alert />
                </div>
              )}
              {/* image */}
              {route === "image" && (
                <div className="image-container">
                  <Image />
                </div>
              )}
              {/* input */}
              {route === "input" && (
                <div className="input-container">
                  <Input />
                </div>
              )}
              {/* rating */}
              {route === "rating" && (
                <div className="rating-container">
                  <Rating />
                </div>
              )}
              {/* modal */}
              {route === "modal" && (
                <div className="modal-container">
                  <Modal />
                </div>
              )}
              {/* snackbar */}
              {route === "snackbar" && (
                <div className="snackbar-container">
                  <Snackbar />
                </div>
              )}
              {/* slider */}
              {route === "slider" && (
                <div className="slider-container">
                  <Slider />
                </div>
              )}
              {/* list */}
              {route === "list" && (
                <div className="list-container">
                  <List />
                </div>
              )}
              {/* navigation */}
              {route === "navigation" && (
                <div className="navigation-container">
                  <Navigation />
                </div>
              )}
              {/* notify */}
              {route === "notify" && (
                <div className="notify-container">
                  <Notify />
                </div>
              )}
              {/* text */}
              {route === "text" && (
                <div className="text-container">
                  <Text />
                </div>
              )}
              {/* footer nav */}
              <div className="footer">
                <FooterNav
                  route={route}
                  components={components}
                  setRoute={setRoute}
                />
              </div>
              {/* footer social */}
              <div className="footer-social">
                <FooterSocial />
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
