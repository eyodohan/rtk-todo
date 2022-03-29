import FilterButton from './FilterButton';
import { VisibilityFilter } from './visibilityFilterSlice';

const Footer = () => {
  return (
    <div>
      <span>Show: </span>
      <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text={'All'} />
      <FilterButton
        visibilityFilter={VisibilityFilter.ShowActive}
        text={'Active'}
      />
      <FilterButton
        visibilityFilter={VisibilityFilter.ShowCompleted}
        text={'Completed'}
      />
    </div>
  );
};

export default Footer;
