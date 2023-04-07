import styled from "styled-components";


export const Header = styled.header`
    position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 15vh;
  background-color: #009FBD;
  align-items: center;
  justify-content: space-evenly;

  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  /* z-index: 2; */


  nav {
  max-width: 100%;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-bar-total {
    color: #393646;
    font-size: 16px;
    font-weight: 800;
  }


  .clean-btn {
    font-family: sans-serif;
    font-weight: 600;
    font-size: 20px;
    border-radius: 3px;
  }


@media (max-width: 800px) {
  .courses-section {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .nav-bar-actions {
    min-width: 50%;
  }

  .nav-bar-total-quantity {
    font-size: 2rem;
  }

  .list-title {
    font-size: 1rem;
  }

  .list-price {
    font-size: 1rem;
  }

  .remove-btn {
    font-size: 1rem;
  }

  .clean-btn {
    font-family: sans-serif;
    font-weight: 600;
    font-size: 20px;
    border-radius: 3px;
  }

  .nav-bar-total-price {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}

}

`