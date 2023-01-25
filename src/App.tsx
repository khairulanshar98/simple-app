import React from "react";
//@ts-ignore
const RemoteApp = () => import("single/spa");

function App() {
  React.useEffect(() => {
    RemoteApp().then((a: any) => {
      a.default("single-spa-container");
    });
  });
  return (
    <div id="single-spa-container">
      This text will be replaced by the Single SPA
    </div>
  );
}

export default App;
