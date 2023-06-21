import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function FlutterPay({price,email}) {
  try {
    
    const config = {
      public_key: 'FLWPUBK_TEST-4ea3908942524e970aa2a3973d2be212-X',
      tx_ref: Date.now(),
      amount:price,
      currency:"",
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email: email,
        phone_number: '',
        name: '',
      },
      customizations: {
        title: 'ebay',
        description: 'Payment for items in cart',
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      },
    };
    const fwConfig = {
      ...config,
      text: 'Pay Now',
      callback: (response) => {
        closePaymentModal() // this will close the modal programmatically
      },
      onClose: () => {},
    };
  
    return (
      <div className="w-3/4 h-10 p-4 bg-white rounded-full flex flex-col items-center justify-center gap-4">
        <FlutterWaveButton {...fwConfig} />
      </div>
    );

  } catch (error) {
 error &&  <div> error occured</div>
  }

}