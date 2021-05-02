import "./Miner.css";
import Chart from "./Chartmining";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}
        <form method="post" action="http://127.0.0.1:5000/mine">
        <div className="main__title">
          
          <div className="main__greeting">
            <h1>Dashboard Miner</h1>
            <p>Simple Dashboard for the Miner</p>
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
            <p className="text-primary-p">Miner Key</p>
              <span className="font-bold text-title"><input type="text" id="mine_user" name="mine_user"/></span>
            </div>
          </div>
          

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
            <p className="text-primary-p">Mine New coin</p>
              <input type="submit" id="submit"value="Submit"></input>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
            <p className="text-primary-p">Reward</p>
              <span className="font-bold text-title">50 Coin</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Mined Coins</p>
              <span className="font-bold text-title">200 Coin</span>
            </div>
          </div>
        </div>
        </form>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Bitcoins Mined</h1>
                <p>Value uncertainity</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Silicon valley, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Mined</h1>
                <p>150</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>244,000</p>
              </div>

              <div className="card3">
                <h1>Current Miners</h1>
                <p>15</p>
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
    </main >
  );
};

export default Main;
