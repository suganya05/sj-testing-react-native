import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const LogoutIcon = (props: SvgProps) => (
  <Svg fill='none' {...props}>
    <Path
      fill='#EF5757'
      d='M12.75 21a.75.75 0 0 1-.75.75H8A4.756 4.756 0 0 1 3.25 17V7A4.756 4.756 0 0 1 8 2.25h4a.75.75 0 1 1 0 1.5H8A3.254 3.254 0 0 0 4.75 7v10A3.254 3.254 0 0 0 8 20.25h4a.75.75 0 0 1 .75.75Zm7.78-9.53-4-4a.75.75 0 1 0-1.06 1.061l2.719 2.719H10a.75.75 0 1 0 0 1.5h8.189l-2.719 2.72a.75.75 0 0 0 1.06 1.061l4-4a.75.75 0 0 0 0-1.061Z'
    />
  </Svg>
)
export default LogoutIcon
