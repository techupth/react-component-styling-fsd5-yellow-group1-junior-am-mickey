// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <button
        css={css`
          display: block;
          background-color: #074ee8;
          margin: 10px;
          width: 170px;
          height: 50px;
          border: none;
          border-radius: 4px;
          color: white;
          font-weight: 400;
          font-size: 16px;
          font-family: "Sarabun", sans-serif;
        `}
      >
        {props.text}
      </button>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        css={css`
          display: block;
          background-color: #07a4e8;
          margin: 10px;
          width: 170px;
          height: 50px;
          border: none;
          border-radius: 4px;
          color: white;
          font-weight: 400;
          font-size: 16px;
          font-family: "Sarabun", sans-serif;
        `}
      >
        {props.text}
      </button>
    );
  }
}

export default Button;
