import PropTypes from "prop-types";

const TodosListItem = ({ item, handleDelete }) => {
  const {  name, number } = item;

  return (
    <li>
      <div className="flex justify-content-between">
        <span> { name }:{number}</span>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

TodosListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodosListItem;