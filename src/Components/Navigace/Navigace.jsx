import { useNavigate } from 'react-router-dom';
import './Navigace.css';
export const Navigace = () => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };
  const handleClickHome = () => {
    navigate('/');
  };

  return (
    <div className="app-header">
      <button onClick={handleClickBack} className="navigation-button">
        <img
          className="back-arrow"
          src="/images/iconBackArrow.png"
          alt="šipka"
        ></img>
      </button>

      <button onClick={handleClickHome} className="navigation-button">
        <img className="home-icon" src="/images/iconHome.png" alt="home"></img>
      </button>
    </div>
  );
};
