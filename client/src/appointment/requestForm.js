import React from "react";
import { useLocation} from 'react-router-dom';

function ReqForm() {
  const location = useLocation();
  const {prof} = location.state

  return (
    <div>
      <p>ONLY BASIC FRONTEND IMPLEMENTED</p>
      <p>Contact {prof.firstName} for an appointment!</p>
      <form className="app_req_form">
        <input type="text" placeholder="enter address for the appointment"/>
          <p>
          <input type="radio" value="Within 7 days"></input> Within 7 days
          </p>
          <p>
          <input type="radio" value="Within 14 days"></input> Within 14 days
          </p>
          <p>
          <input type="radio" value="later than 14 days"></input> later than 14 days
          </p>
        <input type="text" placeholder="enter description for the appointment"/>
      </form>
    </div>

  )
}

export default ReqForm;