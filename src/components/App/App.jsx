import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";
import LangSwitcher from "../LangSwitcher";
import { selectLang } from "../../redux/localeSlice";

export default function App() {
  const lang = useSelector(selectLang);
  return (
    <div>
      <h1>State management with Redux</h1>
      <Balance />
      <LangSwitcher />
      <p>Current language:{lang}</p>
    </div>
  );
}
