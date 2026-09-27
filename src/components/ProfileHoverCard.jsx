import React from 'react';
import styled from 'styled-components';

const ProfileHoverCard = () => {
  return (
    <StyledWrapper>
      <div className="card">GWLADFERSON</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .card {
    position: relative;
    width: min(400px, 100%);
    aspect-ratio: 17 / 23;
    background: var(--bg2, #040f20);
    border: 1px solid var(--border, rgba(0,255,231,0.15));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 2px;
    color: var(--cyan, #00ffe7);
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 0 0 28px rgba(0,255,231,0.16);
  }

  .card::before,
  .card::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .card::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
    background-color: var(--dim, #0a2540);
  }

  .card::after {
    bottom: 0;
    left: 0;
    width: 38%;
    height: 46%;
    border-radius: 0 100% 0 15px;
    background-image: url('/assets/profile.png');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    z-index: 10;
  }

  .card:hover::before,
  .card:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
  }

  // Appareils tactiles : pas de hover, photo affichée en plein par défaut
  @media (hover: none) {
    .card::after {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }
  }
`;

export default ProfileHoverCard;
