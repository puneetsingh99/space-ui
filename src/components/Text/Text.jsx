export const Text = () => {
  return (
    <div className="w-full m-auto text-left">
      <h1 className="mb-6 text-3xl">Text</h1>

      {/* text sizes */}
      <p className="mb-6 text-lg text-gray-600">
        To use a text of different sizes add{" "}
        <code className="code-line">text-xs</code> to{" "}
        <code className="code-line">text-9xl</code>. <br />
        The naming and default values of utility classes are borrowed by
        Tailwind CSS in order to prevent re-inventing the wheel and make it
        easier for Tailwind css users to pick up Space UI.
      </p>
      <div className="content-container">
        <h2 className="text-xs mr-2">Text extra small</h2>
        <br />
        <h2 className="text-sm mr-2">Text small</h2>
        <br />
        <h2 className="text-base mr-2">Text base</h2>
        <br />
        <h2 className="text-lg mr-2">Text large</h2>
        <br />
        <h2 className="text-xl mr-2">Text xl</h2>
        <br />
        <h2 className="text-2xl mr-2">Text 2xl</h2>
        <br />
        <h2 className="text-3xl block">Text 3xl</h2>
        <br />
        <br />
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            &lt;h2 className="text-xs"&gt; Text extra small &lt;/h2&gt;
          </code>
          <br />
          <code>&lt;h2 className="text-sm"&gt; Text small &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-base"&gt; Text base &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-lg"&gt; Text lg &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-xl"&gt; Text xl &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-2xl"&gt; Text 2xl &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-3xl"&gt; Text 3xl &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-4xl"&gt; Text 4xl &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-5xl"&gt; Text 5xl &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-6xl"&gt; Text 6xl &lt;/h2&gt;</code>
          <br />
        </pre>
      </div>

      {/* buttons with predefined colors */}
      <h1 className="mb-6 text-2xl">Text Color Variants</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use a text of different colors of text add{" "}
        <code className="code-line">text-colorname-shade</code> to it. <br />{" "}
        This is same as text color class of Tailwind CSS. <br /> See code
        snippet below for example.
      </p>
      <div className="content-container text-lg">
        <div className="mr-4">
          <h2 className="text-green-400">Green</h2>
        </div>
        <br />
        <div className="mr-4">
          <h2 className="text-yellow-400">Yellow</h2>
        </div>
        <div className="mr-4">
          <h2 className="text-red-400">Red</h2>
        </div>
        <div className="mr-4">
          <h2 className="text-purple-400">Purple</h2>
        </div>
        <div className="mr-4">
          <h2 className="text-pink-400">Pink</h2>
        </div>
        <div className="mr-4">
          <h2 className="text-gray-400">Gray</h2>
        </div>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>&lt;h2 className="text-green-400"&gt; Green &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-yellow-400"&gt; Yellow &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-red-400"&gt; Red &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-purple-400"&gt; Purple &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-pink-400"&gt; Pink &lt;/h2&gt;</code>
          <br />
          <code>&lt;h2 className="text-gray-400"&gt; Gray &lt;/h2&gt;</code>
          <br />
        </pre>
      </div>
    </div>
  );
};
