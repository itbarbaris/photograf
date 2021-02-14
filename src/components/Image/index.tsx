import Img, { ImageProps } from 'next/image';

const Image: React.FC<ImageProps> = ({ className, ...props }) => {
  return (
    <article className={className}>
      <Img {...props} />
    </article>
  );
};

export default Image;
