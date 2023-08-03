
import slide from '../../assets/slide1.jpg'

function Banner() {
    return (
        <div className='banner'>
        <img src={slide} alt='banner' className='img-banner' />
    <h1>Chez vous, partout et ailleurs</h1>
    </div>
    );
}

export default Banner