import LeftPanelAuthPage from '../components/LeftPanelAuthPage';
import RightPanelAuthPage from '../components/RightPanelAuthPage';

function AuthPage() {
  return (
    <div className="min-h-screen flex">
      <LeftPanelAuthPage />
      <RightPanelAuthPage />
    </div>
  );
}

export default AuthPage;
