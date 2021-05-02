import "./Main.css";
import Chart from "./Chart";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
  
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          
          <div className="main__greeting">
            <h1>Dashboard User</h1>
            <p>Simple Dashboard for the User</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}
        <form method="post" action="http://127.0.0.1:5000/">
        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Amount</p>
              <span className="font-bold text-title"><input type="text" id="transaction_amt" name="transaction_amt" /></span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Senders Addres</p>
              <span className="font-bold text-title"><input type="text" id="sender_id" name="sender_id" /></span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Recivers Address</p>
              <span className="font-bold text-title"><input type="text" id="reciver_id" name="reciver_id" /></span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Make Payment</p>
              <span className="font-bold text-title"><input type="submit" id="submit" value="Submit" /></span>
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
            <div className="Final_charts">
            <Chart />
            </div>
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