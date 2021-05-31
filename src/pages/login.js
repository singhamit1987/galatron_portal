import React, { Component, useEffect, useState } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import LoginLang from '../lang/en/login.json'
import { getLogin } from '../services/api/login.service'
import checkMessage from '../components/common/messages'
import { LOGIN_JSON , ADDADDRESS_JSON } from '../constant/translate'
import { NavLink, useHistory } from 'react-router-dom';

export default function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [message, setmessage] = useState(null)
    const history = useHistory();

    const Checklogin = () => {
        if (email == '') {
            setmessage(checkMessage('vaidateFeild', 'your Email'))
        } else if (password == '') {
            setmessage(checkMessage('vaidateFeild', 'your Password'))
        } else {
            getLogin(email, password)
                .then(async (res) => {
                  //  console.log(res)
                    if (res.data.status == 200) {                       
                        localStorage.setItem('sessToken', res.data.data[0].sessToken)
                        localStorage.setItem('customer_id', res.data.data[0].id)
                        setmessage(checkMessage('success', 'Login'))
                        window.location.reload(false)
                        setemail('')
                        setpassword('')
                    } else {
                        setmessage(checkMessage('failure'))
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
                    <h2>{LoginLang.login}</h2>
                    {message}
                    <form method="GET" class="customer_login_form">
                        <ul>
                            <li>{LOGIN_JSON.email}</li>
                            <li>
                                <input type="email" placeholder={ADDADDRESS_JSON.example_email} onChange={(e) => setemail(e.target.value)} /></li>
                        </ul>
                        <ul>
                            <li>{LOGIN_JSON.password}</li>
                            <li>
                                <input type="password" placeholder="" onChange={(e) => setpassword(e.target.value)} />
                            </li>
                        </ul>

                        {/*                         
                        <li>
                            <input type="submit" value="LOG IN" />
                        </li> */}


                    </form>
                    <div class="button_login">
                        <NavLink to="#" onClick={Checklogin}>{LOGIN_JSON.login}</NavLink>
                    </div>

                    <h5>{LOGIN_JSON.no_account} <NavLink to="/register">{LOGIN_JSON.join_us}</NavLink></h5>
                </div>
            </div>
            <Footer />
        </div>
    );
}