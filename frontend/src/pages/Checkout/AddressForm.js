import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import * as Yup from "yup"
import { useFormik } from "formik";

export default function AddressForm({ formData, handleFormChange }) {

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
        zip: Yup.string().required('Zip code is required'),
        country: Yup.string().required('Country is required'),
    });

    const formik = useFormik({
        initialValues: formData.shippingAddress,
        validationSchema,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        formik.handleChange(event);
        handleFormChange({ [name]: value });
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                            value={formik.values.firstName}
                            onChange={handleInputChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                            value={formik.values.lastName}
                            onChange={handleInputChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address"
                            name="address"
                            label="Address"
                            fullWidth
                            autoComplete="shipping address"
                            variant="standard"
                            value={formik.values.address}
                            onChange={handleInputChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="standard"
                            value={formik.values.city}
                            onChange={handleInputChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            variant="standard"
                            value={formik.values.state}
                            onChange={handleInputChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.state && Boolean(formik.errors.state)}
                            helperText={formik.touched.state && formik.errors.state}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="shipping postal-code"
                            variant="standard"
                            value={formik.values.zip}
                            onChange={handleInputChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.zip && Boolean(formik.errors.zip)}
                            helperText={formik.touched.zip && formik.errors.zip}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="shipping country"
                            variant="standard"
                            value={formik.values.country}
                            onChange={handleInputChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.country && Boolean(formik.errors.country)}
                            helperText={formik.touched.country && formik.errors.country}
                        />
                    </Grid>

                </Grid>
            </form>
        </React.Fragment>
    );
}