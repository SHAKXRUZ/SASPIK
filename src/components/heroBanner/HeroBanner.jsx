import './HeroBanner.css';
// images import 
import HeroBanner_images from '../../assets/images/hero_banner.png';
const HeroBanner = () => {
    return (
        <div className='heroBanner'>
            <div className="heroBanner-content">
                <div className="heroBanner-left">
                    <h1 className='heroBanner-title'>Our Best Mints Lip Balm Bundle</h1>
                    <p className="heroBanner-text">Keep your lips magically moisturized and minty fresh with our best mints Lip Balm Bundle!</p>
                    <div className='heroBanner-btn-group'>
                        <button className="heroBanner-buy">Buy Now</button>
                        <button className="heroBanner-explore">Explore Now</button>
                    </div>
                </div>
                <div className="heroBanner-right">
                    <img className='heroBanner-images' src={HeroBanner_images} alt="banner" />
                </div>
            </div>
        </div>
    )
}
export default HeroBanner;