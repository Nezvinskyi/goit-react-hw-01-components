import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h3 className="title">{title}</h3>}

    <ul className="stat-list">
      {stats.map(item => (
        <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: 'Statistics:',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
