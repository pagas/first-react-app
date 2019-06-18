import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className={`${item.completed ? 'completed' : 'pending'}`}
        >
          {/*
                * If the task is completed we assign the
                * .completed class otherwise .pending
                */}
          {item.task}

          <div className="actions">
            {/*
                      * Using a callback on the onClick we call our
                      * markAsCompleted function
                      */}
            <span
              role="button"
              tabIndex="0"
              className={item.completed ? 'hide' : 'done'}
              onClick={() => props.markAsCompleted(item.id)}
              onKeyDown={() => props.removeTask(item.id)}
            >
              <i className="fa fa-check" />
            </span>

            {/*
                      * Using a callback on the onClick we call
                      * our removeTask function
                      */}
            <span
              role="button"
              className="trash"
              tabIndex="0"
              onClick={() => props.removeTask(item.id)}
              onKeyDown={() => props.removeTask(item.id)}
            >
              <i className="fa fa-trash" />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    task: PropTypes.string,
    completed: PropTypes.string
  })),
  markAsCompleted: PropTypes.func,
  removeTask: PropTypes.func
};

export default List;
