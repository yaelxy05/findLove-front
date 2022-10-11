import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// Import CSS
import "./progressBar.scss";

function ProgressBar({
  step1Title,
  step2Title,
  step3Title,
  number1,
  number2,
  number3,
  page,
}) {
  return (
    <div className="progress-bar">
      <div className="step">
        <p>{step1Title}</p>
        {page <= 0 && (
          <div className="bullet">
            <span>{number1}</span>
          </div>
        )}
        {page > 0 && (
          <>
            <div className="check bullet_active">
            <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
            </div>
          </>
        )}
      </div>
      <div className="step">
        <p>{step2Title}</p>
        {page <= 1 && (
          <div className="bullet">
            <span>{number2}</span>
          </div>
        )}
        {page > 1 && (
          <>
            <div className="check bullet_active">
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
            </div>
          </>
        )}
      </div>
      <div className="step">
        <p>{step3Title}</p>
        {page <= 2 && (
          <div className="bullet">
            <span>{number3}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
