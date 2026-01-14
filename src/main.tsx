import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  console.error('Clerk Publishable Key is missing!')
  createRoot(document.getElementById('root')!).render(
    <div style={{
      padding: '40px',
      fontFamily: 'system-ui, sans-serif',
      color: '#dc2626',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Setup Error</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
        Missing Clerk Publishable Key.<br/>
        Please add this line to your <strong>.env</strong> file in the project root:<br/>
        <code style={{ background: '#fee2e2', padding: '4px 8px', borderRadius: '4px' }}>
          VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
        </code><br/><br/>
        Then restart the dev server.
      </p>
      <p style={{ marginTop: '2rem', color: '#4b5563' }}>
        You can also hard-code the key temporarily in main.tsx for testing.
      </p>
    </div>
  )
} else {
  console.log('Clerk key loaded (length:', PUBLISHABLE_KEY.length, ')')

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </StrictMode>
  )
}