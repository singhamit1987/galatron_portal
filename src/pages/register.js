import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { useEffect, useState } from 'react'
import { getRegistrationData } from '../services/api/registration.service'
import checkMessage from '../components/common/messages'
import { REGISTER_JSON , ADDADDRESS_JSON} from '../constant/translate'
import { NavLink, useHistory } from 'react-router-dom';


export default function Registration() {
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [msg, setMsg] = useState(null)
    const history = useHistory()

    const Register = () => {

        
        if (name == null) {
            setMsg(checkMessage('vaidateFeild', 'name'))
        } else if (phone == null) {
            setMsg(checkMessage('vaidateFeild', 'Phone/Mobile Number'))
        } else if (email == null) {
            setMsg(checkMessage('vaidateFeild', 'Email Address'))
        } else if (password == null) {
            setMsg(checkMessage('vaidateFeild', 'Password'))
        } else {
            getRegistrationData(name, email, phone, password)
                .then((res) => {
                    console.log(res.data)
                    if(res.data.status == '200') {
                        setMsg(checkMessage('success','Registration'))
                        history.push('/login')
                    } else {
                        setMsg(checkMessage('failure'))
                    }
                })
                .catch((err) => console.log(err))
        }

    }


    return (
        <div>
            <Header />
            <div class="container">
                <div class="customer_login">
                    <h2>{REGISTER_JSON.register}</h2>
                    {msg}
                    
                    <form method="GET" class="customer_login_form">
                    
                        <ul>                            
                            <li>{REGISTER_JSON.name}</li>
                            <li>
                                <input type="text" placeholder={ADDADDRESS_JSON.example_name} value={name} onChange={(e) => setName(e.target.value)} /></li>
                        </ul>
                        <ul>
                            <li>{REGISTER_JSON.surname}</li>
                            <li>
                                <input type="text" placeholder={ADDADDRESS_JSON.example_surname} onChange={(e) => setPhone(e.target.value)} /></li>
                        </ul>
                        <ul>
                            <li>{REGISTER_JSON.email}</li>
                            <li>
                                <input type="email" placeholder={ADDADDRESS_JSON.example_email} onChange={(e) => setEmail(e.target.value)} /></li>
                        </ul>
                        <ul>
                            <li>{REGISTER_JSON.password}</li>
                            <li>
                                <input type="password" placeholder="" onChange={(e) => setPassword(e.target.value)} />
                            </li>
                        </ul>

                    </form>
                    <div class="button_login">
                        <a href="#" onClick={Register}>{REGISTER_JSON.registration}</a>
                    </div>

                    <h5>{REGISTER_JSON.already_account} <NavLink to="/login">{REGISTER_JSON.log_in}</NavLink></h5>
                </div>
            </div>



            <Footer />

        </div>
    )
}