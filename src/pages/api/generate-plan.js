// import { generateStudyPlan } from '../../googleGeminiService';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { topic } = req.body;

        if (!topic) {
            return res.status(400).json({ error: 'Study topic is required.' });
        }

        try {
            // Example API call to backend
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/generate-study-plan`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body),
            });

            if (!response.ok) {
                throw new Error('Failed to generate study plan from backend.');
            }

            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error fetching study plan:', error);
            res.status(500).json({ error: 'Internal server error. Please try again later.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
