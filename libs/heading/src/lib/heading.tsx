import styles from './heading.module.scss';
import { Text } from '@tokenui/text';
import { Container } from '@tokenui/container';

/* eslint-disable-next-line */
export interface HeadingProps {}

export function Heading({ as: Tag = 'h1', ...props }: HeadingProps) {
  return <Text as={Tag}>asdfsfsdfsdf</Text>;
}

export default Heading;
