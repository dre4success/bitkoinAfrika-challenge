import React from 'react';

export default ({input, textarea, label, meta: {error, touched, invalid}}) => {
  const textareaType = <textarea {...input} />
  const inputType = <input {...input} />

  return (
    <div>
      <label>{label}</label>
      {textarea ? textareaType: inputType}
      <div className="error">
      {touched && error}
      </div>
    </div>
  )
}