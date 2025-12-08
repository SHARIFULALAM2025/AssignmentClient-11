import React, { useEffect } from 'react';
import Container from '../../Container/Container';
import { useSearchParams } from 'react-router';
import axios from 'axios';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get('session_id')
    useEffect(() => {
        if (sessionId) {
            axios.post(`${import.meta.env.VITE_serverBaseUrl}/payment-status`, {
              sessionId,
            })
        }
    }, [sessionId])
    return (
      <div>
        <Container>
          <h1 className="">your payment is successfully</h1>
        </Container>
      </div>
    )
};

export default PaymentSuccess;