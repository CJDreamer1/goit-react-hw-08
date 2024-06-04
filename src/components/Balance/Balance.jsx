import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../redux/balanceSlice";

export default function Balance() {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.balance.value);
  // useState рендерить сторінку, коли змінюється в стані balance.value

  const handleDeposit = () => {
    dispatch(deposit(10));
  };

  const handleWithdraw = () => {
    dispatch(withdraw(5));
  };

  return (
    <div>
      <p>Balance: {value}</p>
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleWithdraw}>Withdraw credits</button>
    </div>
  );
}
