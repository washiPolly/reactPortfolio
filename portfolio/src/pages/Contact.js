import React from 'react'

export default function Contact() {
    return (
        <div>
            <form className="contactForm card-1">
                <div className="form-group">
                    <label for="formName">Name</label>
                    <input type="email" className="form-control" placeholder="Polly Su" />
                </div>

                <div className="form-group">
                    <label for="formEmail">Email</label>
                    <input type="email" className="form-control" placeholder="pollylsu@gmail.com" />
                </div>

                <div className="form-group">
                    <label for="formTextBox">Message</label>
                    <textarea className="form-control" rows="10"></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-secondary btn-md active" role="button" aria-pressed="true">Submit</button>
                </div>
            </form>
        </div>
    )
}
