import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";

import LoanForms from "./LoanForm";

interface FormValues {
  termsAndConditions: boolean; // User agreement to terms and conditions
  lender: string; // Lender's name
  borrower: string; // Borrower's name
  loanPurpose: string; // Purpose of the loan
  loanAmount: string; // Amount of the loan
  interestRate: string; // Interest rate
  repaymentDate: string; // Repayment date
  repaymentFrequency: string; // Frequency of repayments (e.g., monthly, quarterly)
  collateral: string; // Collateral provided
  loanTerm: string; // Duration of the loan
  borrowerAddress: string; // Borrower's address
  borrowerPhone: string; // Borrower's phone number
  borrowerEmail: string; // Borrower's email address
  lenderAddress: string; // Lender's address
  lenderPhone: string; // Lender's phone number
  lenderEmail: string; // Lender's email address
  paymentMethod: string; // Method of payment (e.g., bank transfer, check)
  additionalTerms: string; // Any additional terms or conditions
  dateOfAgreement: string; // Date when the agreement is made
}
const initialFormValues: FormValues = {
  termsAndConditions: false,
  lender: "Ultra Ubumwe Pty Ltd",
  borrower: "",
  loanPurpose: "",
  loanAmount: "",
  interestRate: "",
  repaymentDate: "",
  repaymentFrequency: "",
  collateral: "",
  loanTerm: "",
  borrowerAddress: "",
  borrowerPhone: "",
  borrowerEmail: "",
  lenderAddress: "137 Sicklemore Road, PARMELIA  WA  6167",
  lenderPhone: "0431251199",
  lenderEmail: "youtrust2001@gmail.com",
  paymentMethod: "",
  additionalTerms: "",
  dateOfAgreement: "",
};

const LoarAgreementForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [loanFormData, setLoanFormData] = useState({} as any); // Initialize as empty object or with proper type
  const [isLoanFormEditable, setIsLoanFormEditable] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  // const handleLoanFormDataChange = (key: string, value: string) => {
  //   setLoanFormData((prevData) => ({
  //     ...prevData,
  //     [key]: value,
  //   }));
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.termsAndConditions) {
      // Handle form submission
      console.log("Form submitted:", formValues, loanFormData);

      // You can add API call here to submit form data if needed
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  return (
    <div>
      <form id="form-content" onSubmit={handleSubmit}>
        <Box
          sx={{
            borderColor: "blue",
            backgroundColor: "grey",
          }}
        >
          <Typography variant="h2" gutterBottom>
            <strong>INVESTMENT LOAN AGREEMENT</strong>
          </Typography>
          <ul style={{ listStyleType: "none", paddingLeft: "80px" }}>
            <Typography variant="body1" gutterBottom>
              <br />
              This agreement is made BETWEEN
              <br />
              <br />
              <ul style={{ listStyleType: "none", paddingLeft: "80px" }}>
                <li>
                  The Investor/Lender:{" "}
                  <TextField
                    name="lender"
                    value={formValues.lender}
                    onChange={handleInputChange}
                  />
                </li>
                <br />
                <li>
                  The Business/Borrower:{" "}
                  <TextField
                    name="borrower"
                    value={formValues.borrower}
                    onChange={handleInputChange}
                  />
                </li>
              </ul>
              <br />
            </Typography>
          </ul>
          <Typography variant="body1" gutterBottom>
            <strong>PERSONAL INVESTMENT LOAN AGREEMENT</strong>
            <br />
            (INTEREST ONLY/ SIMPLE INTEREST/ NO SECURITY/NO
            GUARANTEE/INDIVIDUALS) BETWEEN: The Investor/Lender named in the
            Schedule AND The Business/Borrower named in the Schedule
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>BACKGROUND</strong>
            <br />
            The Borrower agrees to borrow money from the Lender and the Lender
            agrees to loan money to the Business/Borrower upon the terms set out
            in this Agreement.
          </Typography>
          <Box
            sx={{
              marginRight: "60px",
              borderColor: "blue",
              backgroundColor: "grey",
            }}
          >
            <Typography variant="body1" gutterBottom>
              <strong>THEY AGREE AS FOLLOWS:</strong>
            </Typography>

            <ul style={{ listStyleType: "none", paddingLeft: "80px" }}>
              <Typography variant="body1" gutterBottom component="div">
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  <li style={{ listStyleType: "none" }}>
                    <strong>THE LOAN</strong>
                    <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
                      <li>
                        <strong>1.0</strong> The Lender provides to the Borrower
                        by way of loan the amount of money set out in the
                        Schedule (“the principal”).
                      </li>
                      <li>
                        <strong>1.1</strong> The Investor/Lender has paid or is
                        to pay the principal to the Business/Borrower as
                        directed and by clear funds on the start date set out in
                        the Schedule.
                      </li>
                      <li>
                        <strong>1.2</strong> The loan is 'interest only' so that
                        no amount of principal can be repaid until the end date
                        for repayment of the loan set out in the Schedule.
                      </li>
                      <li>
                        <strong>1.3</strong> Interest is calculated on the
                        principal at the simple rate of interest set out in the
                        Schedule. Interest is payable monthly in arrears, with
                        the first such payment to be made on the same date in
                        each month commencing one month after the start date.
                        Interest is to accrue on the principal until full
                        repayment of the loan has been made.
                      </li>
                      <li>
                        <strong>1.4</strong> Repayment of the principal and
                        interest calculated to the end date will be made by the
                        Borrower to the Lender by clear funds, either by direct
                        deposit or by bank transfer to the Lender's bank account
                        set out in the Schedule, on or before the end date
                        specified in the Schedule.
                      </li>

                      {/* <li>
                        <strong>1.5</strong> The Borrower, Ultra Ubumwe Pty Ltd,
                        acknowledges and agrees to assume full responsibility
                        for all risks arising from the investment loan,
                        specifically related to the principal amount of the
                        loan, which is to be refunded upon a request notice
                        period of 4 months plus a 30-day grace period. Ultra
                        Ubumwe Pty Ltd further agrees that all costs associated
                        with managing these risks, including but not limited to
                        financial and operational risk management, will be borne
                        solely by Ultra Ubumwe Pty Ltd
                      </li>
                      <li>
                        <strong>1.6</strong> In addition, an administration fee
                        of $30 will be payable to Ultra Ubumwe Pty Ltd on a
                        monthly basis for the administration of the loan’s risk
                        management. This fee will typically be deducted from the
                        accumulated interest each month.
                      </li> */}
                    </ul>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <strong>DEFAULT</strong>
                    <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
                      <li>
                        <strong>2.0</strong> If the Borrower breaches this
                        Agreement, then the Lender can give written notice to
                        the Borrower requiring such breach to be remedied within
                        seven (7) days in accordance with clause 2.3.
                      </li>
                      <li>
                        <strong>2.1</strong> If the Borrower enters into any
                        scheme of arrangement or seeks in any way to compromise
                        their debts or becomes bankrupt, then the Lender can
                        give written notice to the Borrower in accordance with
                        clause 2.3.
                      </li>
                      <li>
                        <strong>2.2</strong> If the breach has not been remedied
                        within seven (7) days of the giving of a notice as set
                        out in clause 2.0, or upon the giving of a notice as set
                        out in clause 2.1, then all principal and interest
                        outstanding and the Lender's legal costs of the default
                        become a debt immediately payable by the Borrower to the
                        Lender AND interest will accrue on that debt at a rate
                        being two (2%) per cent above the rate fixed under the
                        Act for penalty interest operative in the State or
                        Territory set out in the Schedule until full payment of
                        the debt has been made.
                      </li>
                      <li>
                        <strong>2.3</strong> The Borrower must reimburse the
                        Lender's full legal costs (on a solicitor/own client
                        basis) arising from any default by the Borrower.
                      </li>
                    </ul>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <strong>MISCELLANEOUS</strong>
                    <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
                      <li>
                        <strong>3.0</strong> All obligations are binding on the
                        Lender and the Borrower and continue notwithstanding
                        death or incapacity.
                      </li>
                      <li>
                        <strong>3.1</strong> All rights and benefits cannot be
                        assigned unless with prior written consent.
                      </li>
                      <li>
                        <strong>3.2</strong> The entire agreement between the
                        Lender and the Borrower is set out in this document and
                        replaces any prior agreements.
                      </li>
                      <li>
                        <strong>3.3</strong> All terms implied by law are
                        included.
                      </li>
                      <li>
                        <strong>3.4</strong> It can only be varied in writing
                        and signed by the Lender and the Borrower.
                      </li>
                      <li>
                        <strong>3.5</strong> Any written notice can be given to
                        the Borrower in person, by registered post or by
                        facsimile.
                      </li>
                      <li>
                        <strong>3.6</strong> Time is of the essence.
                      </li>
                      <li>
                        <strong>3.7</strong> The laws of the State or Territory
                        in which the Lender resides apply to this Agreement.
                      </li>
                    </ul>
                  </li>
                </ul>
              </Typography>
            </ul>
          </Box>
        </Box>

        {/* <FormControlLabel
          control={
            <Checkbox
              checked={formValues.termsAndConditions}
              onChange={handleInputChange}
              name="termsAndConditions"
            />
          }
          label="I agree to the terms and conditions."
        /> */}

        {/* <Typography variant="h5" gutterBottom id="personal-information">
          Section 2: Personal Information
        </Typography> */}
        {/* <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />

        <Typography variant="h5" gutterBottom id="personal-information">
          Section 2: Personal Information
        </Typography> */}

        {/* <LoanApplicationForm /> */}
        <LoanForms />
        {/* <Button type="submit" variant="contained" color="primary">
          Submit
        </Button> */}
      </form>

      {/* <Button variant="contained" color="secondary" onClick={exportToPDF}>
        Export to PDF
      </Button> */}
    </div>
  );
};

export default LoarAgreementForm;
