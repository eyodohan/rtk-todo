import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import { setVisibilityFilter, VisibilityFilter } from './visibilityFilterSlice';

interface FilterButtonProps {
  visibilityFilter: VisibilityFilter;
  text: string;
}

const FilterButton = ({ visibilityFilter, text }: FilterButtonProps) => {
  const dispatch = useDispatch();

  const currentVisibilityFilter = useSelector(
    (state: RootState) => state.visibilityFilter
  );
  return (
    <button
      disabled={currentVisibilityFilter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter)}
    >
      {text}
    </button>
  );
};

export default FilterButton;
