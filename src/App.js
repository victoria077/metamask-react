import { useState } from "react";
import Account      from "./components/Account/Account";
import Login        from "./components/Login/Login";
import Web3         from "web3";

function App() {
    const [ isConnected, setConnection ] = useState(false);
    const [ accountNumber, setAccount ] = useState(null);

    const onLogin = async (provider) => {
        const web3     = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setConnection(true);
    };

    return (
        <div>
            <main>
                {!isConnected && <Login onLogin={onLogin}/>}
                {isConnected && (
                    <Account accountNumber={accountNumber}/>
                )}
            </main>
        </div>
    );
}

export default App;
