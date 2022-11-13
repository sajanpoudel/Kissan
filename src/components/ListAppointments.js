import React, {useState, useEffect} from 'react'
import axios from 'axios';
const ListAppointments = () => {

    const [email, setEmail] = useState(""); 
    const [apps, setApps] = useState([]); 

    const getApps = async () => {

        try {
            const response = await axios.get("http://localhost:4000/appointments")
            setApps(response.data);
        } catch (error) {
            console.log(error);    
        }
    }

    useEffect(() => {
        getApps();
    },[]);

    console.log(apps);
    
  return (
    <div>ListAppointments
    <p></p>
<table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
       
    {apps.map(app => (
        <tr key ={app.id}>
            <td>{app.name}</td>
            <td>{app.location}</td>
            <td>{app.email}</td>
            <button onClick = {(e) => setEmail(app.email)}>Respond</button>
        </tr>
    ))}
      
    </tbody>
  </table>


    </div>
  )
}

export default ListAppointments;