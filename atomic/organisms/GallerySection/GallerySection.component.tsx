import Image from 'next/image';
import Masonry, { MasonryProps } from 'react-masonry-css';

import Text from '../../atoms/Text/Text.component';
import Spacer from '../../atoms/Spcaer/Spacer.component';

import { urlFor } from '../../../lib/client';
import { sanityImg } from '../../../utils/types';

import styles from './GallerySection.module.scss';

const breakpointColumnsObj: MasonryProps['breakpointCols'] = {
  default: 4,
  1024: 3,
  768: 2,
  640: 1,
};

interface IGallerySectionProps {
  breakpointCols?: MasonryProps['breakpointCols'];
  content: {
    title: string;
    images: sanityImg[];
  };
}

const GallerySection: React.FC<IGallerySectionProps> = ({
  breakpointCols = breakpointColumnsObj,
  content: { title, images },
}) => {
  return (
    <section id='gallery' className={styles.section}>
      <Spacer top='md' bottom='lg'>
        <Text varient='sectionTitle'>{title}</Text>
        <Spacer top='lg' />
        <Masonry
          breakpointCols={breakpointCols}
          className={styles.container}
          columnClassName={styles.column}
        >
          {images.map((img, i) => (
            <Image
              key={i}
              src={urlFor(img.asset).url()}
              alt={img.alt}
              width={10000}
              height={10000}
              style={{ width: '100%', height: 'auto' }}
            />
          ))}
        </Masonry>
      </Spacer>
    </section>
  );
};

export default GallerySection;
