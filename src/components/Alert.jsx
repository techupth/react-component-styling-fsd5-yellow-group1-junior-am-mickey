// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ErrorIcon from "./frown.svg";
import WarningIcon from "./alert-triangle.svg";
import InfoIcon from "./alert-circle.svg"
import SuccessIcon from "./check-circle.svg"

function Alert(props) {
  if (props.alertStyle === "error-alert") {
    return (
      <div
        css={css`
          position: relative;
        `}
      >
        <img
          src={ErrorIcon}
          css={css`
            position: absolute;
            left: 9%;
            bottom: 24px;
          `}
        />
        <div
          css={css`
            width: 394px;
            height: 25px;
            color: #444444;
            padding: 22px;
            padding-top: 23px;
            padding-left: 53px;
            border-radius: 10px;
            margin: 30px;
            text-align: start;
            font-weight: bold;
            background-color: #fac8c8;
          `}
        >
          {props.alertText}
        </div>
      </div>
    );
  } else if (props.alertStyle === "warning-alert") {
    return (
      <div
        css={css`
          position: relative;
        `}
      >
        <img
          src={WarningIcon}
          css={css`
            position: absolute;
            left: 9%;
            bottom: 24px;
          `}
        />
        <div
          css={css`
            width: 394px;
            height: 25px;
            color: #444444;
            padding: 22px;
            padding-top: 23px;
            padding-left: 53px;
            border-radius: 10px;
            margin: 30px;
            text-align: start;
            font-weight: bold;
            background-color: #f9d9c8;
          `}
        >
          {props.alertText}
        </div>
      </div>
    );
  } else if (props.alertStyle === "info-alert") {
    {
      return (
        <div
          css={css`
            position: relative;
          `}
        >
          <img
            src={InfoIcon}
            css={css`
              position: absolute;
              left: 9%;
              bottom: 24px;
            `}
          />
          <div
            css={css`
              width: 394px;
              height: 25px;
              background-color: #f9ebc8;
              color: #444444;
              padding: 22px;
              padding-top: 23px;
              padding-left: 53px;
              border-radius: 10px;
              margin: 30px;
              font-weight: bold;
              text-align: start;
            `}
          >
            {props.alertText}
          </div>
        </div>
      );
    }
  } else if (props.alertStyle === "success-alert") {
    {
      return (<div
        css={css`
          position: relative;
        `}
      >
        <img
          src={SuccessIcon}
          css={css`
            position: absolute;
            left: 9%;
            bottom: 24px;
          `}
        />
        <div
          css={css`
            width: 394px;
            height: 25px;
            color: #444444;
            padding: 20px;
            border-radius: 10px;
            margin: 30px;
            padding: 22px;
            padding-top: 23px;
            padding-left: 53px;
            text-align: start;
            font-weight: bold;
            background-color: #cef7cd;
          `}
        >
          {props.alertText}
        </div>
        </div>
      );
    }
  }
}

export default Alert;
