import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchContainer}>
      <span>Find contacts by name</span>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
