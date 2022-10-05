import React from "react";

function Copyright() {
  // function for display the current year
  const yearNow = new Date().getFullYear();
  return (
    <div className="copyright">
      <p>Find Love &copy; {yearNow}</p>
    </div>
  );
}

export default Copyright;
