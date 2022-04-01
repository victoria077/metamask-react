import "./Account.css";

function Account (props) {
  return (
    <div className="account">
      <p>{props.accountNumber}</p>
    </div>
  );
};
export default Account;
