import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Verify = () => {
    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [verified, setVerified] = useState(null); // null: pending, true: success, false: failure

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if (!token) return null;

            const response = await axios.post(
                `${backendUrl}/api/order/verifyStripe`,
                { success, orderId },
                { headers: { token } }
            );

            if (response.data.success) {
                setCartItems({});
                setVerified(true);
                navigate('/orders');
            } else {
                setVerified(false);
                navigate('/cart');
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to verify payment. Please try again.");
            setVerified(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            verifyPayment();
        }
    }, [token]);

    return (
        <div className="verify-container" style={{ textAlign: 'center', padding: '2rem' }}>
            {loading ? (
                <p>Verifying your payment, please wait...</p>
            ) : verified ? (
                <p>Payment verified successfully! Redirecting to your orders...</p>
            ) : (
                <p>Payment verification failed. Redirecting to your cart...</p>
            )}
        </div>
    );
};
