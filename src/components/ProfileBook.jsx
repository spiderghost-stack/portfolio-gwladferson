import React from 'react';
import styled from 'styled-components';

const ProfileBook = () => {
  return (
    <StyledWrapper>
      <div className="book">
        <div className="inside-content">
          <img src="/assets/profile.png" alt="Gwladferson Wenon" className="inside-img" />
        </div>
        <div className="cover">
          <p className="hello-text">Hello !</p>
          <p className="sub-text">Je suis Gwladferson</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  .book {
    position: relative;
    border-radius: 10px;
    width: 280px;
    height: 380px;
    background-color: var(--bg2, #040f20);
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: var(--cyan, #00ffe7);
    border: 1px solid var(--border, rgba(0,255,231,0.15));
  }

  .inside-content {
    width: 100%;
    height: 100%;
  }
  
  .inside-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 10px;
  }

  .hello-text {
    font-size: 24px;
    font-weight: bolder;
    font-family: 'Orbitron', sans-serif;
    text-shadow: 0 0 8px #00ffe7;
    margin-bottom: 10px;
  }

  .sub-text {
    font-size: 14px;
    font-family: 'Share Tech Mono', monospace;
    color: var(--text, #c8e8ff);
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: var(--dim, #0a2540);
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid var(--border, rgba(0,255,231,0.15));
  }

  .book:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }
`;

export default ProfileBook;
