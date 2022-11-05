import Image from 'next/image';

export const displayRating = (rating: number) => {
  let ratingsImgs = [];
  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      ratingsImgs.push(
        <Image
          src={'/assets/icons/star-full.svg'}
          alt='star'
          width={25}
          height={25}
        />
      );
    } else {
      ratingsImgs.push(
        <Image
          src={'/assets/icons/star-empty.svg'}
          alt='star outline'
          width={25}
          height={25}
        />
      );
    }
  }
  return ratingsImgs;
};
