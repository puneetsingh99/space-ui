import "../../styles.css";
import "./sidebar-styles.css";

export const Sidebar = ({ route, setRoute }) => {
  return (
    <div className="text-left fixed bg-white sidebar-container">
      <ul className="list-none text-md pt-4 sidebar-list">
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
          className={`${route === "navigation" && "highlight"}`}
          onClick={() => setRoute("navigation")}
        >
          <a href="#">Navigation</a>
        </li>
        <li
          className={`${route === "rating" && "highlight"}`}
          onClick={() => setRoute("rating")}
        >
          <a href="#">Rating</a>
        </li>
        <li
          className={`${route === "slider" && "highlight"}`}
          onClick={() => setRoute("slider")}
        >
          <a href="#">Slider</a>
        </li>
        <li
          className={`${route === "notify" && "highlight"}`}
          onClick={() => setRoute("notify")}
        >
          <a href="#">Notify</a>
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
    </div>
  );
};
