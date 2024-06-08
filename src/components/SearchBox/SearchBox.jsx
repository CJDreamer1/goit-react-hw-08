import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.inputDecoration}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
