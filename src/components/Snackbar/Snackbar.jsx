
import { CheckCircle, Error, Warning, Info, Cross } from "../../assets";

export const Snackbar = () => {
  return (
    <div>
      <h1 className="mb-6 text-3xl">Snackbar</h1>

      <p className="mb-6 text-lg text-gray-600">
        To use Snackbar we need to make slight modification to the original{" "}
        <code className="code-line">alert-success</code> code by adding a{" "}
        <code className="code-line">&lt;Cross/&gt;</code> svg. Then adding class{" "}
        <code className="code-line">alert-action-icon-success</code> class to it
        or any other class depending upon the alert you choose. See the code
        snipped below for examples.
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
