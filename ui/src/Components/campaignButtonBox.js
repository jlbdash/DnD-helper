import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown,faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { sortRows } from './listSorting';

export const ButtonBox = (
    <div className="buttonBox">
      <button className="buttonAdd"> <FontAwesomeIcon icon={faPlus} /> </button>
      <button className="buttonUp"> <FontAwesomeIcon icon={faAngleUp} /> </button>
      <button className="buttonDown"> <FontAwesomeIcon icon={faAngleDown} /> </button>
      <button className="buttonDelete"> <FontAwesomeIcon icon={faMinus} /> </button>
    </div>
  );
  