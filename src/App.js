/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const tableStyles = css({
    opacity: "0",
    transform: "translateY(-20px)",
    transition: "opacity 0.3s, transform 0.3s",
    visibility: "hidden",
  });
  const tableShowStyles = css({
    opacity: "1",
    transform: "translateY(0)",
    visibility: "visible",
  });

function App() {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowTable(!showTable)}>Toggle Table</button>
      <div css={showTable ? [tableStyles, tableShowStyles] : tableStyles}>
        <table>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;