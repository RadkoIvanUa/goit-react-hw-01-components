import PropTypes from 'prop-types';

//Styles-------------------------------------
import { StyledStatus } from './styledFriendsItemStatusss';
//-------------------------------------------

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li>
    <StyledStatus status={isOnline ? 'true' : 'false'} />
    <img src={avatar} alt="Friend Avatar" width="100px" />
    <p>{name}</p>
  </li>
);

FriendListItem.protoType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
