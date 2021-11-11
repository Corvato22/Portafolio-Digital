import React from "react";
import styled from "styled-components";

const StyledProjectContainer = styled.div`
    width: 100%;
    background-color: var(--white);
    height: 96vh;
    `
const StyledTextTitleProjectContainer = styled.div`
    display: flex;
    margin: 0px 75px 75px 75px;
    background-color: var(--white);
    align-items: center;
    justify-content: space-between;
    `

const StyledTitleProject = styled.h1`
    color: var(--bg-color);
    background-color: var(--white);
    font-size: 48px;
    backdrop-filter: blur(10px);
    `
const StyledTextProject = styled.p`
    color: var(--bg-color);
    background-color: var(--white);
    width: 50%;
    font-size: 24px;
    `

const StyledDivCards = styled.div`
    display: flex;
    background-color: var(--white);
    width: auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0px 75px 0px 75px;
    `

const StyledCards = styled.div`
    width: 800px;
    height: 470px;
    background-color: var(--white);
    `

const StyledContainerText = styled.div`
    border: 1px solid var(--color);
    color: var(--white);
    width: 65%;
    padding: 24px 24px;
    position: relative;
    top: -240px;
    right:0px;

        h3{
        font-size: 24px;
        margin:0
        }

        p{
        font-size: 18px;
        color: var(--grey);
        }

        button{
        width: 140px;
        margin-right: 20px;
        margin-bottom: 20px;
        height: 35px;
        background-color: var(--color);
        cursor: pointer;
        border: none;
        transition: 0.5s ease-in-out;
        font-weight: bold;
        color: var(--white);

        &:hover {
        box-shadow: 0px 0px 20px 1px var(--color);
        }
    }
    `

const StyledImgProjectCards = styled.img`
    border: 1px solid var(--color);
    width: 85%;
    position: relative;
    left: 5%;
    `



const cardsInfo = [
    {
        'id': 1,
        'title': 'BlockMaster',
        'image': 'https://user-images.githubusercontent.com/89666937/141026809-65b22d9f-745d-4b65-b1f6-d90f8f9166c4.png',
        'description': 'Aplicación de peliculas que te ayudará a encontrar los mejores films del momento.',
        'linkProject': 'https://corvato22.github.io/Entrega-Proyecto-Sprint-1/',
        'linkCode': 'https://github.com/Corvato22/Entrega-Proyecto-Sprint-1'
    },
    {
        'id': 2,
        'title': 'Tribute Page',
        'image': 'https://user-images.githubusercontent.com/89666937/141222291-b7df27dd-67f7-4f6e-8e44-840d642d4737.png',
        'description': 'Página Tributo Responsive',
        'linkProject': 'https://corvato22.github.io/Free-Code-Camp/Responsive-Web-Design-Projects/Build-a-Tribute-Page/',
        'linkCode': 'https://github.com/Corvato22/Free-Code-Camp/tree/main/Responsive-Web-Design-Projects/Build-a-Tribute-Page'
    }
]

function Card({ id, title, image, description, linkProject, linkCode }) {
    return (
        <StyledCards key={id}>
            <StyledImgProjectCards src={image} alt={title}></StyledImgProjectCards>
            <StyledContainerText>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={linkProject} target="_blank" rel="noopener noreferrer"> <button>Ver Proyecto</button> </a>
                <a href={linkCode} target="_blank" rel="noopener noreferrer"> <button>Ver Código</button> </a>
            </StyledContainerText>
        </StyledCards>
    )
}

export default function Projects() {

    return (
        <>
            <StyledProjectContainer id="projects">
                <StyledTextTitleProjectContainer>
                    <StyledTitleProject>Parece magia, funciona con código.</StyledTitleProject>
                    <StyledTextProject>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</StyledTextProject>
                </StyledTextTitleProjectContainer>
                <StyledDivCards>
                    {cardsInfo.map(element => Card(element))}
                </StyledDivCards>
            </StyledProjectContainer>
        </>
    )
}