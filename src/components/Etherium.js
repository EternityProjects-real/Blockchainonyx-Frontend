import "./Etherium.css";
import Chart from "./Chart";


const Main = () => {
  return (
  
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          
          <div className="main__greeting">
            <h1>Etherium</h1>
            <p>Dapps are a growing movement of applications that use Ethereum to disrupt business models or invent new ones.</p>
            
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">All Time Volume</p>
              <span className="font-bold text-title">$225B+</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Liquid Providers</p>
              <span className="font-bold text-title">72K+</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">ALl Time Trade</p>
              <span className="font-bold text-title">72K+</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Defi Integration</p>
              <span className="font-bold text-title">200+              </span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
    
        <div >
        <div >
          
          <div >
         
          </div>
        </div>

        <div >
        

          <div className="charts__right__cards">
            <div className="card1">
              <h1>Mined</h1>
              <p>$75,300,000</p>
            </div>

            <div className="card2">
              <h1>Sales</h1>
              <p>$244,200,000</p>
            </div>

            <div className="card3">
              <h1>Current Miners</h1>
              <p>1500</p>
            </div>

            <div className="card4">
              <h1>Value</h1>
              <p>7238</p>
            </div>
          </div>
        </div>
      </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
     <footer>Brought to you with <span className="heart">❤</span> by ️Etern!ty</footer> 
    </main>
    
    
  );
};

export default Main;