import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {price, name, features, } = option;
    // console.log(option)
    return (
        <div>
            <div className='bg-blue-600 p-5 space-y-4 flex flex-col h-96'>
                <h2 className='text-center mt-4'>
                    <span className='text-5xl font-extrabold'>{price}</span>
                    <span className='text-2xl font-bold'> /mon</span>
                </h2><br />
                <h2 className='text-3xl font-semibold text-center'>{name}</h2><br />
                <div className='px-5 flex-grow'>
                    {
                        features.map((feature, idx) => <Feature key={idx} 
                        feature={feature}></Feature>)
                    }
                </div>
                <button className='w-full btn btn-success text-white text-[17px]'>Buy now</button>
            </div>
            <br /><br /><br />
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}
export default PriceOption;
