import { Email, HeartOutline, Bell, Bag, Cart } from "../../assets";

export const Badge = () => {
  return (
    <div className="w-full  m-auto text-left">
      <h1 className="mb-6 text-3xl">Badge</h1>

      {/* badge */}
      <p className="mb-6 text-lg text-gray-600">
        To use a Badge add following code. Use any svg which has{" "}
        <code className="code-line">height:2em</code> and{" "}
        <code className="code-line">weight:2em</code>
      </p>
      <div className="content-container">
        <div className="badge-icon mr-8">
          <Email />
          <div className="badge-num"> 5 </div>
        </div>
        <div className="badge-icon mr-8">
          <Email />
          <div className="badge-num"> 55 </div>
        </div>
        <div className="badge-icon mr-8">
          <HeartOutline />
          <div className="badge-num"> 5 </div>
        </div>
        <div className="badge-icon mr-8">
          <Bell />
          <div className="badge-num"> 5 </div>
        </div>
        <div className="badge-icon mr-8">
          <Cart />
          <div className="badge-num"> 5 </div>
        </div>
        <div className="badge-icon mr-8">
          <Bag />
          <div className="badge-num"> 5 </div>
        </div>
      </div>

      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            <code>{`<div className="badge-icon">
 <Email />
 <div className="badge-num"> 5 </div>
</div>`}</code>
            <br />
            <br />
            <code>{`<div className="badge-icon">
 <Email />
 <div className="badge-num"> 55 </div>
</div>`}</code>
            <br />
            <br />

            <code>{`<div className="badge-icon">
 <HeartOutline />
 <div className="badge-num"> 5 </div>
</div>`}</code>
            <br />
            <br />

            <code>{`<div className="badge-icon">
 <Bell />
 <div className="badge-num"> 5 </div>
</div>`}</code>
            <br />
            <br />

            <code>{`<div className="badge-icon">
 <Cart />
 <div className="badge-num"> 5 </div>
</div>`}</code>
            <br />
            <br />
            <code>{`<div className="badge-icon">
 <Bag />
 <div className="badge-num"> 5 </div>
</div>`}</code>
            <br />
            <br />
          </code>
        </pre>
      </div>

      {/* changing  color of icon badge */}
      <h1 className="mb-6 text-2xl">Changing color of Icon and Badge</h1>

      <p className="mb-6 text-lg text-gray-600">
        To change color of icon, add background color of icon by setting text
        color of <code className="code-line">badge-icon</code> div. To set text
        color, use any text color classes like{" "}
        <code className="code-line">text-blue-500</code>. <br />
        To change the background color of badge add background changing class to{" "}
        <code className="code-line">badge-num</code> div. To set text color, use
        any background color classes like{" "}
        <code className="code-line">bg-yellow-500</code>. <br />
        See the code snippet below for example.
      </p>
      <div className="content-container">
        <div className="badge-icon mr-8 text-blue-500">
          <Email />
          <div className="badge-num"> 5 </div>
        </div>
        <div className="badge-icon mr-8">
          <Email />
          <div className="badge-num bg-yellow-400"> 55 </div>
        </div>
        <div className="badge-icon mr-8 text-red-400">
          <HeartOutline />
          <div className="badge-num bg-gray-800"> 5 </div>
        </div>
      </div>

      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            <code>{`<div className="badge-icon text-blue-500">
 <Email />
 <div className="badge-num"> 5 </div>
</div>`}</code>
            <br />
            <br />
            <code>{`<div className="badge-icon">
 <Email />
 <div className="badge-num bg-yellow-500"> 55 </div>
</div>`}</code>
            <br />
            <br />

            <code>{`<div className="badge-icon text-red-500">
 <HeartOutline />
 <div className="badge-num bg-gray-800"> 5 </div>
</div>`}</code>
          </code>
        </pre>
      </div>
    </div>
  );
};
