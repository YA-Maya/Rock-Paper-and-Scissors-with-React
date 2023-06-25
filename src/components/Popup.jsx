import React from "react";

const Popup = ({ onClose, onSkip }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Login or Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="button-container">
            <button type="submit">Login</button>
            <button type="submit">sign up</button>

            <button type="button" onClick={onSkip}>Skip</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
