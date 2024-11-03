# ChakraCart

ChakraCart is a modern e-commerce platform designed specifically for Naruto fans, offering a unique shopping experience that caters to their passion for the beloved anime and manga series. Built using the latest technologies, including React for the frontend and Node.js for the backend, ChakraCart features user authentication, product management, and secure payment processing through Razorpay and Stripe.

This platform allows fans to easily find and purchase Naruto-themed merchandise, from collectibles to apparel, all in one place. With its responsive design, users can seamlessly navigate and shop from any device, ensuring an enjoyable experience whether they're on their mobile phones or desktops. ChakraCart aims to bring the Naruto community together through a dedicated space for their favorite products.

## Live Demo

You can explore the working web app through the following links:

- [Admin Panel](https://chakracart-admin.vercel.app/) 
- [Frontend](https://chakracart-frontend.vercel.app/) 
- [Backend](https://chakracart-backend.vercel.app/)

## Tech Stack

The following technologies were used to build ChakraCart:

- **Frontend:**
  - ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  - ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  - ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
  - ![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  - ![Axios](https://img.shields.io/badge/Axios-5A29E3?style=for-the-badge&logo=axios&logoColor=white)

- **Backend:**
  - ![Node.js](https://img.shields.io/badge/Node.js-8CC84B?style=for-the-badge&logo=nodedotjs&logoColor=white)
  - ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
  - ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
  - ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
  - ![Cloudinary](https://img.shields.io/badge/Cloudinary-2B8A3A?style=for-the-badge&logo=cloudinary&logoColor=white)

## Features

- **User-Friendly Interface:** A clean and intuitive interface designed for Naruto fans, making navigation easy.
- **Product Management:** Admins can add, edit, and delete products seamlessly.
- **Order Processing:** Efficient handling of orders and payments.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Secure Authentication:** Robust security measures to protect user data and transactions.

## Screenshots

Here are some screenshots of the ChakraCart application:

### Frontend Screenshots

1. **Homepage:**
   ![Landing Page](https://github.com/user-attachments/assets/a69265cc-f502-4db3-bd8e-6b4494f5b4ca)
   *The landing page showcasing featured products.*

2. **Product Collection:**
   ![Product Collection](https://github.com/user-attachments/assets/e6dce5d9-1745-400a-a659-456faecc9d4b)
   *A view of the product collection available for purchase with various filters.*

4. **Add To Cart Page:**
   ![Add Product](https://github.com/user-attachments/assets/52e9bb1b-d30e-4865-bf3e-928fe76731c0)
   *Addig product to cart.*

5. **Cart Page:**
   ![Cart Page](https://github.com/user-attachments/assets/09f4c743-15f9-41e3-bd96-271f439d1dd2)
   *The cart page displaying selected items and total cost.*

6. **Checkout Page with Razorpay:**
   ![Razorpay Checkout](https://github.com/user-attachments/assets/379016f3-3ea8-4159-b9ac-72b9519af46d)
   *Checkout page using Razorpay for payment processing.*

7. **Checkout Page with Stripe:**
   ![Stripe Checkout](https://github.com/user-attachments/assets/f5370c30-68d6-4987-89d4-be603c45da64)
   *Checkout page using Stripe for payment processing.*



### Admin Screenshots

1. **Admin Login:**
   ![Admin Login](https://github.com/user-attachments/assets/611b5337-47c9-4e9f-a74b-15a9eadb89b5)
   *Login page for the admin panel.*

2. **Orders Page:**
   ![Orders Page](https://github.com/user-attachments/assets/3acc6a05-a9e9-4d68-b0b1-25dd9125e5fa)
   *Admin dashboard displaying current orders.*

3. **List of Items:**
   ![List of Items](https://github.com/user-attachments/assets/efafab41-6792-4445-9b6e-aab31b2f0ac7)
   *Overview of all items in the inventory.*


## Videos

### Admin Panel Demo
[Watch the Admin Panel Demo](https://www.youtube.com/watch?v=Dgok6z-5nbM)

### Frontend Demo
[Watch the Frontend Demo](https://www.youtube.com/watch?v=mCl7lRTsnnI)


## Run Locally

To run ChakraCart locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/chakracart.git
   cd chakracart

2. **Install Frontend Dependencies**
   
   Navigate to the frontend directory and install the necessary dependencies:
   ```bash
   cd frontend
   npm install
   npm install react-router-dom axios tailwindcss


3. **Install Backend Dependencies**

    Next, navigate to the backend directory and install the dependencies there:
    ```bash
    cd ../backend
    npm install
    npm install express mongoose cors dotenv

4. **Environment Variables**

    Create .env files in the frontend, admin, and backend directories with the following variable names:
    - **FRONTEND**
      
      In the frontend directory, create a .env file with:
      ```bash
      VITE_BACKEND_URL
      VITE_RAZORPAY_KEY_ID

    - **Admin**
      
      In the admin directory, create a .env file with:
      ```bash
      VITE_BACKEND_URL

    - **Backend**
      
      In the backend directory, create a .env file with:
      ```bash
      MONGODB_URI
      CLOUDINARY_API_KEY
      CLOUDINARY_SECRET_KEY
      CLOUDINARY_NAME
      JWT_SECRET
      ADMIN_EMAIL
      ADMIN_PASSWORD
      STRIPE_SECRET_KEY
      RAZORPAY_KEY_ID
      RAZORPAY_SECRET_KEY
    Populate these variables with your own values.

5. **Start the Backend Server**

      In the backend directory, start the backend server with:
      ```bash
      npm run server.js


6. **Start the Frontend**
   
      In a new terminal window, navigate to the frontend directory and start the frontend application with:
      ```bash
      npm run dev

8. **Start the Admin Panel**
   
      Open another terminal, navigate to the admin directory, and start the admin panel with:
      ```bash
      npm run dev

## Contact

For more information or collaboration opportunities, feel free to reach out or connect with me:

- **[LinkedIn: Tanushree Kaushik](https://www.linkedin.com/in/tanushree-kaushik-855601221/)**
- **[GitHub: tanushree1810](https://github.com/tanushree1810)**


      

      




   
