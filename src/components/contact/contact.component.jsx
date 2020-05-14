import React from 'react';

export const Contact = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')

    const resetForm = () => {
        document.getElementById('contact-form').reset();
    }

    const handleChangeName =(e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleChangeEmail =(e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleChangeMessage =(e) => {
        e.preventDefault()
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message, name)
        let data= {
            name: name,   
            email: email,  
            message: message
        }
        fetch('/contact', {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
              }
        })
        .then(res => res.json())
        .then((response)=>{
            console.log('response', response, response.msg, Object.keys(response))
            if (response.msg === 'success'){
                alert("Message Sent."); 
                resetForm()
            }else if(response.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
        .catch(err => console.log('error', err))
    }

    return(
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
                <label htmlFor="name" >Name</label>
                <input onChange={handleChangeName} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={handleChangeEmail} type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" value={message} onChange={handleChangeMessage}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}