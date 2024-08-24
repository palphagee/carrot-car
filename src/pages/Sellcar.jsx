import picc from '../assets/image/picc.png';
import '../ui/sellcar.css';
import { useNavigate } from 'react-router-dom';
import EthersComponent from '../component/ethers'

const Sellcar = () => {
  
 

  return (
    <div className="sell-container">
      <img src={picc} alt=" " className="picc" />
      <p className="textp-container">This is a used car trading market that will be launched at the end of September</p>
    </div>
    
  );
};

export default Sellcar;