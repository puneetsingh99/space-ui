import { useState } from "react";

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <div className="w-full m-auto text-left">
      <h1 className="mb-6 text-3xl">Modal</h1>

      {/* default button */}
      <p className="mb-6 text-lg text-gray-600">
        To use a modal use the code from the snippet below.{" "}
        <code className="code-line">useState</code> hook is required in order to
        toggle the modal. The <code className="code-line">showModal</code> state
        variable is being used as a toggle to show and hide the modal.
      </p>
      <div className="content-container">
        <button className="btn" onClick={() => setShowModal(true)}>
          Show Modal
        </button>
        {showModal && (
          <div id="modal-container">
            <div id="modal">
              <h1 className="text-2xl mb-2">Planet</h1>
              <p className="text-lg mb-4">
                A planet is an astronomical body orbiting a star or stellar
                remnant that is massive enough to be rounded by its own gravity,
                is not massive enough to cause thermonuclear fusion.
              </p>
              <button
                className="btn text-sm mr-6"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>{`<button className="btn" onClick={() => setShowModal(true)}>
  Show Modal
</button>
  {showModal && (
    <div id="modal-container">
      <div id="modal">
        <h1 className="text-2xl mb-2">Planet</h1>
        <p className="text-lg mb-4">
          A planet is an astronomical body orbiting a star or stellar
          remnant that is massive enough to be rounded by its own gravity,
          is not massive enough to cause thermonuclear fusion.
        </p>
        <button
          className="btn text-sm mr-6"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  )}`}</code>
        </pre>
      </div>
    </div>
  );
};
