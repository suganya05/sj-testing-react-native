import * as React from 'react'
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'

const HomeLocation = (props: SvgProps) => (
  <Svg fill='none' {...props}>
    <G clipPath='url(#a)'>
      <Path
        fill='#462D85'
        d='M20 8.103v7.73A4.171 4.171 0 0 1 15.833 20H15a.833.833 0 0 1 0-1.667h.833a2.5 2.5 0 0 0 2.5-2.5v-7.73a2.499 2.499 0 0 0-1.101-2.072l-5.834-3.936a2.482 2.482 0 0 0-2.796 0L2.768 6.031a2.5 2.5 0 0 0-1.101 2.072v7.73a2.5 2.5 0 0 0 2.5 2.5H5A.833.833 0 1 1 5 20h-.833A4.171 4.171 0 0 1 0 15.833v-7.73A4.16 4.16 0 0 1 1.833 4.65L7.667.712a4.15 4.15 0 0 1 4.661 0l5.834 3.937A4.166 4.166 0 0 1 20 8.103Zm-4.167 4.403a5.792 5.792 0 0 1-1.708 4.124l-2.93 2.865a1.719 1.719 0 0 1-2.39 0l-2.923-2.858a5.834 5.834 0 1 1 9.951-4.131Zm-1.666 0a4.167 4.167 0 1 0-7.114 2.946l2.917 2.851 2.983-2.858a4.132 4.132 0 0 0 1.214-2.94ZM12.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h20v20H0z' />
      </ClipPath>
    </Defs>
  </Svg>
)
export default HomeLocation