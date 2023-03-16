import { PixabayImage } from '../../Types/images';

type Props = {
  image: PixabayImage;
};

const Card = ({ image }: Props) => {
  const { webformatURL, id } = image;
  const sizes = ['small', 'medium', 'large'];

  return (
    <div
      style={{
        ...styles.card,
        ...styles[sizes[Math.floor(Math.random() * 3)]],
      }}
    >
      <img src={webformatURL} alt={id.toString()} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

const styles: Record<string, any> = {
  card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'red',
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
};

export default Card;
