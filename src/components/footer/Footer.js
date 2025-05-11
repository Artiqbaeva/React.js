import './footer.css'
import footerImage from '../../assets/footer.svg'
const Footer = ()=>{
    return (
      <footer className='footer '>
           <div className='footer-img'>
             <img src={footerImage} alt="" /> 
      <div className='text-footer container'>
          <h2>Stay in Touch</h2>
          <div className='underline'></div>
          <div className='container button-footer'>
            <input type="text" placeholder='Enter your email address' />
            <button>Submit</button>
          </div>
          </div>
      </div>
      </footer>
    )
}

export default Footer