import styled from "styled-components";

export const Card = styled.div`
  background: rgba(124, 138, 143, 0.253);
  width: 80%;
  padding: 2rem;
  margin: 4rem auto;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
  border: none;
  padding: 0.7em 1.3em;
  height: 3rem;
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #210062 0%, #2d2727 0%);
  cursor: pointer;
  text-decoration: none;
  font-size: 1.1em;
  color: #fff;
  font: inherit;
  font-weight: bold;
  transition: 0.5s;
  cursor: pointer;
  outline: none;
  border-radius: 6px;
  transition: 0.3s;

  &:hover {
    color: #ffe5ca;
    transition: 0.3s;
  }
  @-webkit-keyframes btn-pulsando {
    to {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  @keyframes btn-pulsando {
    to {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
      color: #ffe5ca;
    }
  }

  &:hover,
  &:focus,
  &:active {
    -webkit-animation-name: btn-pulsando;
    animation-name: btn-pulsando;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
  }
`;
