import styles from './aspect-ratio.module.scss';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

/* eslint-disable-next-line */
export interface AspectRatioProps {}

export function AspectRatio(props: AspectRatioProps) {
  return (
    <div className={styles['Container']}>
      <AspectRatioPrimitive.Root ratio={6 / 9}>
        <img
          className={styles['Image']}
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
        />
      </AspectRatioPrimitive.Root>
    </div>
  );
}

export default AspectRatio;
