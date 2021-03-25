import "../../styles.css";
import "./rating-styles.css";
import { OutlineStar, FilledStar, HalfStar } from "../../assets";

export const Rating = () => {
  return (
    <div className="w-full m-auto text-left">
      <h1 className="mb-6 text-3xl">Rating</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use Rating add the following code snippet.
      </p>
      {/* Still work needs  to  be done. Add ability to rating on hover */}
      <div className="content-container flex flex-col justify-start items-center">
        <div className="rating text-xl text-yellow-400">
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <HalfStar />
          <OutlineStar />
        </div>
        <div className="flex text-sm text-yellow-400">
          <span className="text-sm mr-2 text-gray-800 font-semibold">4.5</span>
          <span className="text-lg flex items-center">
            <FilledStar />
          </span>
          <span className="text-sm ml-2 text-gray-800 font-semibold">
            {" "}
            | 5.4k
          </span>
        </div>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<div className="rating text-xl text-yellow-400">
   <FilledStar />
   <FilledStar />
   <FilledStar />
   <HalfStar />
   <OutlineStar />
</div>`}
          </code>
          <br />
          <br />
          <code>
            {`<div className="flex text-sm text-yellow-400">
  <span className="text-sm mr-2 text-gray-800 font-semibold">4.5</span>
  <span className="text-lg flex items-center">
    <FilledStar />
  </span>
  <span className="text-sm ml-2 text-gray-800 font-semibold">
    {" "}
    | 5.4k
  </span>
</div>
`}
          </code>
        </pre>
      </div>
    </div>
  );
};
