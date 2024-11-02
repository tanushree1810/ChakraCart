import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "₹";
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    // Add product to cart
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Select Product Size");
            return;
        }
        const cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
        } else {
            cartData[itemId] = { [size]: 1 };
        }
        setCartItems(cartData);

        // Sync with backend
        if (token) {
            try {
                await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, { headers: { token } });
                toast.success("Product added to cart!");
            } catch (error) {
                console.error(error);
                toast.error("Failed to add product to cart.");
            }
        }
    };

    // Update quantity on both frontend and backend
    const updateQuantity = async (itemId, size, quantity) => {
        const cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

        // Sync with backend
        if (token) {
            try {
                await axios.post(`${backendUrl}/api/cart/update`, { itemId, size, quantity }, { headers: { token } });
                toast.success("Cart updated!");
            } catch (error) {
                console.error(error);
                toast.error("Failed to update cart.");
            }
        }
    };

    // Get the total count of items in the cart
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                totalCount += cartItems[itemId][size];
            }
        }
        return totalCount;
    };

    // Calculate the total cart amount
    const getCartAmount = () => {
        if (!products.length) return 0; // Ensure products are loaded

        let totalAmount = 0;
        for (const itemId in cartItems) {
            const product = products.find((p) => p._id === itemId); // Match by product ID
            if (!product) {
                console.warn(`Product not found for ID: ${itemId}`);
                continue;
            }

            for (const size in cartItems[itemId]) {
                totalAmount += product.price * cartItems[itemId][size];
            }
        }
        return totalAmount;
    };

    // Fetch products from backend
    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`);
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to load products.");
        }
    };

    // Fetch user's cart from backend
    const getUserCart = async (userToken) => {
        try {
            const response = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: { token: userToken } });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to load cart.");
        }
    };

    // Load products on component mount
    useEffect(() => {
        getProductsData();
    }, []);

    // Load cart from backend if token is available
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            const storedToken = localStorage.getItem('token');
            setToken(storedToken);
            getUserCart(storedToken);
        }
    }, [token]);

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        setCartItems,
        setToken,
        token,
       
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
