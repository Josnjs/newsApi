import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <h1>
          <Link to={"/"}>
            {" "}
            <spam className="news">N</spam>EWS
          </Link>
        </h1>
      </header>
    </>
  );
}
