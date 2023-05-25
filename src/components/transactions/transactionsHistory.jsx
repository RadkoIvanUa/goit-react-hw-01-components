import PropTypes from 'prop-types';

//Styles----------------------------------------
import { StyledTable } from './styledTransactionsHistory';
//----------------------------------------------

const TransactionsHistory = ({ items }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionsHistory;
