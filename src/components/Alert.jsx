// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  return (
    <div className={`${"component-style"} ${props.alertStyle}`}>
      <img src={props.alertImg} alt="" />
      {props.alertText}
    </div>
  );
}

export default Alert;

// if else solution
//
// function Alert(props) {
//   if (props.alertStyle === "error-alert") {
//     return (
//       <div
//         className="component-style"
//         css={css`
//           background-color: rgba(249, 200, 200, 1);
//         `}
//       >
//         <img src={frown} alt="" />
//         <p>This is error alert box</p>
//       </div>
//     );
//   } else if (props.alertStyle === "warning-alert") {
//     return (
//       <div
//         className="component-style"
//         css={css`
//           background-color: rgba(249, 217, 200, 1);
//         `}
//       >
//         <img src={alertTriangle} alt="" />
//         <p>This is warning alert box</p>
//       </div>
//     );
//   } else if (props.alertStyle === "info-alert") {
//     return (
//       <div
//         className="component-style"
//         css={css`
//           background-color: rgba(249, 235, 200, 1);
//         `}
//       >
//         <img src={alertCircle} alt="" />
//         <p>This is info alert box</p>
//       </div>
//     );
//   } else if (props.alertStyle === "success-alert") {
//     return (
//       <div
//         className="component-style"
//         css={css`
//           background-color: rgba(206, 247, 205, 1);
//         `}
//       >
//         <img src={checkCircle} alt="" />
//         <p>This is success alert box</p>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <p>This is alert box</p>
//       </div>
//     );
//   }
// }
