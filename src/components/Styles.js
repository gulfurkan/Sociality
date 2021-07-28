import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Title = styled(Link)`
background-color: #31363B;
height: 40px;
width: 280px;
color: #1D2023;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
position:fixed;
`;

export const SidebarNav = styled.div`
  background: #393D42;
  width: 210px;
  height: 100%;
  display: flex;
  justify-content: center;
  position:fixed;
  top: 40px;
  left: 70px;
  transition: 350ms;
  z-index: 10;
  overflow: scroll;
  &.comp{
    overflow-y:;
    width: 70px;
    left: 0px;
    background: #2A2F33;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;


export const SidebarWrap = styled.div`
  width: 100%;
`;

export const Not = styled.div`
color: #ffffff;
width: 30px;
align-content: center;
align-items: center;
border-radius: 5px;
border: 1px solid #59938B;
&.rt{
  background-color: #59938B;
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  font-size: 13px;
  bottom: 27px;
  left: 27px;
  border-radius: 15px;
  border: 2px solid #59938B;
}
`;


export const SidebarLink = styled(Link)`
  display: flex;
  background-color:${({ subnav }) => (subnav ? '#F55661' : '#393D42')};
  color: #FFFFFF;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 50px;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    background: #3AC183;
    cursor: pointer;
  }

`;

export const SidebarLabel = styled.span`
  margin-left: 8px;
`;

export const DropdownLink = styled(Link)`
  background: #32363A;
  height: 40px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ focus }) => (focus ? '#F55661;' : '#ffffff')}; 
  font-size: 13px;
  &:hover {
    background: #737D86;
    cursor: pointer;
  }
  
`;
export const CompanyNav = styled.div`
  background: #2A2F33;
  height: 35px;
  margin: 10px;
  margin-left: 0;
  align-items: center;
  display: inline-flex;
  
  &:hover {
    cursor: pointer;
  }
  &:focus{
    color: #F55661;
  }

  
`;

export const Container = styled.div`
  width: 40px;
  padding-right: 10px;
  background: white;
  margin-left: 15px;
  position: relative;  
  border-radius: 8px;
  border: 1px solid #ffffff;
  filter: ${({ light }) => (light ? 'brightness(120%)' : 'brightness(0.2)')};
`;
export const BorderX = styled.div`
  width:0;
  height:0;
  border-radius: 10px;
  border-right: 5px solid #F55661;
  border-left: 25px solid;
  border-top: 45px solid;
  position: absolute;

  right: 65px;

  
`;



