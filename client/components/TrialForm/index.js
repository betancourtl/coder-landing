import React from 'react';

const TrialForm = props => {
  return (
    <form className="trial-form">
      <h3 className="trial-form-title">Create an account</h3>
      <div className="form-control">
        <label className="form-label">Name</label>
        <input placeholder="Full Name" className="form-input" type="text" />
      </div>
      <div className="form-control">
        <label className="form-label">E-Mail</label>
        <input placeholder="Your E-mail" className="form-input" type="text" />
      </div>
      <div className="form-control">
        <label className="form-label">Why are you interested in coder?</label>
        <input placeholder="I like to code, I'm a teacher" className="form-input" type="text" />
      </div>
      <div className="text-center">
        <button className="btn-1 trial-btn">Claim your free trial!</button>
      </div>
    </form>
  );
};

export default TrialForm;
