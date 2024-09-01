'use client'
import React, { useState } from 'react';
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs';
import StudyPlanForm from '../src/components/StudyPlanForm';
import StudyPlanResult from '../src/components/StudyPlanResult';
import LoadingSpinner from '../src/components/LoadingSpinner';

export default function Home() {
    const [studyPlan, setStudyPlan] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleStudyPlanRequest = async (topic) => {
        setLoading(true);
        try {
            const response = await fetch('/api/generate-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic }),
            });

            if (!response.ok) {
                const { error } = await response.json();
                throw new Error(error || 'Failed to generate study plan.');
            }

            const data = await response.json();
            setStudyPlan(data);
            setError('');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ClerkProvider>
            <header style={headerStyles}>
                <h1 style={titleStyles}>PlanIt</h1>
                <div style={authButtonsStyles}>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </header>
            <main style={mainStyles}>
                <div style={formContainerStyles}>
                    <StudyPlanForm onSubmit={handleStudyPlanRequest} />
                </div>
                {loading && <LoadingSpinner />}
                {error && <div style={errorMessageStyles}>{error}</div>}
                {studyPlan && <StudyPlanResult studyPlan={studyPlan} />}
            </main>
        </ClerkProvider>
    );
}

const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#179BAE',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyles = {
    margin: 0,
    fontSize: '24px',
};

const authButtonsStyles = {
    display: 'flex',
    alignItems: 'center',
};

const mainStyles = {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
};

const formContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const errorMessageStyles = {
    color: 'red',
    marginTop: '10px',
};
