import "../../styles.css";
import "./avatar-styles.css";
import { Folder, Email } from "../../assets";
import face from "../../assets/face.jpg";

export const Avatar = () => {
  return (
    <div className="w-full m-auto mb-8 text-left">
      <h1 className="mb-6 text-3xl">Avatar</h1>

      <p className="mb-6 text-lg text-gray-600">
        To use an image avatar add <code className="code-line">img</code> and{" "}
        <code className="code-line">avatar</code> classes to your img element
        containing the desired image.
      </p>
      <div className="content-container">
        {/* image avatars */}
        <img src={face} alt="profile-pic" className="img avatar" />
      </div>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>{`<img src="img/example.jpg" alt="profile" className="img avatar"/>`}</code>
        </pre>
      </div>

      {/* image avatars with different sizes */}
      <h1 className="mb-6 text-2xl">Avatar Sizes</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use different sizes of a avatar, add classes related to the different
        sizes as shown in the code snippet below{" "}
      </p>
      <div className="content-container flex items-center">
        <img
          src={face}
          alt="profile-pic"
          className="img avatar avatar-sm mr-4"
        />
        <img src={face} alt="profile-pic" className="img avatar mr-4" />
        <img
          src={face}
          alt="profile-pic"
          className="img avatar avatar-lg mr-4"
        />
        <img src={face} alt="profile-pic" className="img avatar avatar-xl" />
      </div>

      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            <code>{`<img src="img/example.jpg" alt="profile" className="img avatar avatar-sm"/>`}</code>
            <br />
            <code>{`<img src="img/example.jpg" alt="profile" className="img avatar"/>`}</code>
            <br />
            <code>{`<img src="img/example.jpg" alt="profile" className="img avatar avatar-lg"/>`}</code>
            <br />
            <code>{`<img src="img/example.jpg" alt="profile" className="img avatar avatar-xl"/>`}</code>
          </code>
        </pre>
      </div>

      {/* avatar with icon */}
      <h1 className="mb-6 text-2xl">Avatar with Icon</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use an avatar with icon create a div, add class{" "}
        <code className="code-line">.icon-avatar</code> to it. Now add any svg
        icon in that div, make sure the svg icon has{" "}
        <code className="code-line">width:"2em"</code> and{" "}
        <code className="code-line">height:"2em"</code>
      </p>
      <div className="content-container flex items-center">
        <div className="icon-avatar mr-4">
          <Folder />
        </div>

        <div className="icon-avatar">
          <Email />
        </div>
      </div>

      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            <code>{`<div className="icon-avatar">
 <Folder />
</div>`}</code>{" "}
            <br /> <br />
            <code>{`<div className="icon-avatar">
 <Email />
</div>`}</code>
          </code>
        </pre>
      </div>

      {/* changing color of avatar with icon */}
      <h1 className="mb-6 text-2xl">Changing color of Avatar with Icon</h1>
      <p className="mb-6 text-lg text-gray-600">
        To change color of an avatar with icon; add background color class of
        your liking to it. For e.g lets say we want a purple icon, add class{" "}
        <code className="code-line">.bg-purple-500</code> to it.
      </p>
      <div className="content-container flex items-center">
        <div className="icon-avatar bg-purple-500 mr-4">
          <Folder />
        </div>

        <div className="icon-avatar bg-purple-500">
          <Email />
        </div>
      </div>

      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            <code>{`<div className="icon-avatar bg-purple-500">
 <Folder />
</div>`}</code>{" "}
            <br /> <br />
            <code>{`<div className="icon-avatar bg-purple-500">
 <Email />
</div>`}</code>
          </code>
        </pre>
      </div>

      {/* avatar with icon of different sizes */}
      <h1 className="mb-6 text-2xl">Avatar with Icon sizes</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use different sizes of a avatar with icon, add classes related to the
        different sizes as shown in the code snippet below{" "}
      </p>
      <div className="content-container flex items-center">
        <div className="icon-avatar icon-avatar-sm  mr-4">
          <Email />
        </div>

        <div className="icon-avatar mr-4">
          <Email />
        </div>
        <div className="icon-avatar icon-avatar-lg">
          <Email />
        </div>
      </div>

      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            <code>{`<div className="icon-avatar icon-avatar-sm">
 <Email />
</div>`}</code>{" "}
            <br /> <br />
            <code>{`<div className="icon-avatar icon-avatar">
 <Email />
</div>`}</code>{" "}
            <br /> <br />
            <code>{`<div className="icon-avatar icon-avatar-lg">
 <Email />
</div>`}</code>
          </code>
        </pre>
      </div>

      {/* Avatar with badge */}
      <h1 className="mb-6 text-2xl">Avatar with Badge</h1>
      <p className="mb-6 text-lg text-gray-600">
        To change color of an avatar with icon; add background color class of
        your liking to it. For e.g lets say we want a purple icon, add class{" "}
        <code className="code-line">.bg-purple-500</code> to it.
      </p>

      <div className="content-container">
        <div className="avatar-badge mr-4">
          <img src={face} alt="profile-pic" className="img avatar" />
          <div className="badge"></div>
        </div>
        <div className="avatar-badge">
          <img src={face} alt="profile-pic" className="img avatar" />
          <div className="badge badge-red"></div>
        </div>
      </div>

      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            <code>{`<div>
  <img src="img/example.jpg" alt="profile" className="img avatar"/>
  <div className="badge"> </div>
</div>`}</code>{" "}
            <br /> <br />
            <code>{`<div>
  <img src="img/example.jpg" alt="profile" className="img avatar"/>
  <div className="badge badge-red"> </div>
</div>`}</code>{" "}
          </code>
        </pre>
      </div>
    </div>
  );
};
