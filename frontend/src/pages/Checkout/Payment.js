import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as Yup from "yup"
import { useFormik } from "formik";

export default function PaymentForm({ formData, handleFormChange }) {

    const validationSchema = Yup.object().shape({
        cardName: Yup.string().required('Name on card is required'),
        cardNumber: Yup.string().required('Card number is required'),
        expDate: Yup.string().required('Expiry date is required'),
        cvv: Yup.string().required('CVV is required'),
    });

    const formik = useFormik({
        initialValues: formData.paymentDetails,
        validationSchema,
        onSubmit: (values) => {
            handleFormChange(values);
        },
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        formik.handleChange(event);
        handleFormChange({ [name]: value });
    };
    console.log("formip", formik.values);
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        name='cardName'
                        label="Name on card"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                        value={formik.values.cardName}
                        onChange={handleInputChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.cardName && Boolean(formik.errors.cardName)}
                        helperText={formik.touched.cardName && formik.errors.cardName}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        name='cardNumber'
                        label="Card number"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                        value={formik.values.cardNumber}
                        onChange={handleInputChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                        helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        type='month'
                        required
                        id="expDate"
                        name='expDate'
                        label="Expiry date"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                        value={formik.values.expDate}
                        onChange={handleInputChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.expDate && Boolean(formik.errors.expDate)}
                        helperText={formik.touched.expDate && formik.errors.expDate}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        name='cvv'
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                        value={formik.values.cvv}
                        onChange={handleInputChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}