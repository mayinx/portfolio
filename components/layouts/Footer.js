import { BsGithub, BsLinkedin, BsStackOverflow, BsEnvelopeFill } from "react-icons/bs";
import { FaXingSquare } from "react-icons/fa";
import Obfuscate from "react-obfuscate";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 gap-3 border-top">
        <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start align-items-center">
          <span className="text-muted">&copy; 2022 Christian Daum</span>
        </div>

        <ul className="nav col-12 col-md-5 justify-content-center justify-content-md-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="https://github.com/mayinx">
              <BsGithub size="2rem" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://www.linkedin.com/in/christian-daum-4397a021a/">
              <BsLinkedin size="2rem" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://www.xing.com/profile/Christian_Daum33/">
              <FaXingSquare size="2rem" />
            </a>
          </li>

          <li className="ms-3">
            <Obfuscate
              className="text-muted"
              email="christian.daum@protonmail.com"
              target="_blank"
              headers={{
                subject: "[Portfolio] ",
              }}
            >
              <BsEnvelopeFill size="2rem" />
            </Obfuscate>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://stackoverflow.com/users/664333/mayinx">
              <BsStackOverflow size="2rem" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
