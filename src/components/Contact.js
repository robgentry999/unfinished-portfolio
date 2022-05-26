import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react'
import { FaEnvelope, FaLinkedinIn, FaTwitter, FaGithub, FaCheckCircle } from 'react-icons/fa'

export default function Contact() {
    const form = useRef()
    const [formLoading, setFormLoading] = useState(false)
    const [formJustSubmitted, setFormJustSubmitted] = useState(false)
    const [formInput, setFormInput] = useState({
        emailInput: "",
        subjectInput: "",
        messageInput: ""
    })
    const buttonStyles = {
        backgroundColor: "var(--gray-white)",
        transition: "300ms"
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFormInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFormLoading(true)
        emailjs.sendForm('service_sqzq384', 'template_19ujg3v', form.current, 'aMyqHh8BJy-2YwaWG')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        .finally(() => {
            setFormLoading(false)
            setFormJustSubmitted(true)
            setTimeout(() => {
                window.location.reload(false)
                setFormJustSubmitted(false)
            }, 1000)
        })
    }

    const { emailInput, subjectInput, messageInput } = formInput
    const buttonText = formJustSubmitted ? <FaCheckCircle className='contact__check-icon' /> : "Send"

    return (
        <div id='contact' className="container contact">
            <h1 className="contact__header">Contact me</h1>
            <div className='contact__handles'>
                <a href="webdesignerob@gmail.com" className="contact__link">
                    <p className="contact__link-type">Email <FaEnvelope className='contact__link-type-icon'/></p>
                </a>
                <p className="contact__link-handle">webdesignerob@gmail.com</p>
                <a href="https://www.linkedin.com/in/rob-gentry-a90b64237/" target="_blank" rel="noreferrer" className="contact__link">
                    <p className="contact__link-type">LinkedIn <FaLinkedinIn className='contact__link-type-icon'/></p>
                </a>
                <p className="contact__link-handle">/in/rob-gentry</p>
                <a href="https://twitter.com/robthekiddd" target="_blank" rel="noreferrer" className="contact__link">
                    <p className="contact__link-type">Twitter <FaTwitter className='contact__link-type-icon'/></p>
                </a>
                <p className="contact__link-handle">robthekidd</p>
                <a href="https://github.com/robgentry999" target="_blank" rel="noreferrer" className="contact__link">
                    <p className="contact__link-type">Github <FaGithub className='contact__link-type-icon'/></p>
                </a>
                <p className="contact__link-handle">robgentry999</p>
            </div>
            <div className='contact__message'>
                <h2 className="contact__message-header">Send me a message:</h2>
                <form ref={form} onSubmit={handleSubmit} className='contact__message-form'>
                <label>
                        Email
                        <input 
                            name='emailInput'
                            type='email'
                            value={emailInput}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Subject
                        <input 
                            name='subjectInput'
                            type='text'
                            value={subjectInput}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Message
                        <textarea 
                            name='messageInput'
                            value={messageInput}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type='submit' style={formJustSubmitted ? buttonStyles : null}>
                        {formLoading
                            ? <div className='loading-spinner'></div>
                            : buttonText}
                    </button>
                </form>
            </div>
        </div>
    )
}