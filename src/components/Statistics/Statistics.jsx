import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'
import randomColor from './randomColor'

const Statistics = ({ title, stats }) => (
	<section className={styles.statistics}>
		{title && <h3 className={styles.title}>{title}</h3>}

    <ul className={styles.statList}>
			{stats.map(item => {
				return	<li key={item.id} className={styles.item} style={{ backgroundColor: randomColor() }}>
					<span className={styles.label}>{item.label}</span>
					<span className={styles.percentage}>{item.percentage}%</span>
				</li>
      })}
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
