import React from "react";

function Copyright() {
  // function for display the current year
  const yearNow = new Date().getFullYear();
  return (
    <div className="copyright">
      <p>find love &copy; {yearNow}</p>
    </div>
  );
}

export default Copyright;
