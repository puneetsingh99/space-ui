import "../../styles.css";
import "./footer-styles.css";
import { Arrow, ArrowRight } from "../../assets";

export const FooterNav = ({ route, components, setRoute }) => {
  const currIndex = components.indexOf(route);
  const prevIndex = currIndex === 0 ? currIndex : currIndex - 1;
  const nextIndex =
    currIndex === components.length - 1 ? currIndex : currIndex + 1;

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const prevComponentRaw = components[prevIndex];
  const nextComponentRaw = components[nextIndex];

  const prevComponent = prevIndex === -1 ? "" : capitalize(prevComponentRaw);
  const nextComponent = nextIndex === -1 ? "" : capitalize(nextComponentRaw);

  return (
    <div className="w-full m-auto mb-8 flex justify-between mb-8">
      {/* <button className="btn">
        <Arrow />
        <span className="btn-text"> Primary </span>
      </button> */}
      <button
        className="flex btn btn-outline border-none custom-btn"
        onClick={() => setRoute(prevComponentRaw)}
      >
        <Arrow />
        <span className="btn-text"> {prevComponent} </span>
      </button>
      <button
        className="flex items-center btn btn-outline border-none custom-btn"
        onClick={() => setRoute(nextComponentRaw)}
      >
        <span className="btn-text mr-3"> {nextComponent} </span>

        <ArrowRight />
      </button>
      {/* <button
        className="btn btn-outline border-none custom-btn"
        onClick={() => setRoute(nextComponentRaw)}
      >
        {nextComponent}
      </button> */}
    </div>
  );
};
