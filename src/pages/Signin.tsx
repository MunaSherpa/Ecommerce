import React from 'react';

const SignIn = () => {
  return (
    <>
      <div style={{ height: '100vh', width: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: '#ffffff', maxWidth: '400px', width: '100%', borderRadius: '10px', padding: '30px', height: '500px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <form action="/signin" method="post">
            <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#232836', textAlign: 'center' }}>SignIn</h3>
            <div style={{ position: 'relative', height: '50px', width: '100%', marginTop: '20px', borderRadius: '6px' }}>
              <input type="email" name="email" placeholder="Email" className="Email" style={{ height: '100%', width: '100%', border: 'none', fontSize: '16px', fontWeight: '400', borderRadius: '6px', outline: 'none', padding: '0 15px', backgroundColor: '#F4F4F2' }} required />
            </div>
            <div style={{ position: 'relative', height: '50px', width: '100%', marginTop: '20px', borderRadius: '6px' }}>
              <input type="password" name="password" placeholder="Password" className="Password" style={{ height: '100%', width: '100%', border: 'none', fontSize: '16px', fontWeight: '400', borderRadius: '6px', outline: 'none', padding: '0 15px', backgroundColor: '#F4F4F2' }} required />
              <i className='bx bx-hide eye-icon'></i>
            </div>
            <div style={{ position: 'relative', height: '50px', width: '100%', marginTop: '20px', borderRadius: '6px' }}>
              <button onClick={SignIn} style={{ height: '100%', width: '100%', border: 'none', color: '#fff', backgroundColor: '#1189F9', transition: 'all 0.3s ease', fontSize: '21px' , cursor: 'pointer' }}>SignIn</button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <span style={{ fontSize: '14px', fontWeight: '400', color: '#1189F9' }}>Don't have an account? <a href="/signup" className="signup-link" style={{ color: '#0171d3', textDecoration: 'none' }}>SignUP</a></span>
            </div>
            
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn;
