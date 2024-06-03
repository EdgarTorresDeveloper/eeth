import React from 'react';
import emailjs from 'emailjs-com';

import { NavLink } from 'react-router-dom'
import useForm from '../../hooks/useForm';
const NavBar =()=>{

    const min = 1;
    const max = 50;

    const [form, setForm, handleChange,reset] = useForm({
        subject: '',
        name:'',
        message:'',
        email:'',
        valuesError:false,
        number1: Math.floor(Math.random()*(max-min+1)+min),
        number2: Math.floor(Math.random()*(max-min+1)+min),
        operationAnswer:'',
        operationError:false,
        messageSent:false,
        emailError:false
    });

    const [captcha, setCaptcha,,resetCaptcha] = useForm({verified:false,error:false});

    const {subject,name,message,email,operationAnswer,number1,number2} = form;

    const handleSendEmail =(e)=>{
        e.preventDefault();
        
        if(captcha.verified){
            if(!form.messageSent){
                if(validateInputs()){
                    if(validateOperation()){

                        emailjs.sendForm('service_tscc3v8', 'template_hncjxsr', e.target, 'user_4sqJ345aondDk7MMxK5wz')
                        .then(() => {
                            setForm({...form,messageSent:true});

                            //Cerrar modal
                            document.getElementById("modal").className = "modal";

                            messageControler('success','Finished','Message sent');
                        }, () => {
                            messageControler('error','Messaging ERROR','A failure occurred during sending message');
                            setForm({...form,emailError:true});
                        });
                    }
                }
            }else{
                messageControler('warning','Message','You have already sent message');
            }

        }else{
            messageControler('error','reCAPTCHA ERROR','Check reCAPTCHA');
            setCaptcha({
                ...captcha,
                error:true
            });
        }
    }

    const handleClickModal =(type)=>{
        const modal = document.getElementById("modal");

        if(type==="open"){
            reset();

            //Resetear datos reCaptcha y reCaptcha
            resetCaptcha();
            recaptchaInstance.reset();

            modal.className += " is-active is-clipped"

        }else{
            modal.className = "modal"
        }

    }

    const validateOperation =()=>{
        const res = number1 + number2;

        if(operationAnswer.trim()===res.toString()){
            setForm({...form,operationError:false});
            return true
        }
        messageControler('error','Operation ERROR','Wrong sum');
        setForm({...form,operationError:true});
        return false
        
    };

    const validateInputs=()=>{
        if(subject.length>0 && name.length>0 && message.length>0 && email.length>0 && operationAnswer.length>0){
            setForm({...form,valuesError:false});
            return true
        }
        messageControler('error','Form ERROR','Please complete the form');
        setForm({...form,valuesError:true});
        return false
    }

    const Recaptcha = require('react-recaptcha');
    const Swal = require('sweetalert2');

    let recaptchaInstance;

    // specifying your onload callback function
    const callback =()=> {};
        
    // specifying verify callback function
    const verifyCallback =(response)=> {
        if(response){
            setCaptcha({...captcha,verified:true});
        }
    };

    const messageControler =(type,title,text)=>{
        Swal.fire({
            icon: type,
            title: title,
            text: text,
        });
    }

    return(
        <nav className="tabs is-centered is-medium">

            <div className="modal is-centered" id="modal">
                <div className="modal-background"></div>
                <div className="modal-content is-centered animate__animated animate__fadeIn">
                    <h2>Complete form</h2>
                    <form onSubmit={handleSendEmail}>
                        <div className="field">
                            <input className="input" type="text" placeholder="Subject" autoComplete="off" name="subject" value={subject} onChange={handleChange} id="input1" required/>
                        </div>
                        <div className="field">
                            <input className="input" type="text" placeholder="Name" autoComplete="off" name="name" value={name} onChange={handleChange} id="input2" required />
                        </div>
                        <div className="field">
                            <input className="input" type="text" placeholder="Email" autoComplete="off" name="email" value={email} onChange={handleChange} id="input3" required/>
                        </div>
                        <div className="field">
                            <input className="input" type="number" placeholder={`${number1} + ${number2} =?`} autoComplete="off" name="operationAnswer" value={operationAnswer} onChange={handleChange} id="input4" required/>
                        </div>
                        <div className="field">
                            <textarea className="textarea" type="text" placeholder="Write your message..." rows="10" name="message" value={message} onChange={handleChange} id="input5" required></textarea>
                        </div>
                        <div className="field" id="reCAPTCHA">
                            <Recaptcha
                                ref={e => recaptchaInstance = e}
                                sitekey="6LfWzIoaAAAAAABEmRyQNOVthQY7rPPb_O96bm5B"
                                render="explicit"
                                theme="dark"
                                verifyCallback={verifyCallback} 
                                onloadCallback={callback} /><br/>
                        </div>

                        <div className="control">
                            <button id="modal-submit" className="button is-link is-rounded" type="submit">Send</button>
                        </div>
                    </form>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={()=>handleClickModal("close")}></button>
            </div>

            <ul>
                <li>
                    <NavLink 
                        exact
                        to="/"
                    >
                        Home
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        exact
                        to="/portfolio"
                    >
                        Portfolio
                    </NavLink> 
                </li>

                <li>
                    <NavLink 
                        exact
                        to="/skills"
                    >
                        Skills
                    </NavLink> 
                </li>
                {/* <li onClick={()=>handleClickModal("open")} className="pointer">
                    <span className="navbar-item">Contact</span>
                </li> */}
            </ul>
        </nav>
    );
}

export default NavBar;