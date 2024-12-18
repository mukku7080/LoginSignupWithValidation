import React from 'react'

const Login = ({email}) => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div  className='mt-5' style={{height:'500px', width:'600px', border:'1px solid #ccc', margin:'0 auto', padding:'20px'}}>
        <h2 className='text-center'>LogIn</h2>
        <form action="">
        <div className='mb-3'>
                <label htmlFor="">Email</label>
                <input type="text" className='form-control readonly' name='email'  placeholder={email} value={email} disabled/>
            </div>
            <div className='mb-3'>
                <label htmlFor="">Password</label>
                <input type="text" className='form-control' name='pass' />
            </div>
            <div className='mb-3'>
                <label htmlFor="">Rememer me &nbsp;</label>
                <input type="checkbox" name='remember'  />
            </div>

            <div className='mb-3'>
                <p>Forget Password?&nbsp; <a href="#">Click Here</a></p>
            </div>
            <div className='text-center'> 
            <button className='bg-primary' type='submit'>Login</button>

            </div>
        </form>
           
        </div>
    </div>
  )
}

export default Login