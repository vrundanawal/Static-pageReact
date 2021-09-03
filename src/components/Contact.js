import React from 'react';

const Contact = () => {
    return (
        <div id="contact" class="container-fluid bg-grey">
        <h2 className="text-center">CONTACT</h2>
        <div className="row">
          <div className="col-sm-5">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p><span className="glyphicon glyphicon-map-marker"></span> Coventry, UK</p>
            <p><span className="glyphicon glyphicon-phone"></span> +44 7405969891</p>
            <p><span className="glyphicon glyphicon-envelope"></span> nawal.vrunda@gmail.com</p>
          </div>
          <div className="col-sm-7 slideanim">
            <div className="row">
              <div className="col-sm-6 form-group">
                <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
              </div>
              <div className="col-sm-6 form-group">
                <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
              </div>
            </div>
            <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
            <div className="row">
              <div className="col-sm-12 form-group">
                <button className="btn btn-default pull-right" type="submit">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Contact;