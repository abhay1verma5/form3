const validate = (values) => {
    let errors = {};
  
    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(values.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be exactly 10 digits';
    }
  
    if ((values.position === 'Developer' || values.position === 'Designer') && !values.relevantExperience) {
      errors.relevantExperience = 'Relevant Experience is required';
    } else if (values.relevantExperience <= 0) {
      errors.relevantExperience = 'Relevant Experience must be greater than 0';
    }
  
    if (values.position === 'Designer' && !values.portfolioURL) {
      errors.portfolioURL = 'Portfolio URL is required';
    } else if (values.portfolioURL && !/^https?:\/\/\S+$/.test(values.portfolioURL)) {
      errors.portfolioURL = 'Portfolio URL must be a valid URL';
    }
  
    if (values.position === 'Manager' && !values.managementExperience) {
      errors.managementExperience = 'Management Experience is required';
    }
  
    if (!values.skills || values.skills.length === 0) {
      errors.skills = 'At least one skill must be selected';
    }
  
    if (!values.interviewTime) {
      errors.interviewTime = 'Preferred Interview Time is required';
    }
  
    return errors;
  };
  
  export default validate;
  