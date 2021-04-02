
import { FooterSocial } from "../Footer-Social/FooterSocial";
import space from "../../assets/space.svg";

export const Home = ({ setRoute }) => {
  return (
    <main className="w-full">
      <section className="m-auto home-page text-center pt-4">
        <div className="home-page__hero m-auto">
          <img src={space} alt="space ui logo" className="responsive-img mb-6" />
          <h1 className="text-4xl text-center mb-6">Space UI</h1>
        </div>
        <p className="text-gray-600 text-2xl mb-6">
          Simple, Highly customizable, CSS component Library
        </p>

        <button
          className="btn text-lg font-semibold mb-16"
          onClick={() => setRoute("avatar")}
        >
          Get Started
        </button>

        <p className="text-gray-600 text-lg home-page__code-container">
          Use the stylesheet link given below into your{" "}
          <code className="code-line">&lt;head&gt;</code> tag before all other
          stylesheets to load our CSS.
        </p>
        <div className="content-container code-container home-page__code-container mt-4 mb-16">
          <pre className="text-lg">
            <code>
              &lt;link rel="stylesheet"
              href="https://spaceuicss.netlify.app/main.css"&gt;
            </code>
          </pre>
        </div>
        <div className="home-page__footer p-4 mt-12">
          <div className="footer-social home-page__footer-social m-auto">
            <FooterSocial />
          </div>
          <p className="text-lg text-gray-500 w-full text-center m-auto font-semibold">
            Thank you Tailwind CSS, Bootstrap, Material UI and Chakra UI for
            inspiring this project.
          </p>
        </div>
      </section>
    </main>
  );
};
