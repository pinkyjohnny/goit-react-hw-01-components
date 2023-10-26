import styled from "styled-components";

export const FriendsList = styled.ul`
 display: flex;
  flex-direction: column;
  align-items: center;
  
  max-width: 450px;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 12px 18px;
  gap: 13px;

  background-color: #ffffff;
  border: 1px solid;
  border-color: rgb(90, 90, 98);
  border-radius: 18px;
  box-shadow: -1px 15px 30px -12px black;
  `
export const FriendsListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  
  padding: 10px 8px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`
export const FriendsListAvatar = styled.img`
margin-right: 25px;
  margin-left: 15px;
  border: 1px solid;
  border-color: rgb(90, 90, 98);
  border-radius: 50%;
`
export const FriendsListName = styled.p`
 font-size: 24px;
  font-weight: 600;
`
export const FriendsListStatus = styled.span`
 width: 13px;
  height: 13px;
  display: inline-block;

  border-radius: 50%;
  margin-right: 8px;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  margin-right: 24px;
`