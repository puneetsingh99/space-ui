import "../../styles.css";
import "./header-styles.css";
import { Github } from "../../assets";
import space from "../../assets/space.svg";

export const Header = ({ setRoute }) => {
  return (
    <header className="w-full bg-white p-4 header-container">
      <div className="w-f56 mx-auto flex justify-between">
        <div className="logo cursor-pointer" onClick={() => setRoute("home")}>
          <h1 className="text-2xl">
            {/* <span role="img" aria-label="jsx-a11y">
              🌌{" "}
            </span> */}
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
          <p className="text-lg mr-4">v1.0</p>{" "}
          <p className="header__link" onClick={() => setRoute("avatar")}>
            {" "}
            Docs
          </p>{" "}
          <span className="github-icon ">
            <a
              href={`https://www.instagram.com/thelastspacetraveller/`}
              className="flex items-center"
            >
              <Github />
            </a>
          </span>{" "}
        </div>
      </div>
    </header>
  );
};
