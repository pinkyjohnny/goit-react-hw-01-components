import styled from 'styled-components'

export const ProfileCard = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 450px;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 12px 18px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: white;
  border-radius: 19px;
  box-shadow: -1px 13px 20px -12px black;
  background-color: rgba(177, 206, 232, 0.347)
`

export const ProfileDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0;
  `

export const ProfileAvatar = styled.img`
  border: 2px solid;
  border-radius: 80px;
  border-color: rgb(105, 105, 205);
  margin-top: 40px;
  width: 150px;
  height: 150px;
`
export const ProfileName = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
`
export const ProfileTag = styled.p`
  margin: 0 0;
  display: flex;
  justify-content: center;
  font-size: 17px;
  font-style: italic;
  color: rgb(55, 55, 55);
`

export const ProfileLocation = styled.p`
  display: flex;
  justify-content: center;
  font-size: 15px;
  color: rgb(159, 159, 255)0, 0, 255);
  text-decoration: underline;
`
export const ProfileStats = styled.ul`
display: flex;
width: 75%;
  column-gap: 8px;
  color: black;
  font-weight: 700;
   padding: 0;
  margin: 0;
`
export const ProfileStatsItem = styled.li`
padding: 20px 15px;  
display: flex;
  flex-direction: column;
  background:  rgb(108, 152, 209);
  border-right: 1px solid;
  border-color:  rgb(159, 151, 151);
  width: 40%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
`

export const ProfileStatsLabel = styled.span`
  display: flex;
  justify-content: center;
font-size: 18px;
  margin-bottom: 10px;
  color: rgb(41, 60, 84);
`
export const ProfileStatsQuantity = styled.span`
 display: flex;
  justify-content: center;
  font-weight: 700;
  color: rgb(53, 78, 109);
`

