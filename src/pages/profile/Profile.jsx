import './profile.scss';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useState } from 'react';
const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/7250003/pexels-photo-7250003.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load
"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/2922450/pexels-photo-2922450.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load
"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>lv hao</span>
            <div className="info">
              <div className="item">
                <PlaceIcon></PlaceIcon>
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon></LanguageIcon>
                <span>lama.dev</span>
              </div>
              <button>follow</button>
            </div>
          </div>
          <div className="right">
            <EmailOutlinedIcon></EmailOutlinedIcon>
            <MoreVertIcon></MoreVertIcon>
          </div>
        </div>
        <Posts></Posts>
      </div>
    </div>
  );
};

export default Profile;
