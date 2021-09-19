import { Github, Hamburger, HamburgerClose } from "../../assets";
import space from "../../assets/space.svg";
import { useState } from "react";

export const Header = ({ route, setRoute }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full bg-white p-4 header-container">
      <div className="mx-auto flex justify-between header-content">
        <div className="logo cursor-pointer" onClick={() => setRoute("home")}>
          <h1 className="text-2xl">
            <span className="flex items-center">
              <img
                src={space}
                alt=""
                width="50px"
                height="40px"
                className="mr-2"
              />
              Space UI
            </span>
          </h1>
        </div>
        <div className="text-gray-400 text-2xl flex items-center">
          <p className="text-lg mr-4 version">v1.0</p>
          <p className="header__link" onClick={() => setRoute("avatar")}>
            Docs
          </p>
          <span className="github-icon ">
            <a
              href={`https://github.com/puneetsingh99/space-ui/`}
              className="flex items-center"
            >
              <Github />
            </a>
          </span>

          <span
            className="hamburger"
            onClick={() => setShowMenu((currState) => !currState)}
          >
            <Hamburger />
          </span>

          {showMenu && (
            <section className="header-sidebar-menu">
              <ul className="sidebar__links">
                <li
                  className="link hamburger--close"
                  onClick={() => setShowMenu((currState) => !currState)}
                >
                  {<HamburgerClose />}
                </li>
                {/* links */}
                <li
                  className={`${route === "avatar" && "highlight"}`}
                  onClick={() => setRoute("avatar")}
                >
                  <a href="#">Avatar</a>
                </li>
                <li
                  className={`${route === "alert" && "highlight"}`}
                  onClick={() => setRoute("alert")}
                >
                  <a href="#">Alert</a>
                </li>
                <li
                  className={`${route === "badge" && "highlight"}`}
                  onClick={() => setRoute("badge")}
                >
                  <a href="#">Badge</a>
                </li>
                <li
                  className={`${route === "button" && "highlight"}`}
                  onClick={() => setRoute("button")}
                >
                  <a href="#">Button</a>
                </li>
                <li
                  className={`${route === "card" && "highlight"}`}
                  onClick={() => setRoute("card")}
                >
                  <a href="#">Card</a>
                </li>
                <li
                  className={`${route === "image" && "highlight"}`}
                  onClick={() => setRoute("image")}
                >
                  <a href="#">Image</a>
                </li>
                <li
                  className={`${route === "input" && "highlight"}`}
                  onClick={() => setRoute("input")}
                >
                  <a href="#">Input</a>
                </li>
                <li
                  className={`${route === "list" && "highlight"}`}
                  onClick={() => setRoute("list")}
                >
                  <a href="#">List</a>
                </li>
                <li
                  className={`${route === "modal" && "highlight"}`}
                  onClick={() => setRoute("modal")}
                >
                  <a href="#">Modal</a>
                </li>
                <li
                  className={`${route === "rating" && "highlight"}`}
                  onClick={() => setRoute("rating")}
                >
                  <a href="#">Rating</a>
                </li>
                <li
                  className={`${route === "text" && "highlight"}`}
                  onClick={() => setRoute("text")}
                >
                  <a href="#">Text</a>
                </li>
                <li
                  className={`${route === "snackbar" && "highlight"}`}
                  onClick={() => setRoute("snackbar")}
                >
                  <a href="#">Snackbar</a>
                </li>
              </ul>
            </section>
          )}
        </div>
      </div>
    </header>
  );
};
