import Image from 'next/image';
import Masonry, { MasonryProps } from 'react-masonry-css';

import Text from '../../atoms/Text/Text.component';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import { GalleryImg } from '../../../utils/types';

import styles from './GallerySection.module.scss';

const breakpointColumnsObj: MasonryProps['breakpointCols'] = {
  default: 4,
  1024: 3,
  768: 2,
  640: 1,
};

interface IGallerySectionProps {
  breakpointCols?: MasonryProps['breakpointCols'];
  imgArr: GalleryImg[];
}

const GallerySection: React.FC<IGallerySectionProps> = ({
  breakpointCols = breakpointColumnsObj,
  imgArr,
}) => {
  return (
    <section className={styles.section}>
      <Spacer left='lg' right='lg' top='md' bottom='md'>
        <Text varient='sectionTitle'>Gallery</Text>
        <Spacer top='lg' />
        <Masonry
          breakpointCols={breakpointCols}
          className={styles.container}
          columnClassName={styles.column}
        >
          {imgArr.map((item) => (
            <Image
              key={item.alt}
              src={`${item.src}`}
              alt={item.alt}
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
