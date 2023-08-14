import { useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest'
import './footer.scss'
import {AiOutlineFacebook,AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
    const navigate = useNavigate()
     const currentUser = JSON.parse(localStorage.getItem('currentUser'))
 const handleLogout = async () => {
 await newRequest.post("/auth/logout")

    localStorage.setItem("currentUser", null)
   


    navigate("/")
    window.location.reload();
 }
  return (
    <div className='footercontainer'>
        <div className="links">
            <div className='section'>
                <h1>Policy Info</h1>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of use</li>
                <li>Terms of sale</li>
                <li>Refund Policy</li>
            </ul>
            </div>
            <div className='section'>
                <h1>Need help</h1>
            <ul>
                <li>Pricing plan</li>
                <li>FAQs</li>
                <li>Order Tracking Form</li>
                <li>Returns</li>
            </ul>
            </div>
            <div className='section'>
                <h1>Information</h1>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Sitemap</li>
            </ul>
            </div>
            <div className='section last'>
                <h1>Get in touch</h1>
            <ul>
                <li>
                    Phone:+2349157016669
                </li>
                <li> Support Hours : 7 days a week 10am/8pm </li>
                <li>info@nakuipid.com</li>
            
            </ul>
            <div className='paymentimgs'>
                <h1>Payment Methods Accepted</h1>
                <div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAABF1BMVEX+/v7///8AAEn6+vsAAEv39/gQHliytMEAAEYAAEDW194AAE0AAET/jQDu7vHl5uqsrrz0pMT/lADCxM4mMGDMzdYvN2UaJls7QmwAFVNaX3/99fj/pTf++vb/OwD/mQBNU3fV6dv/t6Z0d5GChpyMj6MAClCWmaz/0qn0r9H/7dn+9en/4O31rMn3vdT/zqHL59OenIz50uH/vn3/eDmCv5EAjyjo7uj5y9D/rUz+4MP+zsVcsXc1o1j5vbT+3dQKm0b4qqimz7EAihH/qJD/WyT/aj3/2rb/xov86vH/g1hBqWllkhj/n4XWoDf7oprglwD/knbzrFJmu4m/0Lb/UAXOi1TNZxDeXQCZqneDzaX/tpaQmV9BZ75/AAADxElEQVRoge2WWXfaRhSAdbUjGY1Au7BhbEkoXsAJreXiJnbrpG5iJ23TlO7//3f0jkBsbp5ywuk5vd/DMBvzzXpBkgiCIAiCIAiCIAiCIAiCIAiCIP5LAGwU4KMdP4O512uE+HlwcrozO5yNOp3O+EwI4fR80G639092I4enz8aTyXjUGb8BQPP+F+evu1/2diKHi+oSd7o3GR1/NW1Prw6wcNT/unGLw/hsRwDPX2hQH/p1t3tee+Cmf73QgeZokuNsfAFW6ae6L765FOPA1aD77Viqs0s3BGErVqI9ZWUCx4Em/WT37ctDMdhJt3t61qnl8Kp/s1jcMHI9iHVl/g4wBUfmopDE9Q4BLD6a7HzMpq15sKuKTfdl9QH7nA4GJwAox7z03d18/Yyp3GIauh0L1wmYssBPGXOCEBsAFMuzcEQNWxljljKXYRnbLC9w6pzYpUWFti1/Xh0CTLtXotOkMxFX7Wg+20z2fTthsQ6G6eKYrmnkth+ZWYkNagxeqJpqbEFgljzJS9sDKLgBUO55DldlOXLB11EOqR0wbpuy727K4bB6gO/br+uVSuNR72B2dzB3W4HKcbLCLddu2WVGxAOLGb5IhzxgQRhqwTAK05KZOTihOAweOpntMovbjmsXAExNNR4ZzMI5bMkvqtv9wUL3pjO5X74wgD2O+7hyqy6wKBWn7uOpF0luuEYmB8HQ13Dn+RCMJBtaTM9w2izw0sRTwtCBXPUsNcW+pZpvuaWHt90njW583H+3bEe39i9uae7OojCKojj0AlkMCYXJOGfD0jA9KOxWKwl1D0rZlWyOkwr9KArj/NF1+6H7tInn18c/wmO3Z4vVpokL1mrdpYoHDMxggVwKt2WmeokzSn2HtUSvfOjhKcSFbYAlZ1ihGN62+2D6U3VbPwPp/ex4svaYW7U7kRxfD7NIR7ej+4UBShTlhhLaWZnLuhbs1W4pjoYOBDZuOcNr5aaqznE3Ej0S8zB5WUSt4JF7/+eH6gJD681d//1ovObmGbqzVAEri+PC47hQl4clgMdDvFkFj3nmgMXr+wtumiugpDzA9jSMMyvHqbM0NfCUFDeN42xbjUwH0ofqxS+vZrMjvGxrbkXBVCS4zXidRAnDrHjHiiMCjiZqsceivyKJ8CCiILZrYpObsgjC875bwJP2/dGvv836v//x57PO+m/YIpw12VWQ2kilZUCT1rrDoqIRfuRPCfzVR+7/rqqX8+i+S/Cob8S8Di93+Y9pKV/bQoIgCIIgCIIgCIIgCIIgCIIgiP8H/wA+b1JP2kQS/wAAAABJRU5ErkJggg==" alt="" />
                    <img src="https://toppng.com/uploads/preview/mastercard-logo-png-hd-116603848037ckqfbgmns.png" alt="" />
                    <img src="data:image/png;base64,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" alt="" />
                    <img src="data:image/png;base64,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" alt="" />
                </div>
            </div>
            </div>

        </div>
        <div className="footericons">
         <p>
         copyright | kuipid designs 
            </p>  
<div>
    <p>Follow our socials</p>
   { currentUser && <button onClick={handleLogout}>Logout</button>}
<AiOutlineFacebook/>
<AiOutlineTwitter/>
<AiFillInstagram/>
</div>
        </div>
    </div>
  )

}
  export default Footer;