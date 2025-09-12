import { redirect } from 'next/navigation';

export default function LandingPage() {
    // Redirect to homepage since landing is now the main page
    redirect('/');
}


