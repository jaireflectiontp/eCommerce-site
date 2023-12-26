import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './Payment';
import Review from './Review';
const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [formData, setFormData] = React.useState({
        shippingAddress: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            country: ''
        },
        paymentDetails: {
            cardName: '',
            cardNumber: '',
            expDate: '',
            cvv: '',
        },
    });

    const handleNext = () => {
        const { firstName, lastName, address, city, state, zip, country } = formData.shippingAddress;
        const { cardName, cardNumber, expDate, cvv } = formData.paymentDetails;
        if (activeStep === 0) {
            if (firstName && lastName && address && city && state && zip && country) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                alert('Please fill in all address fields');
            }
        }
        if (activeStep === 1) {
            if (cardName && cardNumber && expDate && cvv) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                alert('Please insert payment details');
            }
        }
        if (activeStep === steps.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleAddressFormChange = (newAddressData) => {
        setFormData({
            ...formData,
            shippingAddress: { ...formData.shippingAddress, ...newAddressData },
        });

    };

    const handlePaymentFormChange = (newPaymentData) => {
        setFormData({
            ...formData,
            paymentDetails: { ...formData.paymentDetails, ...newPaymentData },
        });

    };
    function createorderId() {
        const randomNumber = Math.floor(1000000 + Math.random() * 9000000);
        return randomNumber.toString().substring(0, 7);
    }

    const orderNumber = createorderId();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
            </AppBar>
            <Container component="main" style={{ maxWidth: '700px' }} sx={{ mb: 4 }}>
                <Paper style={{ marginBlock: '30px ' }} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #{orderNumber}. We have emailed your order
                                confirmation, and will send you an update when your order has
                                shipped.
                            </Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {activeStep === 0 && (
                                <AddressForm
                                    formData={formData}
                                    handleFormChange={handleAddressFormChange}
                                />
                            )}
                            {activeStep === 1 && (
                                <PaymentForm
                                    formData={formData}
                                    handleFormChange={handlePaymentFormChange}
                                />
                            )}
                            {activeStep === 2 && (
                                <Review
                                    formData={formData}
                                />
                            )}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>

            </Container>
        </React.Fragment>
    );
}

