import {useState, useEffect } from 'react';
import ApiService from '../ApiService';
import ProfList from './ProfList';
import {
  HiSearch,
} from "react-icons/hi";

function ProfFilter() {
  const [profs, setProfs]= useState([]);
  const [name, setName] =useState('');
  const [profess, setProfession] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    ApiService.getProfs()
    .then(profs => {
      setProfs(profs)
    })
  }, [])

  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleProfChange(e) {
    setProfession(e.target.value)
  }
  function handleLocationChange(e) {
    setLocation(e.target.value)
  }


  function handleSubmit (e) {
    e.preventDefault()
    if (!name && !profess && !location ) return alert('Please select a filter');
    e.target.reset();
    setName('');
    setProfession('');
    setLocation('');
  }

  function search(pros) {
      const result = pros.filter((pro) =>
      (pro.firstName.indexOf(name) > -1 ||
      pro.lastName.indexOf(name) > -1) &&
      pro.city.indexOf(location) > -1
      &&
      pro.profession.indexOf(profess) > -1
        )
      return result

  }


  return (
    <div>
      <h3>Find Professionals in your area!</h3>
    <form className="prof_filter_form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search by Name" value={name} onChange={handleNameChange} className="form_input"/>
      <input type="text" placeholder="Location" value={location} onChange={handleLocationChange} className="form_input"/>
      <select value={profess} onChange= {handleProfChange} >
        <option value="">Select a profession...</option>
        <option value="Veterinarian">Veterinarian</option>
        <option value="Farrier">Farrier</option>
        <option value="Dentist">Dentist</option>
        <option value="Physical therapist">Physical therapist</option>
        <option value="Trainer">Trainer</option>
        <option value="Bit fitter">Bit fitter</option>
        <option value="Saddle fitter">Saddle fitter</option>
        <option value="Paramedical care">Paramedical care</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" className="form-submit"> <HiSearch style={{fill: "#ffffff"}}/></button>
    </form>
    <ProfList profs={search(profs)} id="list"></ProfList>
    </div>
  )
}

export default ProfFilter
