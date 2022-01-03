import { Component } from "react";

import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Card from "../../component/card/card";
import hdata from "../../data/home/hdata";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home flex flex-col justify-center items-center font-mono">
          <p className="m text-2xl my-28">pervious works</p>
          {hdata.map((hdata) => (
            <Card
              key={hdata.title}
              url={hdata.url}
              title={hdata.title}
              sentence={hdata.sentence}
            />
          ))}
        </div>
        <div className="FF h-72 bg-gray-700 rounded-t-[200PX] flex justify-center items-center">
          <h1>hwlrngfal</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
