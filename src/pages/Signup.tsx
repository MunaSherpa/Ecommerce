import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { APIclass } from '../../config';

const Signup = () => {
    const api = new APIclass();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfimPassword] = useState('');
  
    const createUser = async (e:any) => {
      e.preventDefault();
      
  
      const formData = {
        email: email,
        password: password,
        confirmPassword: confirmpassword
      }
      try {
        const res = await axios.post(`${api.baseUrl}register`, formData);
        console.log(res.data);
        if (res.data.status === 200) {
          navigate("/login");
        }
      } catch (e) {
        console.log(e);
      }
    }
  


const Signup = () => {
    return (
      <>
        <div style={{ height: '100vh', width: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#FFF', maxWidth: '400px', width: '100%', borderRadius: '10px', padding: '30px', height: '500px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <form action="/" method="post">
              <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#232836', textAlign: 'center' }}>SignUP</h3>
              <div style={{ position: 'relative', height: '50px', width: '100%', marginTop: '20px', borderRadius: '6px' }}>
                <input type="email" name="email" placeholder="Email" className="Email" style={{ height: '100%', width: '100%', border: 'none', fontSize: '16px', fontWeight: '400', borderRadius: '6px', outline: 'none', padding: '0 15px',  backgroundColor: '#F4F4F2' }} required />
              </div>
              <div style={{ position: 'relative', height: '50px', width: '100%', marginTop: '20px', borderRadius: '6px' }}>
                <input type="text" name="user" placeholder="Name" className="User" style={{ height: '100%', width: '100%', border: 'none', fontSize: '16px', fontWeight: '400', borderRadius: '6px', outline: 'none', padding: '0 15px',  backgroundColor: '#F4F4F2' }} required />
              </div>
              <div style={{ position: 'relative', height: '50px', width: '100%', marginTop: '20px', borderRadius: '6px' }}>
                <input type="password" name="password" placeholder="Password" className="Password" style={{ height: '100%', width: '100%', border: 'none', fontSize: '16px', fontWeight: '400', borderRadius: '6px', outline: 'none', padding: '0 15px',  backgroundColor: '#F4F4F2' }} required />
              </div>
              <div style={{ position: 'relative', height: '50px', width: '100%', marginTop: '20px', borderRadius: '6px' }}>
                <button onClick={Signup} style={{ height: '100%', width: '100%', border: 'none', color: '#fff', backgroundColor: '#1189F9', transition: 'all 0.3s ease', fontSize: '21px', borderRadius: '6px', cursor: 'pointer' }}>SignUP</button>
              </div>
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <span style={{ fontSize: '14px', fontWeight: '400', color: '#232836' }}>Already have an account? <a href="/signin" className="signup-link" style={{ color: '#0171d3', textDecoration: 'none' }}>SignIn</a></span>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
}
  
  export default Signup;
  