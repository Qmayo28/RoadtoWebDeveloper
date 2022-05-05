import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Key =
  'pk_test_51KasK3G9DcbGwtHTVkLSgX8QC73zj5ORdAEewRVMgCBoBd7F5qX1RaHbo5xuNc4MK24kfDlZ1S4zY8VFpzQtRFJF00ztWSdI2I';

export const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  //   const history = useNavigate();

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/checkout/payment',
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        // history('/success');
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alighItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : ()} */}
      <StripeCheckout
        name="Lama Shop"
        image="https://avatars.githubusercontent.com/u/1486366?v=4"
        billingAddress
        shippingAddress
        description=" Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={Key}
      >
        <button
          style={{
            border: 'none',
            width: 120,
            borderRadius: 5,
            padding: '20px',
            backgroundColor: 'black',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
