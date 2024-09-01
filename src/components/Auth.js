import { ClerkProvider, SignIn, SignUp, useAuth } from '@clerk/nextjs';
import React, { useState, useClient } from 'react';




const Auth = () => {
    const { isSignedIn } = useAuth();

    if (isSignedIn) {
        return <div>Welcome to your personalized study plan!</div>;
    }

    return (

        <div>
            <SignIn />
            <SignUp />
        </div>


    );
};

// export default Auth;

export default function App() {
    return (
        <ClerkProvider>
            <Auth />
        </ClerkProvider>
    );
}
