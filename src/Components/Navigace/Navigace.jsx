import './navigace.css';
export const Navigace = () => {
  return (
    <div className="app-header">
      <button className="navigation-button">
        <img className="back-arrow" src="/images/iconBackArrow.png" alt="šipka"></img>
      </button>
      <button className="navigation-button">
        <img className="home-icon" src="/images/iconHome.png" alt="home"></img>
      </button>
    </div>
  );
};
