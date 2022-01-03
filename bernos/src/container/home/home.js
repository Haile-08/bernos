import { Component } from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home flex flex-col justify-center items-center font-mono">
          <p className="m text-2xl">pervious works</p>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
