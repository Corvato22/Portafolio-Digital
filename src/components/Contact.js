import React from "react";
import styled from "styled-components";
import { useForm } from '@formspree/react';


const StyledContactContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    background-image: url("https://miro.medium.com/max/11520/1*wW78UQQc85T5zlZFvK0tpA.jpeg");
    background-size: cover;
    height: 96vh;
    `

const StyledContactBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px;
    width: 40%;
    height: auto;
    border: 1px solid var(--color);

    form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }


    input{
    width: 80%;
    height: 40px;
    background-color: var(--white);
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

        &::placeholder{
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #A7A9BE;
        }

        &:focus{
        border-color: var(--color);
        outline: 1px solid var(--color);
        }
    }

    textarea{
    width: 80%;
    height: 100px;
    background-color: var(--white);
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

        &::placeholder{
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #A7A9BE;
        }

        &:focus{
        border-color: var(--color);
        outline: 1px solid var(--color);
        }
    }

    button{
    width: 140px;
    margin-top: 40px;
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

const StyledTitleContactBox = styled.div`
    color: var(--white);
    margin-bottom: 20px;
    
    h2{
    font-size: 48px;
    margin: 0;
    }

    p{
    font-size: 18px;
    color: var(--grey);
    }
    `

export default function Contact() {
    const [state, handleSubmit] = useForm("mleaqeob");
    if (state.succeeded) {
        return alert("Gracias por escribirme :)");
    }

    return (
        <>
            <StyledContactContainer id="contact">
                <StyledContactBox>
                    <StyledTitleContactBox>
                        <h2>Contacto</h2>
                        <p>Si estás interesado en trabajar conmigo en tu próximo proyecto, no dudes en escribirme.</p>
                    </StyledTitleContactBox>
                    <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Nombre completo" required />
                    <input type="email" name="email" placeholder="Correo electrónico" required />
                    <textarea name="message" placeholder="Escribe tu comentario aquí"></textarea>
                    <button type="submit" disabled={state.submitting}>Enviar mensaje</button>
                    </form>
                </StyledContactBox>
            </StyledContactContainer>
        </>
    )
}
