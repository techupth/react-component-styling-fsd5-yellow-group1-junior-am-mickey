// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.buttonStyle === "primary") {
    return (
      <button
        css={css`
          color: white;
          border-radius: 5px;
          cursor: pointer;
          outline: none;
          margin: 20px;
          background-color: #064ee9;
          padding: 15px 60px 15px 60px;
        `}
      >
        Button
      </button>
    );
  } else if (props.buttonStyle === "secondary") {
    return (
      <button
        css={css`
          color: white;
          border-radius: 5px;
          cursor: pointer;
          outline: none;
          margin: 20px;
          background-color: #08a4e8;
          padding: 15px 60px 15px 60px;
        `}
      >
        Button
      </button>
    );
  }
}

export default Button;
