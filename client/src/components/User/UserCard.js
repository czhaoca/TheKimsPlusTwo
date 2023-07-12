import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { logoutAsync } from '../../redux/users/thunks';
import { getAccessToken, removeAccessToken } from '../../utils/storage';

function UserCard() {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  const logout = () => {
    //TODO(JY): 구글에 remove token 요청하기
    dispatch(logoutAsync());
  };

  return (
    <Margin>
      <div>
        <ProfileImage src={user.photo} alt={user.firstName} />
        <p>
          Welcome, <Bold>{user.firstName}</Bold>!❤️
        </p>
      </div>
      <Button variant="outlined" color="error" onClick={logout}>
        LogOut
      </Button>
    </Margin>
  );
}

export default UserCard;

const Margin = styled.div`
  margin: 20px;
  height: 21vh;
  font-family: arial, sans-serif;
  line-height: 30pt;
  text-align: center;
`;

const Bold = styled.b`
  font-weight: bold;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
`;
