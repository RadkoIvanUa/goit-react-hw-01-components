import PropTypes from 'prop-types';
// Styles------------------------------------
import {
  StyledProfile,
  StyledDescription,
  StyledName,
  StyledInfo,
  StyledStats,
} from './styledUser';
//-------------------------------------------

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <StyledProfile>
      <StyledDescription>
        <img src={avatar} alt="User avatar" className="avatar" width="150px" />
        <StyledName>{username}</StyledName>
        <StyledInfo>
          <p>@{tag}</p>
          <p>{location}</p>
        </StyledInfo>
      </StyledDescription>

      <StyledStats>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </StyledStats>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
