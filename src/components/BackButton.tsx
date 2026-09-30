import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton({ className = '' }: { className?: string }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  if (location.pathname === '/dashboard' || location.pathname === '/') return null;
  
  const handleBack = () => {
    // Check if there is actual router history to go back to
    // window.history.state?.idx tells us if we navigated within the React app
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      // Fallback safely to dashboard
      navigate('/dashboard');
    }
  };
  
  return (
    <button 
      onClick={handleBack}
      className={`flex items-center gap-2 font-mono text-[10px] lg:text-xs text-secondary hover:text-primary transition-colors w-fit px-3 py-2 -ml-3 rounded hover:bg-[var(--bg-surface)] cursor-pointer ${className}`}
    >
      <ArrowLeft size={14} /> BACK
    </button>
  );
}
