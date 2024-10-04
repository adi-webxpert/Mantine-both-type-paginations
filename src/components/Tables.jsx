import { Link } from "react-router-dom";

function Tables() {
  return (
    <div className="App">
      <header className="App">
        <span>Mantine DataTable with Pagination for Both Types of Data </span>
        <Link to={"/clientside"}>
          <h1 className="title">Client Side</h1>
        </Link>
        <Link to={"/serverside"}>
          <h1 className="title">Server Side</h1>
        </Link>
      </header>
    </div>
  );
}

export default Tables;
