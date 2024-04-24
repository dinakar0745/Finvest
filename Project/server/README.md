
## Backend Setup Instructions
1. Clone the repository and navigate to the 'server' folder in your terminal:
   ```
    cd server
    ```
2. Install the required Node.js packages by running:
    ```
    npm install
    ```
3. Next, ensure you have a `.env` file containing the below credentials

    ### Environment Variables

    ```
    JWT_SECRET={{JWT_SECRET}}

    ACTIVATION_TOKEN_SECRET={{ACTIVATION_TOKEN_SECRET}}

    PORT=5000

    MONGO_URI={{MONGO_URI}}
    RAZORPAY_KEY_ID={{RAZORPAY_KEY_ID}}

    RAZORPAY_SECRET={{RAZORPAY_SECRET}}
    ```
4. To start the server, execute the following command:
    ```
    npm start
    ```
