import styled from "styled-components";

export const StatisticsSection = styled.section`
margin: 100px auto; 
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 600px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: transparent;
  border-radius: 16px;
  box-shadow: -1px 17px 29px -12px black;
`
export const StatisticsTitle = styled.h1`
display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid;
  padding-top: 25px;
  padding-bottom: 25px;
  margin: 0 0;
  color: rgb(36, 35, 35);
`
export const StatisticsList = styled.ul`
  display: flex;
   justify-content: center;
  align-items: center;
  gap: 11px;
  width: 80%;
  padding: 16px 0;
  font-weight: 700;
`
export const StatisticsItem = styled.li`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 9px;
  border-right: 1px solid;
  border-color: black;
  width: 35%;
  padding: 20px 15px;
  border-radius: 9px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background: ${props => {
    const backgroundColor = getRandomColor();
    return backgroundColor;
  }};
`
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}