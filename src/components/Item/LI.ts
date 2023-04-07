import styled from "styled-components";

export const LI = styled.li`
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
  background: white;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 2rem;
  border-radius: 0.75rem;



  .list-title {
    font-size: 1rem;
  }

  .list-price {
    font-size: 0.75rem;
  }

  .image { 
    width: 200px;
    height: 50px;
  }

  .remove-item {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`