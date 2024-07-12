import React from "react";
import FormWrapper from "./FormWrapper";

function EnquiryForm({ setEnquiryModal }) {
  return (
    <div className="enquiry_form_outer_section ">
      <FormWrapper setEnquiryModal={setEnquiryModal} />
    </div>
  );
}

export default EnquiryForm;
