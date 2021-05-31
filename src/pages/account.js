import { useEffect, useState } from 'react'
import Header from '../components/header/white-header'
import Footer from '../components/footer/white-footer'
import Left from '../components/menu/left-menu'
import { ACCOUNT_JSON } from '../constant/translate'
import { getProfileupdate } from '../services/api/profileupdate.services'
import { getProfiledata } from '../services/api/profiledata.services'
import { getCustomerId, getToken } from '../helpers/account'


export default function Registration() {
    const [firstname, setfirstname] = useState(null)
    const [mobile, setmobile] = useState(null)
    const [email, setemail] = useState(null)
    const [pwd, setpwd] = useState(null)
    useEffect(() => {
        getProfiledata(getToken())
            .then(function(res){
                console.log(res.data.data)
                if(res.data.status == '200'){
                    setfirstname(res.data.data[0].name)
                    setmobile(res.data.data[0].mobile)
                    setemail(res.data.data[0].email)
                }
            })
    }, [])
    const updateData = () => {
        getProfileupdate(firstname, mobile, pwd)
        .then((res) => {
            console.log(res)
        })
    }
    return (
        <>
            <Header />
            <div class="container_fluid">
                <div class="account_details">
                    <h1>{ACCOUNT_JSON.account}</h1>

                    <Left />
                    <form method="GET" class="account_login">
                        <ul>
                            <li>{ACCOUNT_JSON.name}</li>
                            <li>
                                <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                            </li>
                        </ul>
                        <ul>
                            <li>{ACCOUNT_JSON.surname}</li>
                            <li>
                                <input type="text" value={mobile} onChange={(e) => setmobile(e.target.value)} /></li>
                        </ul>
                        <ul>
                            <li>{ACCOUNT_JSON.email}</li>
                            <li>
                                <input type="email" value={email} /></li>
                        </ul>
                        <ul>
                            <li>{ACCOUNT_JSON.password}</li>
                            <li>
                                <input type="password" value={pwd} onChange={(e) => setpwd(e.target.value)} />
                            </li>
                        </ul>

                    </form>
                    <div class="save_changes_btn">
                        <div class="save_changes"><button onClick={()=>updateData()}>{ACCOUNT_JSON.update_details}</button></div>

                    </div>
                </div>
            </div>


            <Footer />

        </>
    )
}