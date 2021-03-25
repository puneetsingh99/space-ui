import "../../styles.css";
import "./button-styles.css";
import { Arrow, ChevronDoubleUp } from "../../assets";

export const Button = () => {
  return (
    <div className="w-full m-auto text-left">
      <h1 className="mb-6 text-3xl">Button</h1>

      {/* default button */}
      <p className="mb-6 text-lg text-gray-600">
        To use a button add <code className="code-line">.btn</code> class to
        your button.
      </p>
      <div className="content-container">
        <button className="btn mr-4">Primary</button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>&lt;button className="btn"&gt; Primary &lt;/button&gt;</code>
        </pre>
      </div>

      {/* buttons with predefined colors */}
      <h1 className="mb-6 text-2xl">Color Variants</h1>
      <p className="mb-6 text-lg text-gray-600">
        There are 4 predefined color variants of button which can be used by
        adding class name of that particular variant after{" "}
        <code className="code-line">.btn</code> class. for e.g{" "}
        <code className="code-line">.btn-green</code>{" "}
      </p>
      <div className="content-container">
        <button className="btn btn-red mr-4">Primary</button>
        <button className="btn btn-green mr-4">Primary</button>
        <button className="btn btn-yellow mr-4">Primary</button>
        <button className="btn btn-blue mr-4">Primary</button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<button className="btn btn-red mr-4">Primary</button>
<button className="btn btn-green mr-4">Primary</button>
<button className="btn btn-yellow mr-4">Primary</button>
<button className="btn btn-blue mr-4">Primary</button>`}
          </code>
        </pre>
      </div>

      {/* default button variants */}
      <h1 className="mb-6 text-2xl">Button Variants</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use different variants of a button, keep adding classes to it related
        to that particular variant like shown in the code snippet below{" "}
      </p>
      <div className="content-container">
        <button className="btn mr-4">Primary</button>
        <button className="btn btn-outline mr-4">Primary</button>
        <button className="btn btn-outline border-none">Primary</button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            &lt;button className="btn"&gt; Primary &lt;/button&gt;
            <br />
            &lt;button className="btn btn-outline"&gt; Primary &lt;/button&gt;
            <br />
            &lt;button className="btn btn-outline border-none"&gt; Primary
            &lt;/button&gt;
          </code>
        </pre>
      </div>

      {/* outline buttons with predefined colors */}
      <h1 className="mb-6 text-2xl">Outline Button Color Variants</h1>
      <p className="mb-6 text-lg text-gray-600">
        There are 4 predefined colors of outline buttons as well to use them
        adding class name of that particular variant after{" "}
        <code className="code-line">.btn btn-outline</code> class. for e.g{" "}
        <code className="code-line">.btn-outline-green</code>{" "}
      </p>
      <div className="content-container">
        <button className="btn btn-outline btn-outline-red mr-4">
          Primary
        </button>
        <button className="btn btn-outline btn-outline-green mr-4">
          Primary
        </button>
        <button className="btn btn-outline btn-outline-yellow mr-4">
          Primary
        </button>
        <button className="btn btn-outline btn-outline-blue mr-4">
          Primary
        </button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<button className="btn btn-outline btn-outline-red mr-4">Primary</button>
<button className="btn btn-outline btn-outline-green mr-4">Primary</button>
<button className="btn btn-outline btn-outline-yellow mr-4">Primary</button>
<button className="btn btn-outline btn-outline-blue mr-4">Primary</button>`}
          </code>
        </pre>
      </div>

      {/* changing colors of  a default button */}
      <h1 className="mb-6 text-2xl">Changing background color</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use a button with a custom background color, we need to create a
        class which has following properties:
        <p>
          {" "}
          1: your desired color for eg.{" "}
          <code className="code-line">
            background-color: var(--purple-700)
          </code>{" "}
        </p>
        <p>
          {" "}
          2: a hover state which changes to different color for eg.{" "}
          <code className="code-line">
            :hover background-color: var(--purple-500){" "}
          </code>
          <p>
            Whereas, if you want to use an outline button then you need to add
            text color instead of background color for eg.{" "}
            <code className="code-line">color: var(--purple-700)</code>.
            <p>
              {" "}
              we need to set hover state to this class as well, but a lighter
              shade since this is an outline button
            </p>
          </p>
        </p>
        <p>Look at the below code snippet for example.</p>
      </p>
      <div className="content-container">
        <button className="btn btn-purple mr-4">Primary</button>
        <button className="btn btn-outline btn-outline-purple mr-4">
          Primary
        </button>
        <button className="btn btn-outline btn-outline-purple border-none">
          Primary
        </button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            &lt;button className="btn btn-purple"&gt; Primary &lt;/button&gt;
            <br />
            &lt;button className="btn btn-outline btn-outline-purple"&gt;
            Primary &lt;/button&gt;
            <br />
            {`<button className="btn btn-outline btn-outline-purple border-none">
  Primary
</button>`}
          </code>
        </pre>
      </div>

      {/* default rounded button */}
      <h1 className="mb-6 text-2xl">Rounded Button</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use rounded button add{" "}
        <code className="code-line">.btn .btn-rounded</code> class to your
        button.
      </p>
      <div className="content-container">
        <button className="btn btn-rounded">Primary</button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            &lt;button className="btn btn-rounded"&gt; Primary &lt;/button&gt;
          </code>
        </pre>
      </div>

      {/* rounded button variants */}
      <h1 className="mb-6 text-2xl">Rounded Button Variants</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use different variants of a button, keep adding classes to it related
        to that particular variant like shown in the code snippet below{" "}
      </p>
      <div className="content-container">
        <button className="btn btn-rounded mr-4">Primary</button>
        <button className="btn btn-rounded btn-outline mr-4">Primary</button>
        <button className="btn btn-rounded btn-outline border-none">
          Primary
        </button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            &lt;button className="btn btn-rounded"&gt; Primary &lt;/button&gt;
            <br />
            &lt;button className="btn btn-rounded btn-outline"&gt; Primary
            &lt;/button&gt;
            <br />
            {`<button className="btn btn-rounded btn-outline border-none">
 Primary
</button>`}
          </code>
        </pre>
      </div>

      {/* customizing color of rounded button */}
      <h1 className="mb-6 text-2xl">
        Changing background color of Rounded Button
      </h1>
      <p className="mb-6 text-lg text-gray-600">
        To use a rounded button with a custom background color, add a class{" "}
        <code className="code-line">.btn-rounded</code> in your button rest all
        will be identical as adding color to the non-rounded buttons.
      </p>
      <div className="content-container">
        <button className="btn btn-rounded btn-purple mr-4">Primary</button>
        <button className="btn btn-rounded btn-outline btn-outline-purple mr-4">
          Primary
        </button>
        <button className="btn btn-rounded btn-outline btn-outline-purple border-none">
          Primary
        </button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            &lt;button className="btn btn-rounded btn-purple"&gt; Primary
            &lt;/button&gt;
            <br />
          </code>
        </pre>
      </div>

      {/* icon buttons */}
      <h1 className="mb-6 text-2xl">Icon Button</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use an icon button add an svg of the icon before the button text and
        then wrap button text in span and give it a class
        <span className="ml-2">
          <code className="code-line">.btn-text</code>
        </span>
      </p>
      <div className="content-container">
        <button className="btn flex mr-4">
          {" "}
          <Arrow /> <span className="btn-text">Primary</span>
        </button>
        <button className="btn btn-rounded flex">
          {" "}
          <Arrow /> <span className="btn-text">Primary</span>
        </button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<button className="btn">
  <Arrow/>
  <span className="btn-text"> Primary </span>
</button>`}{" "}
            <br />
            <br />
            {`<button className="btn btn-rounded">
  <Arrow/>
  <span className="btn-text"> Primary </span>
</button>`}
          </code>
        </pre>
      </div>

      {/* icon button variants */}
      <h1 className="mb-6 text-2xl">Icon Button variants</h1>
      <p className="mb-6 text-lg text-gray-600">
        Changing the variant of icon button is same as changing the variant of
        normal ones.
        <span className="ml-2">
          <code className="code-line">.btn-text</code>
        </span>
      </p>
      <div className="content-container">
        <button className="btn flex mr-4">
          {" "}
          <Arrow /> <span className="btn-text">Primary</span>
        </button>
        <button className="btn btn-outline flex mr-4">
          {" "}
          <Arrow /> <span className="btn-text">Primary</span>
        </button>
        <button className="btn btn-rounded flex mr-4">
          {" "}
          <Arrow /> <span className="btn-text">Primary</span>
        </button>
        <button className="btn btn-outline btn-rounded flex">
          {" "}
          <Arrow /> <span className="btn-text">Primary</span>
        </button>
      </div>

      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<button className="btn flex">
  <Arrow/>
  <span className="btn-text"> Primary </span>
</button>`}{" "}
            <br />
            <br />
            {`<button className="btn btn-outline flex">
  <Arrow/>
  <span className="btn-text"> Primary </span>
</button>`}{" "}
            <br />
            <br />
            {`<button className="btn btn-rounded flex">
  <Arrow/>
  <span className="btn-text"> Primary </span>
</button>`}{" "}
            <br />
            <br />
            {`<button className="btn btn-outline btn-rounded flex">
  <Arrow/>
  <span className="btn-text"> Primary </span>
</button>`}{" "}
          </code>
        </pre>
      </div>

      {/* changing color of icon button */}
      <h1 className="mb-6 text-2xl">Icon Button variants</h1>
      <p className="mb-6 text-lg text-gray-600">
        Changing color of icon button is same as changing color of any normal
        button
        <span className="ml-2">
          <code className="code-line">.btn-text</code>
        </span>
      </p>
      <div className="content-container">
        <button className="btn flex btn-purple mr-4">
          {" "}
          <Arrow /> <span className="btn-text">Primary</span>
        </button>
        <button className="btn btn-outline flex btn-outline-purple mr-4">
          {" "}
          <Arrow /> <span className="btn-text">Primary</span>
        </button>
        <button className="btn btn-rounded flex btn-purple mr-4">
          {" "}
          <Arrow /> <span className="btn-text">Primary</span>
        </button>
        <button className="btn btn-outline btn-rounded btn-outline-purple flex">
          {" "}
          <Arrow /> <span className="btn-text">Primary</span>
        </button>
      </div>

      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<button className="btn flex btn-purple">
  <Arrow/>
  <span className="btn-text"> Primary </span>
</button>`}{" "}
            <br />
            <br />
            {`<button className="btn btn-outline flex btn-outline-purple">
  <Arrow/>
  <span className="btn-text"> Primary </span>
</button>`}{" "}
            <br />
            <br />
            {`<button className="btn btn-rounded flex btn-purple">
  <Arrow/>
  <span className="btn-text"> Primary </span>
</button>`}{" "}
            <br />
            <br />
            {`<button className="btn btn-outline btn-rounded flex btn-outline-purple">
  <Arrow/>
  <span className="btn-text"> Primary </span>
</button>`}{" "}
          </code>
        </pre>
      </div>

      {/* floating button */}
      <h1 className="mb-6 text-2xl">Floating Button</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use a floating button add class{" "}
        <code className="code-line">.btn-float</code> and add a svg
      </p>
      <div className="content-container">
        <button className="btn-float">
          <ChevronDoubleUp />
        </button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>{`<button className="btn-float">
  <ChevronDoubleUp />
</button>`}</code>
        </pre>
      </div>

      {/* floating button variants */}
      <h1 className="mb-6 text-2xl">Floating Button variants</h1>
      <p className="mb-6 text-lg text-gray-600">
        Using different variants of floating button is as normal button. To use
        an outline floating button add{" "}
        <code className="code-line">.btn-float-outline</code>
      </p>
      <div className="content-container">
        <button className="btn-float mr-4">
          <ChevronDoubleUp />
        </button>
        <button className="btn-float btn-float-outline">
          <ChevronDoubleUp />
        </button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<button className="btn-float">
  <ChevronDoubleUp />
</button>`}{" "}
            <br /> <br />
            {`<button className="btn-float btn-float-outline">
  <ChevronDoubleUp />
</button>`}{" "}
          </code>
        </pre>
      </div>

      {/* floating button with custom color */}
      <h1 className="mb-6 text-2xl">
        Changing background color of Floating Button
      </h1>
      <p className="mb-6 text-lg text-gray-600">
        Using different variants of floating button is as normal button. To use
        an outline floating button add{" "}
        <code className="code-line">.btn-float-outline</code>
      </p>
      <div className="content-container">
        <button className="btn-float btn-purple mr-4">
          <ChevronDoubleUp />
        </button>
        <button className="btn-float btn-float-outline btn-float-outline-purple">
          <ChevronDoubleUp />
        </button>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<button className="btn-float">
  <ChevronDoubleUp />
</button>`}{" "}
            <br /> <br />
            {`<button className="btn-float btn-float-outline">
  <ChevronDoubleUp />
</button>`}{" "}
          </code>
        </pre>
      </div>
    </div>
  );
};
