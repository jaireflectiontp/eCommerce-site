import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

export default function Review({ formData }) {
    const cartProduct = useSelector((state) => state.cart.cartProducts);
    const cartTotal = useSelector((state) => state.cart);

    const { shippingAddress, paymentDetails } = formData

    console.log('shipp', shippingAddress);
    console.log('pay', paymentDetails)
    const cardNum = paymentDetails.cardNumber.split('')
    let hideCardNum = []
    for (let i = 0; i < cardNum.length; i++) {
        if (i < cardNum.length - 4) {
            hideCardNum.push('X')
        } else {
            hideCardNum.push(cardNum[i])
        }
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {cartProduct.map((product) => (
                    <ListItem key={product.slug} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} secondary={product.design} />
                        <Typography variant="body2">{product.cartQuantity} <CloseIcon style={{ width: '1rem', height: '1rem' }} /> &#8377;{product.price}</Typography>
                    </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" style={{ fontWeight: '700' }} />
                    <Typography variant="subtitle1" style={{ textDecoration: 'underline', color: 'darkgreen' }} sx={{ fontWeight: 700 }}>
                        &#8377;{cartTotal.cartTotalAmount}
                    </Typography>
                </ListItem>
            </List>
            <hr />
            <Grid container spacing={2}>
                <Grid style={{ textAlign: 'left' }} item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{shippingAddress?.firstName} {shippingAddress?.lastName}</Typography>
                    <Typography gutterBottom>{shippingAddress?.address}</Typography>
                    <Typography gutterBottom>{shippingAddress?.city} {shippingAddress?.zip}</Typography>
                    <Typography gutterBottom>{shippingAddress?.state}</Typography>
                </Grid>
                <Grid style={{ textAlign: 'left' }} item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid style={{ flexDirection: 'column' }} container>

                        <React.Fragment>
                            <Typography gutterBottom>Card Type : VISA</Typography>
                            <Typography gutterBottom>Card Name : {paymentDetails.cardName}</Typography>
                            <Typography gutterBottom>Card Number : {hideCardNum}</Typography>
                            <Typography gutterBottom>Expiry Date : {paymentDetails.expDate}</Typography>
                        </React.Fragment>

                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}