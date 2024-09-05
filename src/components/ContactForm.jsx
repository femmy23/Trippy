import React from "react";
import { styled } from "styled-components";

const FormContainer = styled.div`
  margin: 4rem 6rem;
  color: #2a2a2a;
  @media screen and (max-width: 850px) {
    margin: 4rem 2rem;
  }
`;
const Form = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  @media screen and (max-width: 850px) {
    width: 90%;
    padding-top: 2rem;
  }
`;
const Input = styled.input`
  height: 3rem;
  outline: none;
  padding: 0 1rem;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
  border: 1px solid var(--color-black);
`;
const TextArea = styled.textarea`
  height: 3rem;
  padding: 1rem;
  outline: none;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
  border: 1px solid var(--color-black);
`;
const Button = styled.button`
  display: inLine;
  outline: none;
  border: none;
  border-radius: 5px;
  background: var(--color-black);
  color: var(--color-white);
  padding: 0.6rem;
  cursor: pointer;
  transition: var(--transition);
  &:active {
    transform: scale(0.96);
  }
`;
const H1 = styled.h1`
  text-align: center;
`;

export default function ContactForm() {
  return (
    <FormContainer>
      <H1>Send Message to Us</H1>
      <Form>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Subject" />
        <TextArea placeholder="Message" rows="6"></TextArea>
        <Button>Send Message</Button>
      </Form>
    </FormContainer>
  );
}
