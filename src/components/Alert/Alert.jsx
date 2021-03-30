import { CheckCircle, Error, Warning, Info, Cross } from "../../assets";

export const Alert = () => {
  return (
    <div className="w-full m-auto mb-8 text-left">
      <h1 className="mb-6 text-3xl">Alert</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use an alert add{" "}
        <code className="code-line">alert alert-success</code> or any other
        alert class. As shown in the examples below{" "}
      </p>

      {/* Simple  Alerts */}
      <div className="content-container flex flex-col">
        <div className="alert alert-success mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <CheckCircle />
            </span>
            This is a success alert — check it out!
          </p>
        </div>
        <div className="alert alert-error mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <Error />
            </span>
            This is an error alert — check it out!
          </p>
        </div>
        <div className="alert alert-warning mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <Warning />
            </span>
            This is a warning alert — check it out!
          </p>
        </div>
        <div className="alert alert-info">
          <p className="flex items-center">
            <span className="mr-3">
              <Info />
            </span>
            This is an error alert — check it out!
          </p>
        </div>
      </div>
      {/* code snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>{`<div className="alert alert-success">
 <p className="flex items-center">
  <span className="mr-3">
    <CheckCircle />
  </span>
  This is a success alert — check it out!  
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-error">
 <p className="flex items-center">
  <span className="mr-3">
    <Error />
  </span>
  This is an error alert — check it out!  
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-warning">
 <p className="flex items-center">
  <span className="mr-3">
    <Warning />
  </span>
  This is a warning alert — check it out!
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-info">
 <p className="flex items-center">
  <span className="mr-3">
    <Info />
  </span>
  This is an info alert — check it out!
 </p>
</div>`}</code>
        </pre>
      </div>

      {/* Alert with Quote */}
      <h1 className="mb-6 text-2xl">Block Quote</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use block quote we need to add a class{" "}
        <code className="code-line">alert-quote</code> class to the normal
        alert. See the code snippet below for example.
      </p>
      <div className="content-container flex flex-col">
        <div className="alert alert-quote alert-success mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <CheckCircle />
            </span>
            This is a success alert — check it out!
          </p>
        </div>
        <div className="alert alert-quote alert-error mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <Error />
            </span>
            This is an error alert — check it out!
          </p>
        </div>
        <div className="alert alert-quote alert-warning mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <Warning />
            </span>
            This is a warning alert — check it out!
          </p>
        </div>
        <div className="alert alert-quote alert-info">
          <p className="flex items-center">
            <span className="mr-3">
              <Info />
            </span>
            This is an error alert — check it out!
          </p>
        </div>
      </div>
      {/* code snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>{`<div className="alert alert-quote alert-success">
 <p className="flex items-center">
  <span className="mr-3">
    <CheckCircle />
  </span>
  This is a success alert — check it out!  
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-quote alert-error">
 <p className="flex items-center">
  <span className="mr-3">
    <Error />
  </span>
  This is an error alert — check it out!  
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-quote alert-warning">
 <p className="flex items-center">
  <span className="mr-3">
    <Warning />
  </span>
  This is a warning alert — check it out!
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-quote alert-info">
 <p className="flex items-center">
  <span className="mr-3">
    <Info />
  </span>
  This is an info alert — check it out!
 </p>
</div>`}</code>
        </pre>
      </div>

      {/* Alert with description */}
      <h1 className="mb-6 text-2xl">Alert with Description</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use alert with description we only need to modify{" "}
        <code className="code-line">alert-success</code> as shown in the code
        snippet below.
      </p>
      <div className="content-container flex flex-col">
        <div className="alert alert-success mb-4">
          <p className="flex items-start">
            {" "}
            <span className="mr-3">
              <CheckCircle />
            </span>{" "}
            <span>
              <p className="mt-1 mb-3 font-semibold">Success</p>
              <p>
                This is a success alert —{" "}
                <span className="font-semibold">check it out!</span>{" "}
              </p>
            </span>
          </p>
        </div>
        <div className="alert alert-error mb-4">
          <p className="flex items-start">
            <span className="mr-3">
              <Error />
            </span>
            <span>
              <p className="mt-1 mb-3 font-semibold">Error</p>
              <p>
                This is an error alert —{" "}
                <span className="font-semibold">check it out!</span>{" "}
              </p>
            </span>
          </p>
        </div>
        <div className="alert alert-warning mb-4">
          <p className="flex items-start">
            <span className="mr-3">
              <Warning />
            </span>
            <span>
              <p className="mt-1 mb-3 font-semibold">Warning</p>
              <p>
                This is a warning alert —{" "}
                <span className="font-semibold">check it out!</span>{" "}
              </p>
            </span>
          </p>
        </div>
        <div className="alert alert-info">
          <p className="flex items-start">
            <span className="mr-3">
              <Info />
            </span>
            <span>
              <p className="mt-1 mb-3 font-semibold">Info</p>
              <p>
                This is an info alert —{" "}
                <span className="font-semibold">check it out!</span>{" "}
              </p>
            </span>
          </p>
        </div>
      </div>
      {/* code snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>{`<div className="alert alert-success">
  <p className="flex items-center">
    <span className="mr-3">
      <CheckCirle />
    </span>
    <span>
      <p className="mt-1 mb-3 font-semibold">Success</p>
      <p>
        This is an success alert —
        <span className="font-semibold">check it out!</span>{" "}
      </p>
    </span>
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-error">
 <p className="flex items-center">
  <span className="mr-3">
    <Error />
  </span>
  <span>
    <p className="mt-1 mb-3 font-semibold">Error</p>
    <p>
      This is an error alert —
      <span className="font-semibold">check it out!</span>{" "}
    </p>
  </span>
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-warning">
 <p className="flex items-center">
  <span className="mr-3">
    <Warning />
  </span>
  <span>
    <p className="mt-1 mb-3 font-semibold">Warning</p>
    <p>
      This is an warning alert —
      <span className="font-semibold">check it out!</span>{" "}
    </p>
  </span>
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-info">
 <p className="flex items-center">
  <span className="mr-3">
    <Info />
  </span>
  <span>
    <p className="mt-1 mb-3 font-semibold">Info</p>
    <p>
      This is an info alert —
      <span className="font-semibold">check it out!</span>{" "}
    </p>
  </span>
 </p>
</div>`}</code>
        </pre>
      </div>

      {/* Alert with outline */}
      <h1 className="mb-6 text-2xl">Alert Outlined</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use outlined alert add{" "}
        <code className="code-line">alert-outline-success</code> instead of{" "}
        <code className="code-line">alert-success</code> or any other alert
        type. See the code snipped below for examples.
      </p>
      <div className="content-container flex flex-col">
        <div className="alert alert-outline-success mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <CheckCircle />
            </span>
            This is a success alert — check it out!
          </p>
        </div>
        <div className="alert alert-outline-error mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <Error />
            </span>
            This is an error alert — check it out!
          </p>
        </div>
        <div className="alert alert-outline-warning mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <Warning />
            </span>
            This is a warning alert — check it out!
          </p>
        </div>
        <div className="alert alert-outline-info">
          <p className="flex items-center">
            <span className="mr-3">
              <Info />
            </span>
            This is an error alert — check it out!
          </p>
        </div>
      </div>
      {/* code snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>{`<div className="alert alert-outline-success">
 <p className="flex items-center">
  <span className="mr-3">
    <CheckCircle />
  </span>
  This is a success alert — check it out!  
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-outline-error">
 <p className="flex items-center">
  <span className="mr-3">
    <Error />
  </span>
  This is an error alert — check it out!  
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-outline-warning">
 <p className="flex items-center">
  <span className="mr-3">
    <Warning />
  </span>
  This is a warning alert — check it out!
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-outline-info">
 <p className="flex items-center">
  <span className="mr-3">
    <Info />
  </span>
  This is an info alert — check it out!
 </p>
</div>`}</code>
        </pre>
      </div>

      {/* filled alert */}
      <h1 className="mb-6 text-2xl">Filled Alert</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use outlined alert add{" "}
        <code className="code-line">alert-filled-success</code> instead of{" "}
        <code className="code-line">alert-success</code> or any other alert
        type. See the code snipped below for examples.
      </p>
      <div className="content-container flex flex-col">
        <div className="alert alert-filled-success mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <CheckCircle />
            </span>
            This is a success alert — check it out!
          </p>
        </div>
        <div className="alert alert-filled-error mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <Error />
            </span>
            This is an error alert — check it out!
          </p>
        </div>
        <div className="alert alert-filled-warning mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <Warning />
            </span>{" "}
            This is a warning alert — check it out!
          </p>
        </div>
        <div className="alert alert-filled-info">
          <p className="flex items-center">
            <span className="mr-3">
              <Info />
            </span>
            This is an error alert — check it out!
          </p>
        </div>
      </div>
      {/* code snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>{`<div className="alert alert-filled-success">
 <p className="flex items-center">
  <span className="mr-3">
    <CheckCircle />
  </span>
  This is a success alert — check it out!  
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-filled-error">
 <p className="flex items-center">
  <span className="mr-3">
    <Error />
  </span>
  This is an error alert — check it out!  
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-filled-warning">
 <p className="flex items-center">
  <span className="mr-3">
    <Warning />
  </span>
  This is a warning alert — check it out!
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-filled-info">
 <p className="flex items-center">
  <span className="mr-3">
    <Info />
  </span>
  This is an info alert — check it out!
 </p>
</div>`}</code>
        </pre>
      </div>

      {/* alert with action */}
      <h1 className="mb-6 text-2xl">Alert with Action</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use alert with action we need to make slight modification to the
        original <code className="code-line">alert-success</code> code by adding
        a <code className="code-line">&lt;Cross/&gt;</code> svg. Then adding
        class <code className="code-line">alert-action-icon-success</code> class
        to it or any other class depending upon the alert you choose. See the
        code snipped below for examples.
      </p>
      <div className="content-container flex flex-col">
        <div className="alert alert-success mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <CheckCircle />
            </span>
            <span className="alert-action">
              <p>This is a success alert — check it out! </p>
              <span>
                <Cross alertType={"alert-action-icon-success"} />
              </span>
            </span>
          </p>
        </div>

        <div className="alert alert-error mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <Error alertType={"alert-action-icon-error"} />
            </span>
            <span className="alert-action">
              <p>This is a success alert — check it out! </p>
              <span>
                <Cross alertType={"alert-action-icon-error"} />
              </span>
            </span>
          </p>
        </div>

        <div className="alert alert-warning mb-4">
          <p className="flex items-center">
            <span className="mr-3">
              <Warning />
            </span>
            <span className="alert-action">
              <p>This is a success alert — check it out! </p>
              <span>
                <Cross alertType={"alert-action-icon-warning"} />
              </span>
            </span>
          </p>
        </div>

        <div className="alert alert-info">
          <p className="flex items-center">
            <span className="mr-3">
              <Info />
            </span>
            <span className="alert-action">
              <p>This is a success alert — check it out! </p>
              <span className="">
                <Cross alertType={"alert-action-icon-info"} />
              </span>
            </span>
          </p>
        </div>
      </div>
      {/* code snippet */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>{`<div className="alert alert-success">
 <p className="flex items-center">
  <span className="mr-3">
    <CheckCircle />
  </span>
  <p>This is a success alert — check it out!</p>
  <span>
    <Cross alertType={"alert-action-icon-success"} />
  </span>  
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-error">
 <p className="flex items-center">
  <span className="mr-3">
    <Error />
  </span>
  <p>This is a error alert — check it out!</p>
  <span>
    <Cross alertType={"alert-action-icon-error"} />
  </span>   
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-warning">
 <p className="flex items-center">
  <span className="mr-3">
    <Warning />
  </span>
  <p>This is a warning alert — check it out!</p>
  <span>
    <Cross alertType={"alert-action-icon-warning"} />
  </span>  
 </p>
</div>`}</code>
          <br />
          <br />
          <code>{`<div className="alert alert-info">
 <p className="flex items-center">
  <span className="mr-3">
    <Info />
  </span>
  <p>This is a info alert — check it out!</p>
  <span>
    <Cross alertType={"alert-action-icon-info"} />
  </span>  
 </p>
</div>`}</code>
        </pre>
      </div>
    </div>
  );
};
