import CdemHeader from "./Header/CdemHeader";
import { useNavigate } from 'react-router-dom';
import "./index.scss";
import Button from "@mui/material/Button";
import { yellow } from "@mui/material/colors";

const HomePage = () => {
  const navigateTo = useNavigate();

  const handleNextPage = () => {
    navigateTo("/dataAnalysisTool")
  }
  return (
    <div id="cdem_homepage">
      <CdemHeader />
      <div className="homePage_body">
        <div className="background_bar">
          <div className="background_text">
            <div className='democracy_text'>
              <span>Demo</span>
              <span>cracy</span>
            </div>
            <span>Starts</span>
            <span>Here</span>
          </div>
          <div className="started_button">
            <Button
              id="basic-button"
              variant="contained"
              style={{ backgroundColor: yellow[700] }}
              onClick={handleNextPage}
            >
              <span>View Democratic Data</span>
            </Button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default HomePage;
