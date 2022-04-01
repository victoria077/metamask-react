import { useState } from "react";
import "./Login.css";

function Login (props) {
  const [inConnectionProgress, setConnection] = useState(false);

  const onLogin = async () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else {
      provider = window.web3.currentProvider;
    }
    if (provider) {
      setConnection(true);
      await provider.request({
        method: "eth_requestAccounts",
      });
      setConnection(false);
    }
    props.onLogin(provider);
  };

  return (
    <div className="container">
      {!inConnectionProgress &&
          <button onClick={onLogin} className="button" type="button">Get public key
          </button>
      }
      {inConnectionProgress &&
          <div className="login">Please login
          </div>
      }
    </div>
  );
};

export default Login;
