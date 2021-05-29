import React, { Component } from "react";
import styled from "styled-components";

const LoginBoxUser = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const LoginBoxUserInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`;

export class SearchPlaylist extends Component {
  render() {
    return (
      <div className="pageInner">
        <div className="cardsWrap">
          <div className="cardsWrapInner">
            <LoginBoxUser>
            <LoginBoxUserInput
              type="text"
              placeholder="Procurar música"
            />
          </LoginBoxUser>
          </div>

          <ul className="songList">
              <li>
                <div className="songIcon">
                  <h1>+</h1>
                </div>
                <div className="songDetails">
                  <h3>Hold Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>


            </ul>
        </div>
      </div>
    );
  }
}

export default SearchPlaylist;
