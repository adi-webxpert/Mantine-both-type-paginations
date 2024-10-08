import "./App.css";
import "@mantine/core/styles.css";
import TableWithServer from "./components/TableWithServer.tsx";
import TableWithPagi from "./components/TableWithClient.tsx";
import { Route, Routes } from "react-router-dom";
import Tables from "./components/Tables.tsx";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Tables />} />
          <Route path="/serverside" element={<TableWithServer />} />
          <Route path="/clientside" element={<TableWithPagi />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
