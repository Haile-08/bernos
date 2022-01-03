import { Component } from "react";

import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Card from "../../component/card/card";
import hdata from "../../data/home/hdata";
import team from "../../data/team/team";
import Team from "../../component/team/team";

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
        <div className="FF h-auto bg-gray-700 rounded-t-[200PX] flex justify-center items-center">
          <h1 className="">Meet Our team</h1>
        </div>
        <div className="ff h-auto bg-gray-700 flex flex-col justify-center items-center">
          {team.map((team) => (
            <Team
              key={team.title}
              url={team.url}
              title={team.title}
              sentence={team.sentence}
            />
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
