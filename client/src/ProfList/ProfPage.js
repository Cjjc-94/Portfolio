import React from "react";
import { useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  HiLocationMarker,
  HiOutlineArrowLeft,
  HiPhone,
  HiMail,
  HiGlobeAlt,
} from "react-icons/hi";


function ProfPage() {
  const location = useLocation();
  const {prof} = location.state

  return (
    <div className="ProfPage">
      <div className="prof_header">
            <div className="prof_card_first_row">
      <React.Fragment>
        <Link to={{pathname:"/profFilter", state: {prof}}}>
          <HiOutlineArrowLeft style={{fill: "#ffffff"}}/>
        </Link>
      </React.Fragment>
                <img src={prof.image} className="profile_pic_prof_card" alt="profile"/>
              <div className='profile_info_prof_card'>
                <h3 className="prof_header_text">{prof.firstName} {prof.lastName}</h3>
                <p className="prof_header_text">{prof.profession}</p>
                <p className="prof_header_text"><HiLocationMarker className="prof_header" /> {prof.city}</p>
              </div>
            </div>
          </div>
          <div className="prof_info_page">
            <h3>Contact info</h3>
            <p><HiPhone/>   {prof.phone}</p>
            <p><HiMail/>   {prof.email}</p>
            <p><HiLocationMarker/> {prof.address}</p>
            <p> <HiGlobeAlt/> {prof.website}</p>
            <h3>About</h3>
            <p>{prof.description}</p>
            <h3>General info</h3>
            <p>experience: <b>{prof.experience}</b></p>
            <p>education: <b>{prof.education}</b></p>
          </div>
    </div>
  )
}

export default ProfPage;