import "../../styles.css";
import "./input-styles.css";

export const Input = () => {
  return (
    <div className="w-full m-auto text-left">
      <h1 className="mb-6 text-3xl">Input</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use an input add <code className="code-line">.input</code> class to
        your input.
      </p>
      {/* input text */}
      <div className="content-container flex flex-col">
        <input
          type="text"
          className="input-text mb-4"
          placeholder="First name"
        />

        <input
          type="text"
          className="input-text border-0 bg-gray-100 mb-2"
          placeholder="First name"
        />
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            &lt;input type="text" className="input-text" placeholder="First
            name" /&gt;
          </code>
          <br />
          <code>
            {`<input type="text" className="input-text border-0 bg-gray-100"
placeholder="First name" />`}
          </code>
        </pre>
      </div>

      {/* Input variants */}
      <h1 className="mb-6 text-2xl">Input Variants</h1>
      <p className="mb-6 text-lg text-gray-600">
        To change the ring color on focus add additional class for e.g.
        <code className="code-line">.input-text-yellow</code>. See the code
        snippet below for another examples.
      </p>
      <div className="content-container flex flex-col">
        {/* yellow on foucs */}
        <input
          type="text"
          className="input-text input-text-yellow border-0 bg-gray-100 mb-4"
          placeholder="Yellow on focus"
        />
        {/* green on foucs */}
        <input
          type="text"
          className="input-text input-text-green border-0 bg-gray-100 mb-4"
          placeholder="Green on focus"
        />
        {/* red on focus */}
        <input
          type="text"
          className="input-text input-text-red border-0 bg-gray-100 mb-4"
          placeholder="Red on focus"
        />
        {/* purple on focus */}
        <input
          type="text"
          className="input-text input-text-purple border-0 bg-gray-100 mb-4"
          placeholder="Purple on focus"
        />
      </div>

      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<input type="text" className="input-text input-text-yellow border-0 bg-gray-100" 
 placeholder="First name" />`}
          </code>
          <br />
          <br />
          <code>
            {`<input type="text" className="input-text input-text-green border-0 bg-gray-100"
 placeholder="First name" />`}
          </code>
          <br />
          <br />
          <code>
            {`<input type="text" className="input-text input-text-red border-0 bg-gray-100" 
 placeholder="First name" />`}
          </code>
          <br />
          <br />
          <code>
            {`<input type="text" className="input-text input-text-purple border-0 bg-gray-100"
 placeholder="First name" />`}
          </code>
          <br />
        </pre>
      </div>

      {/* Input textArea */}
      <h1 className="mb-6 text-2xl">TextArea</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use textArea copy the code from the snippet below, all the classes of
        textbox above will work here as well. e.g.
        <code className="code-line">.input-text</code>.
        <span className="block">
          See the code snippet below for another examples.
        </span>
        <span className="block">
          To create auto-growing textarea we need to add some react code which
          is given in the code snippet below.
        </span>
      </p>
      <div className="content-container flex flex-col">
        <textarea cols="30" rows="8" className="input-text"></textarea>
        <br />
        <textarea
          cols="30"
          rows="8"
          className="input-text border-0  bg-gray-100"
        ></textarea>
      </div>
      {/* code snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<textarea cols="30" rows="8" className="input-text">
</textarea>`}
          </code>
          <br />
          <br />
          <code>
            {`<textarea cols="30" rows="8" className="input-text">
</textarea>`}
          </code>
          <br />
          <br />
          <code>{`let textAreaRef = useRef(null);
useEffect(() => {
  if(textAreaRef){
    textAreaRef.style.height = "20px";
    textAreaRef.style.height = textAreaRef.scrollHeight + "px";
  }
}, [aVariableThatTracksTheChangeInTextAreaValue]) `}</code>
        </pre>
      </div>

      {/* Radio button */}
      <h1 className="mb-6 text-2xl">Radio button</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use radio button use the code from the snippet below, customize
        according to your liking.
      </p>
      <div className="content-container flex flex-col">
        <label htmlFor="field">
          <input
            type="radio"
            name="field"
            className="mb-4 mr-4"
            value="computer science"
          />
          Computer Science
        </label>
        <label htmlFor="field">
          <input
            type="radio"
            name="field"
            className="mb-4 mr-4"
            value="biotechnology"
          />
          Biotechnology
        </label>
        <label htmlFor="field">
          <input type="radio" name="field" className="mb-4 mr-4" value="mbbs" />
          MBBS
        </label>
        <label htmlFor="field">
          <input type="radio" name="field" className="mb-4 mr-4" value="mba" />
          MBA
        </label>
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<label htmlFor="field">
  <input
    type="radio"
    name="field"
    className="mb-4 mr-4"
    value="computer science"
  />
    Computer Science
</label>
<label htmlFor="field">
  <input
    type="radio"
    name="field"
    className="mb-4 mr-4"
    value="biotechnology"
  />
    Biotechnology
</label>
<label htmlFor="field">
  <input
    type="radio"
    name="field"
    className="mb-4 mr-4"
    value="mbbs"
  />
    MBBS
</label>
<label htmlFor="field">
  <input
    type="radio"
    name="field"
    className="mb-4 mr-4"
    value="mba"
  />
    MBA
</label>`}
          </code>
        </pre>
      </div>

      {/* checkbox */}
      <h1 className="mb-6 text-2xl">Checkbox</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use checkbox copy the code from the snippet below, customize
        according to your liking.
      </p>
      <div className="content-container flex flex-col">
        <label htmlFor="food">
          <input
            type="checkbox"
            name="food"
            value="biryani"
            className="mb-4 mr-4"
          />
          Biryani
        </label>
        <label htmlFor="food">
          <input
            type="checkbox"
            name="food"
            value="coke"
            className="mb-4 mr-4"
          />
          Coke
        </label>
        <label htmlFor="food">
          <input
            type="checkbox"
            name="food"
            value="lassi"
            className="mb-4 mr-4"
          />
          Lassi
        </label>
      </div>
      {/* code snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<label htmlFor="food">
  <input type="checkbox" name="food" value="biryani" className="mb-4 mr-4" />
    Biryani
</label>
<label htmlFor="food">
  <input type="checkbox" name="food" value="coke" className="mb-4 mr-4"/>
    Coke
</label>
<label htmlFor="food">
  <input type="checkbox" name="food" value="lassi" className="mb-4 mr-4"/>
    Lassi
</label>`}
          </code>
        </pre>
      </div>
    </div>
  );
};
