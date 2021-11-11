import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0px;
    width: 92.1%;
    height: 60px;
    z-index: 1;
    padding: 0px 75px 0px 75px;
    `
    
const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
const StyledDivNav = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    `
const StyledImgLogo = styled.img`
    width: auto;
    height: 50px;
    border-radius: 100%;
    margin-right: 40px;
    `
const StyledNavA = styled.a`
    font-size: 20px;
    text-decoration: none;
    margin-right: 40px;
    color: var(--white);
    `
const StyledButton = styled.button`
    width: 206px;
    height: 48px;
    background-color: var(--color);
    cursor: pointer;
    border: none; 
    transition: 0.5s ease-in-out;
    font-weight: bold;
    color: var(--white);

    &:hover {
    box-shadow: 0px 0px 20px 1px var(--color);
    }
    `
const StyledDivHero = styled.div`
    width: auto;
    height: 96vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 75px 10px 75px;
    `

const StyledTitleHero = styled.h1`
    font-size: 74px;
    color: var(--white);
    `
const StyledDescriptionHero = styled.p`
    font-size: 28px;
    color: var(--grey);
    `
const StyledImageHero = styled.img`
    width: 600px;
    transition: 0.5s ease-in-out;

    &:hover {
    box-shadow: 0px 0px 20px 1px var(--color);
    }
    `
const StyledIcon = styled(FontAwesomeIcon)`
    width: 56px !important; 
    height: 56px; 
    color: var(--color);
    margin-top: 32px;
    cursor: pointer;

    &:hover:active {
    transform:scale(.90);
    }
`
export default function Header() {

    return (
        <>
            <StyledDiv id="hola">
                <StyledNav>
                    <StyledDivNav>
                        <StyledImgLogo src="https://t4.ftcdn.net/jpg/03/58/44/57/360_F_358445706_RzMwx0YImAs2qk4LABlED53enCUPV5xn.jpg" alt="Cuervo"></StyledImgLogo>
                        <StyledNavA href="">Hola</StyledNavA>
                        <StyledNavA href="#projects">Proyectos</StyledNavA>
                        <StyledNavA href="#contact">Contacto</StyledNavA>
                    </StyledDivNav>
                    <a href="https://www.linkedin.com/in/corvato22/" target="_blank" rel="noopener noreferrer"> <StyledButton>Descargar currículum</StyledButton></a>
                </StyledNav>
            </StyledDiv>

            <StyledDivHero>
                <div>
                    <StyledTitleHero>¡Hola a todos!</StyledTitleHero>
                    <StyledTitleHero>Soy Carlos Uribe</StyledTitleHero>
                    <StyledDescriptionHero>Developer que le encanta implementar diseños que inspiran y atraen a las personas.</StyledDescriptionHero>
                    <a href="#projects">
                        <StyledIcon icon={faArrowDown} />
                    </a>
                </div>
                <div>
                    <StyledImageHero src="https://avatars.githubusercontent.com/u/89666937?v=4" alt="Foto Perfil"></StyledImageHero>
                </div>
            </StyledDivHero>
        </>
    )
}