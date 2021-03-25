import "../../styles.css";
import "./img-styles.css";

export const Image = () => {
  return (
    <div className="w-full m-auto mb-8 text-left">
      <h1 className="mb-6 text-3xl">Image</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use a responsive image add
        <code className="code-line">.img</code> class to your{" "}
        <code className="code-line">
          {" "}
          &lt;img src="img/example.jpg" alt="mountain"/&gt;{" "}
        </code>
        . The image will adjust its width according to its parent container
        while maintaing its aspect ratio.
      </p>
      {/* normal responsive image */}
      <div className="content-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOGbjJ-FuxPywVsQx6Csc8xeRb7JpfDKRAw&usqp=CAU"
          alt="space"
          className="img"
        />
      </div>
      {/* code snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            &lt;img src="img/space_wallpaper.jgp" alt="space"
            className="img"/&gt;
          </code>
        </pre>
      </div>

      {/* rounded image */}
      <h1 className="mb-6 text-2xl">Round Image</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use round image add class{" "}
        <code className="code-line">img-round</code> after{" "}
        <code className="code-line">img</code> class. The size of the round
        image will get adjusted automatically based on the parent container's
        width and height. In the example given below the height and width is set
        to 10rem with the help of <code className="code-line">h-40 w-40</code>{" "}
        utility classes. The size of the image gets automatically adjusted as
        its width and height is set to 100% of parent container's height and
        width with the help of <code className="code-line">w-full h-full</code>{" "}
        utility class.
        <p>
          {" "}
          <span className="font-semibold">Tip: </span> Use image with{" "}
          <code className="code-line">1:1</code> aspect ratio for best results.
        </p>
      </p>
      <div className="content-container">
        <div className="w-40 h-40">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOGbjJ-FuxPywVsQx6Csc8xeRb7JpfDKRAw&usqp=CAU"
            alt="space"
            className="img img-round w-full h-full"
          />
        </div>
      </div>
      {/* code snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<div className="w-40 h-40">
  <img src="img/space_wallpaper.jgp" alt="space" className="img
  img-round w-full h-full"/>
</div>`}
          </code>
        </pre>
      </div>
    </div>
  );
};
