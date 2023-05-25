import PropTypes from 'prop-types';

//Styles-------------------------------------
import { StyledList, StyledStatus } from './styledFriendsList';
//-------------------------------------------

const FriendList = ({ friends }) => {
  return (
    <StyledList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <StyledStatus status={isOnline ? 'true' : 'false'} />
          <img src={avatar} alt="Friend Avatar" width="100px" />
          <p>{name}</p>
        </li>
      ))}
    </StyledList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
