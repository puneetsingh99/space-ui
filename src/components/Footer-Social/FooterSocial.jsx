import { Github, Twitter, Linkedin, Instagram } from "../../assets";

export const FooterSocial = () => {
  return (
    <div className="w-full p-4">
      <div className="flex justify-between w-f25 m-auto text-2xl  mb-4">
        <div className="footer-social-icon">
          <a href={"https://github.com/puneetsingh99/space-ui/"}>
            <Github />
          </a>
        </div>
        <div className="footer-social-icon">
          <a href={"https://twitter.com/puneetsingh1999"}>
            <Twitter />
          </a>
        </div>
        <div className="footer-social-icon">
          <a href={"https://www.linkedin.com/in/puneet-singh-7b6990199/"}>
            <Linkedin />
          </a>
        </div>
        <div className="footer-social-icon">
          <a href={"https://www.instagram.com/thelastspacetraveller/"}>
            <Instagram />
          </a>
        </div>
      </div>
      <p className="text-lg text-gray-500 w-f45 text-center m-auto">
        Created by Puneet Singh
      </p>
    </div>
  );
};
