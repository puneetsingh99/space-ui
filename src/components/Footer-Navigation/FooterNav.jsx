
import { Arrow, ArrowRight } from "../../assets";

export const FooterNav = ({ route, components, setRoute }) => {
  const currIndex = components.indexOf(route);
  const prevIndex = currIndex === 0 ? currIndex : currIndex - 1;
  const nextIndex =
    currIndex === components.length - 1 ? currIndex : currIndex + 1;

  const prevComponent = components[prevIndex];
  const nextComponent = components[nextIndex];


  return (
    <div className="w-full m-auto mb-8 flex justify-between mb-8">
      <button
        className="flex btn btn-outline border-none custom-btn"
        onClick={() => setRoute(prevComponent)}
      >
        <Arrow />
        <span className="btn-text capitalize"> {prevComponent} </span>
      </button>
      <button
        className="flex items-center btn btn-outline border-none custom-btn"
        onClick={() => setRoute(nextComponent)}
      >
        <span className="btn-text mr-3 capitalize"> {nextComponent} </span>
        <ArrowRight />
      </button>
    </div>
  );
};
