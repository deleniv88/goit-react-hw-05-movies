import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    background-color: gray;
    border: none;
    border-radius: 5px;
    padding: 10px;

&.active{
    background-color: brown;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;

}
:hover:not(.active),
:focus-visible:not(.active){
    color: white;
    background-color: rgb(198, 94, 94);
}
`
export const Container = styled.div`
 display: flex;
    font-size: 20px;
    justify-content: space-evenly;
    margin-bottom: 10px;
    padding: 20px;
    border-bottom: 1px solid gray;
    box-shadow: 10px 5px 5px gray;
`


