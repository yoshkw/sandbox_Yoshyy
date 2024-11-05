import React, { useRef, useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import SignatureCanvas from "react-signature-canvas";

interface LoanApplicationDetails {
  BorrowersName: string;
  BorrowersResidentialAddress: string;
  BorrowersPhone: string;
  BorrowersFax: string;
  BorrowersEmail: string;
  BorrowersNameOfBank: string;
  BorrowersAddressOfBank: string;
  BorrowersBSB: string;
  BorrowersAccountNumber: string;
  BorrowersNameOfAccountHolder: string;
  LendersName: string;
  ResidentialAddress: string;
  Phone: string;
  Fax: string;
  Email: string;
  NameOfBank: string;
  AddressOfBank: string;
  BSB: string;
  AccountNumber: string;
  NameOfAccountHolder: string;
  LoanAmount: string;
  LoanType: string;
  EmploymentStatus: string;
  AnnualIncome: string;
  CreditScore: string;
  PrincipalSum: string;
  InterestRate: string;
  Instalments: string;
  StartDate: string;
  EndDate: string;
}

const emptyFormData: LoanApplicationDetails = {
  BorrowersName: "",
  BorrowersResidentialAddress: "",
  BorrowersPhone: "",
  BorrowersFax: "",
  BorrowersEmail: "",
  BorrowersNameOfBank: "",
  BorrowersAddressOfBank: "",
  BorrowersBSB: "",
  BorrowersAccountNumber: "",
  BorrowersNameOfAccountHolder: "",
  LendersName: "ULTRA UBUMWE PTY LTD",
  ResidentialAddress: "137 Sicklemore Road, PARMELIA  WA  6167",
  Phone: "0431251199",
  Fax: "",
  Email: "youtrust2001@gmail.com",
  NameOfBank: "ANZ",
  AddressOfBank: "Maddington",
  BSB: "013265",
  AccountNumber: "661299206",
  NameOfAccountHolder: "ULTRA UBUMWE PTY LTD",
  LoanAmount: "",
  LoanType: "",
  EmploymentStatus: "",
  AnnualIncome: "",
  CreditScore: "",
  PrincipalSum: "",
  InterestRate: "25%",
  Instalments: "",
  StartDate: "",
  EndDate: "",
};
type FormDataKeys = keyof typeof emptyFormData;

const LoanForms = () => {
  const [formData, setFormData] = useState(emptyFormData);
  const [isEditable, setIsEditable] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const signatureRef = useRef<SignatureCanvas>(null); // Reference for the signature canvas
  const borrowerSignatureRef = useRef<SignatureCanvas>(null);
  const lenderSignatureRef = useRef<SignatureCanvas>(null);
  const witnessSignatureRef = useRef<SignatureCanvas>(null);

  const handleClearBorrowerSignature = () => {
    borrowerSignatureRef.current?.clear();
  };

  const handleClearLenderSignature = () => {
    lenderSignatureRef.current?.clear();
  };

  const handleClearWitnessSignature = () => {
    witnessSignatureRef.current?.clear();
  };

  const handleInputChange = (key: FormDataKeys, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleToggleEdit = () => {
    setIsEditable((prevIsEditable) => !prevIsEditable);
    setFormData(emptyFormData);
  };

  const handleSubmit = async () => {
    if (!isChecked) {
      alert("Please agree to the terms before submitting.");
      return;
    }

    const signatureData = signatureRef.current?.getTrimmedCanvas().toDataURL();

    const formDataObject = {
      ...formData,
      Signature: signatureData, // Adding signature data to formDataObject
    };

    try {
      const response = await axios.post(
        "https://ultra-ubumwe-apis-app.azurewebsites.net/api/loanapplication/details",
        formDataObject
      );
      console.log("API response:", response.data);
    } catch (error) {
      console.error("Error submitting loan application:", error);
    }
  };

  const handleClearSignature = () => {
    signatureRef.current?.clear();
  };

  const labelColor = "#000";

  return (
    <Grid container spacing={2}>
      {/* Checkbox Section */}
      <Grid item xs={12} style={{ textAlign: "left", marginTop: "20px" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
          }
          label="I agree to the terms and conditions"
        />
      </Grid>
      {/* Lender's Personal Details */}
      <Grid item xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
        <Typography
          variant="h6"
          sx={{ marginBottom: "15px", color: labelColor }}
        >
          Investor/Lender's Personal Details
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper
          elevation={3}
          sx={{ padding: "20px", borderColor: "blue", backgroundColor: "grey" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Lender's Name"
                fullWidth
                variant="outlined"
                value={formData.LendersName}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "LendersName" as FormDataKeys,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Residential Address"
                fullWidth
                variant="outlined"
                value={formData.ResidentialAddress}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "ResidentialAddress" as FormDataKeys,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Phone"
                fullWidth
                variant="outlined"
                value={formData.Phone}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange("Phone" as FormDataKeys, e.target.value)
                }
              />
              <TextField
                label="Fax"
                fullWidth
                variant="outlined"
                value={formData.Fax}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange("Fax" as FormDataKeys, e.target.value)
                }
              />
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                value={formData.Email}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange("Email" as FormDataKeys, e.target.value)
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Name of Bank"
                fullWidth
                variant="outlined"
                value={formData.NameOfBank}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "NameOfBank" as FormDataKeys,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Address of Bank"
                fullWidth
                variant="outlined"
                value={formData.AddressOfBank}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "AddressOfBank" as FormDataKeys,
                    e.target.value
                  )
                }
              />
              <TextField
                label="BSB"
                fullWidth
                variant="outlined"
                value={formData.BSB}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange("BSB" as FormDataKeys, e.target.value)
                }
              />
              <TextField
                label="Account Number"
                fullWidth
                variant="outlined"
                value={formData.AccountNumber}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "AccountNumber" as FormDataKeys,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Name of the Account Holder"
                fullWidth
                variant="outlined"
                value={formData.NameOfAccountHolder}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "NameOfAccountHolder" as FormDataKeys,
                    e.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Borrower's Personal Information Check */}
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{ marginBottom: "15px", color: labelColor }}
        >
          Business/Borrower's Information Check
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper
          elevation={3}
          sx={{ padding: "20px", borderColor: "blue", backgroundColor: "grey" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Borrower's Name"
                fullWidth
                variant="outlined"
                value={formData.BorrowersName}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "BorrowersName" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Borrower's Residential Address"
                fullWidth
                variant="outlined"
                value={formData.BorrowersResidentialAddress}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "BorrowersResidentialAddress" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Borrower's Phone"
                fullWidth
                variant="outlined"
                value={formData.BorrowersPhone}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "BorrowersPhone" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Borrower's Fax"
                fullWidth
                variant="outlined"
                value={formData.BorrowersFax}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "BorrowersFax" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Borrower's Email"
                fullWidth
                variant="outlined"
                value={formData.BorrowersEmail}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "BorrowersEmail" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Loan Amount"
                fullWidth
                variant="outlined"
                value={formData.LoanAmount}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "LoanAmount" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel id="loan-type-label" style={{ color: labelColor }}>
                  Loan Type
                </InputLabel>
                <Select
                  labelId="loan-type-label"
                  id="loan-type-select"
                  value={formData.LoanType}
                  onChange={(e) =>
                    handleInputChange(
                      "LoanType" as keyof LoanApplicationDetails,
                      e.target.value as string
                    )
                  }
                  label="Loan Type"
                  disabled={!isEditable}
                >
                  <MenuItem value="Personal">Personal</MenuItem>
                  <MenuItem value="Mortgage">Mortgage</MenuItem>
                  <MenuItem value="Auto">Auto</MenuItem>
                  <MenuItem value="Student">Student</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel
                  id="employment-status-label"
                  style={{ color: labelColor }}
                >
                  Employment Status
                </InputLabel>
                <Select
                  labelId="employment-status-label"
                  id="employment-status-select"
                  value={formData.EmploymentStatus}
                  onChange={(e) =>
                    handleInputChange(
                      "EmploymentStatus" as keyof LoanApplicationDetails,
                      e.target.value as string
                    )
                  }
                  label="Employment Status"
                  disabled={!isEditable}
                >
                  <MenuItem value="Casual">Casual</MenuItem>
                  <MenuItem value="Full-time">Full-time</MenuItem>
                  <MenuItem value="Part-time">Part-time</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Annual Income"
                fullWidth
                variant="outlined"
                value={formData.AnnualIncome}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "AnnualIncome" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Credit Score"
                fullWidth
                variant="outlined"
                value={formData.CreditScore}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "CreditScore" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Loan Details Section */}
      <Grid item xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
        <Typography
          variant="h6"
          sx={{ marginBottom: "15px", color: labelColor }}
        >
          Investment/Loan Details
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper
          elevation={3}
          sx={{ padding: "20px", borderColor: "blue", backgroundColor: "grey" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Principal Sum"
                fullWidth
                variant="outlined"
                value={formData.PrincipalSum}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "PrincipalSum" as FormDataKeys,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Interest Rate"
                fullWidth
                variant="outlined"
                value={formData.InterestRate}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "InterestRate" as FormDataKeys,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Interest & Principal Instalments"
                fullWidth
                variant="outlined"
                value={formData.Instalments}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "Instalments" as FormDataKeys,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                variant="outlined"
                value={formData.StartDate}
                margin="normal"
                InputLabelProps={{ shrink: true }} // Proper placement of InputLabelProps
                onChange={(e) =>
                  handleInputChange("StartDate" as FormDataKeys, e.target.value)
                }
              />

              <TextField
                label="End Date"
                type="date"
                fullWidth
                variant="outlined"
                value={formData.EndDate}
                margin="normal"
                InputLabelProps={{
                  style: { color: labelColor },
                  shrink: true, // Combine both style and shrink properties here
                }}
                onChange={(e) =>
                  handleInputChange("EndDate" as FormDataKeys, e.target.value)
                }
                InputProps={{ style: { color: labelColor } }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Borrower's Bank Details Section */}
      <Grid item xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
        <Typography
          variant="h6"
          sx={{ marginBottom: "15px", color: labelColor }}
        >
          Business/Borrower's Bank Details
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper
          elevation={3}
          sx={{ padding: "20px", borderColor: "blue", backgroundColor: "grey" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Borrower's Name of Bank"
                fullWidth
                variant="outlined"
                value={formData.BorrowersNameOfBank}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "BorrowersNameOfBank" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Borrower's Address of Bank"
                fullWidth
                variant="outlined"
                value={formData.BorrowersAddressOfBank}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "BorrowersAddressOfBank" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Borrower's BSB"
                fullWidth
                variant="outlined"
                value={formData.BorrowersBSB}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "BorrowersBSB" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Borrower's Account Number"
                fullWidth
                variant="outlined"
                value={formData.BorrowersAccountNumber}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "BorrowersAccountNumber" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
              <TextField
                label="Borrower's Name of Account Holder"
                fullWidth
                variant="outlined"
                value={formData.BorrowersNameOfAccountHolder}
                margin="normal"
                InputLabelProps={{ style: { color: labelColor } }}
                onChange={(e) =>
                  handleInputChange(
                    "BorrowersNameOfAccountHolder" as keyof LoanApplicationDetails,
                    e.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* {Signitory sections for the user} */}

      {/* Signature Section */}
      {/* Signature Section */}
      <Grid
        container
        spacing={2}
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        {/* Borrower's Signature */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ padding: "20px", borderColor: "blue", backgroundColor: "grey" }}
        >
          <Typography variant="h6" sx={{ marginBottom: "15px", color: "#000" }}>
            Business/Borrower's Signature
          </Typography>

          {/* Full Name Input */}
          <TextField
            label="Borrower's Full Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "15px" }}
          />

          {/* Date Input */}
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ marginBottom: "15px" }}
          />

          <Paper elevation={3} sx={{ padding: "20px" }}>
            {/* Signature Canvas */}
            <SignatureCanvas
              ref={borrowerSignatureRef}
              penColor="black"
              canvasProps={{
                width: 400,
                height: 200,
                className: "sigCanvas",
                style: { border: "1px solid #000" },
              }}
            />
            {/* Clear Signature Button */}
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClearBorrowerSignature}
              sx={{ marginTop: "10px" }}
              fullWidth
            >
              Clear Signature
            </Button>
          </Paper>
        </Grid>

        {/* Investor/Lender's Signature */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ padding: "20px", borderColor: "blue", backgroundColor: "grey" }}
        >
          <Typography variant="h6" sx={{ marginBottom: "15px", color: "#000" }}>
            Investor/Lender's Signature
          </Typography>

          {/* Full Name Input */}
          <TextField
            label="Lender's Full Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "15px" }}
          />

          {/* Date Input */}
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ marginBottom: "15px" }}
          />

          <Paper elevation={3} sx={{ padding: "20px" }}>
            {/* Signature Canvas */}
            <SignatureCanvas
              ref={lenderSignatureRef}
              penColor="black"
              canvasProps={{
                width: 400,
                height: 200,
                className: "sigCanvas",
                style: { border: "1px solid #000" },
              }}
            />
            {/* Clear Signature Button */}
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClearLenderSignature}
              sx={{ marginTop: "10px" }}
              fullWidth
            >
              Clear Signature
            </Button>
          </Paper>
        </Grid>

        {/* Witness's Signature */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ padding: "20px", borderColor: "blue", backgroundColor: "grey" }}
        >
          <Typography variant="h6" sx={{ marginBottom: "15px", color: "#000" }}>
            Witness's Signature
          </Typography>

          {/* Full Name Input */}
          <TextField
            label="Witness's Full Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "15px" }}
          />

          {/* Date Input */}
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ marginBottom: "15px" }}
          />

          <Paper elevation={3} sx={{ padding: "20px" }}>
            {/* Signature Canvas */}
            <SignatureCanvas
              ref={witnessSignatureRef}
              penColor="black"
              canvasProps={{
                width: 400,
                height: 200,
                className: "sigCanvas",
                style: { border: "1px solid #000" },
              }}
            />
            {/* Clear Signature Button */}
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClearWitnessSignature}
              sx={{ marginTop: "10px" }}
              fullWidth
            >
              Clear Signature
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* {submit sections for the user to interact with } */}

      <Grid item xs={12} style={{ marginTop: "20px" }}>
        {isEditable ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleToggleEdit}
          >
            Cancel
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleToggleEdit}
          >
            Edit
          </Button>
        )}
        {isEditable && (
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "10px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default LoanForms;
