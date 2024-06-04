import { useSelector, useDispatch } from "react-redux";
// ^^ прив`язка до store - useSelector
// а от відправити запит щоб змінити щось в store - useDispatch
import { changeLang } from "../redux/localeSlice";

export default function LangSwitcher() {
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.locale.lang);

  const handleChange = (event) => {
    dispatch(changeLang(event.target.value));
  };
  return (
    <div>
      <select value={lang} onChange={handleChange}>
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
}
