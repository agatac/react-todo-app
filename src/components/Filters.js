import React, { PropTypes } from 'react'
import Link from './Link'

const Filters = ({currentFilter, onFilterClick}) => (
  <p>
    Show:
    {" "}
    <Link active={"SHOW_ALL"===currentFilter} onClick={() => {onFilterClick("SHOW_ALL")}}>
      All
    </Link>
    {", "}
    <Link active={"SHOW_ACTIVE"===currentFilter} onClick={() => {onFilterClick("SHOW_ACTIVE")}}>
      Active
    </Link>
    {", "}
    <Link active={"SHOW_COMPLETED"===currentFilter} onClick={() => onFilterClick("SHOW_COMPLETED")}>
      Completed
    </Link>
  </p>
)
Filters.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired
}
export default Filters