import './Brands.css';
import brands1 from '../../assets/images/brend1.svg';
import brands2 from '../../assets/images/brend2.svg';
import brands3 from '../../assets/images/brend3.svg';
import brands4 from '../../assets/images/brend4.svg';
import brands5 from '../../assets/images/brend5.svg';
import brands6 from '../../assets/images/brend6.svg';
const Brands = () => {
    return (
        <div className='brands'>
            <div className="brands-content">
                <div className='brands-card'>
                    <img src={brands1} alt="brands" className="brands-images" />
                </div>
                <div className='brands-card'>
                    <img src={brands2} alt="brands" className="brands-images" />
                </div>
                <div className='brands-card'>
                    <img src={brands3} alt="brands" className="brands-images" />
                </div>
                <div className='brands-card'>
                    <img src={brands4} alt="brands" className="brands-images" />
                </div>
                <div className='brands-card'>
                    <img src={brands5} alt="brands" className="brands-images" />
                </div>
                <div className='brands-card'>
                    <img src={brands6} alt="brands" className="brands-images" />
                </div>
            </div>
        </div>
    )
}
export default Brands;