import PropTypes from 'prop-types';
import getRandomHexColor from 'helpers/colorRandomizer';

// Sytyles-------------------------------------
import { StyledSection, StyledList } from './styledStatistics';

// --------------------------------------------

const Statistics = ({ title, stats }) => {
  return (
    <StyledSection>
      {title.length > 0 && <h2>{title}</h2>}

      <StyledList>
        {stats.map(value => (
          <li key={value.id} style={{ backgroundColor: getRandomHexColor() }}>
            <span>{value.label}</span>
            <span>{value.percentage}</span>
          </li>
        ))}
      </StyledList>
    </StyledSection>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
