import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


const StyledFooterContainer = styled.div`
    padding: 10px 75px 10px 75px;
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 40px !important; 
    height: 40px; 
    margin-right: 10px;
    color: var(--white);
    cursor: pointer;

        &:hover:active {
        transform:scale(.90);
        }
`


export default function Footer() {
    return (
        <>
            <footer>
                <StyledFooterContainer>
                    <p>Hecho por Corvato22. Copyright 2021 - Todos los derechos reservados.</p>
                    <div>
                        <a href="https://github.com/Corvato22" target="_blank" rel="noopener noreferrer">
                            <StyledIcon icon={faGithub} />
                        </a>
                        <a href="https://www.instagram.com/corvato22/" target="_blank" rel="noopener noreferrer">
                            <StyledIcon icon={faInstagram} />
                        </a>
                    </div>
                </StyledFooterContainer>
            </footer>
        </>
    )

}