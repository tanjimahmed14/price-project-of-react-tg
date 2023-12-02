import PropTypes from 'prop-types';

const Link = ({item}) => {
    console.log(item);
    return (
        <div>
            <li className='mr-4 hover:bg-orange-700 px-5 p-2'><a href="">{item.path}</a></li>
        </div>
    );
};



Link.propTypes = { 
    item: PropTypes.array.isRequired
}
export default Link;