import Ad from "component/Ad";
import Header from "component/Header";
import React from "react";

function App() {
  return (
    <div className=" flex items-center justify-center h-screen bg-gray-400">
      <section className="max-w-[480px] w-screen h-screen min-w-[320px] max-h-[926px] min-h-[640px] relative shadow-2xl bg-white">
        <Header />
        <Ad />
      </section>
    </div>
  );
}

export default App;
