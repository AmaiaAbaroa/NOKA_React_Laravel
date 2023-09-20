import './carouselAtom.css';
import PropTypes from 'prop-types';
import slide_1 from '../../../assets/img/carousel_slide1.png';
import slide_2 from '../../../assets/img/carousel_slide2.png';
import slide_3 from '../../../assets/img/carousel_slide3.png';
import slide_4 from '../../../assets/img/carousel_slide4.png';

const CarouselAtom = ({ label }) => {
  return (
    <section className="carousel" aria-label={label}>
      <ol className="carousel__viewport">
        <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper">
            <img src={slide_1} alt="Slide 1" />
            <a href="#carousel__slide4" className="carousel__prev">
              Go to last slide
            </a>
            <a href="#carousel__slide2" className="carousel__next">
              Go to next slide
            </a>
          </div>
        </li>
        <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper">
            <img src={slide_2} alt="Slide 2" />
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a>
          </div>
        </li>
        <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper">
            <img src={slide_3} alt="Slide 3" />
            <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a>
          </div>
        </li>
        <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper">
            <img src={slide_4} alt="Slide 4" />
            <a href="#carousel__slide3" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide1" className="carousel__next">
              Go to first slide
            </a>
          </div>
        </li>
      </ol>
      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
          <li className="carousel__navigation-item">
            <a href="#carousel__slide1" className="carousel__navigation-button">
              Go to slide 1
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide2" className="carousel__navigation-button">
              Go to slide 2
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide3" className="carousel__navigation-button">
              Go to slide 3
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide4" className="carousel__navigation-button">
              Go to slide 4
            </a>
          </li>
        </ol>
      </aside>
    </section>
  );
};

CarouselAtom.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CarouselAtom;
