import PropTypes from 'prop-types';
import { VscCheck } from "react-icons/vsc";



const Feature = ({feature}) => {
    return (
        <div>
            <p className='text-[17px] flex items-center'><VscCheck className='mr-2' />{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired
}

export default Feature;