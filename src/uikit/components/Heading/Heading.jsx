import styled from 'styled-components'
import Text from '../Text/Text'
import { tags, scales } from './types'

const style = {
  [scales.MD]: {
    fontSize: '20px',
    fontSizeLg: '20px',
  },
  [scales.LG]: {
    fontSize: '24px',
    fontSizeLg: '24px',
  },
  [scales.XL]: {
    fontSize: '32px',
    fontSizeLg: '40px',
  },
  [scales.XXL]: {
    fontSize: '48px',
    fontSizeLg: '64px',
  },
}

const Heading = styled(Text)`
  font-size: ${style[scales.MD].fontSize};
  font-weight: 600;
  line-height: 1.1;

  @media screen and (min-width: 1080px) {
    font-size: ${style[scales.MD].fontSize};
  }
`

Heading.defaultProps = {
  as: tags.H2,
}

export default Heading
