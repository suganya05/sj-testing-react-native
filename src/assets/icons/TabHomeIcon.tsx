import * as React from 'react'
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from 'react-native-svg'

const TabHomeIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} viewBox='0 0 40 40' fill='none'>
    <G clip-path='url(#clip0_1787_153)'>
      <Path
        d='M21.115 10.6942C20.809 10.4187 20.4118 10.2663 20 10.2663C19.5882 10.2663 19.191 10.4187 18.885 10.6942L10 18.6908V27.3575C10 28.0647 10.281 28.743 10.781 29.2431C11.2811 29.7432 11.9594 30.0242 12.6667 30.0242H27.3333C28.0406 30.0242 28.7189 29.7432 29.219 29.2431C29.719 28.743 30 28.0647 30 27.3575V18.6908L21.115 10.6942ZM22.5 28.355H17.5V24.1667C17.5 23.5036 17.7634 22.8677 18.2322 22.3989C18.7011 21.9301 19.337 21.6667 20 21.6667C20.663 21.6667 21.2989 21.9301 21.7678 22.3989C22.2366 22.8677 22.5 23.5036 22.5 24.1667V28.355ZM28.3333 27.355C28.3333 27.6202 28.228 27.8746 28.0404 28.0621C27.8529 28.2496 27.5985 28.355 27.3333 28.355H24.1667V24.1667C24.1667 23.0616 23.7277 22.0018 22.9463 21.2204C22.1649 20.439 21.1051 20 20 20C18.8949 20 17.8351 20.439 17.0537 21.2204C16.2723 22.0018 15.8333 23.0616 15.8333 24.1667V28.355H12.6667C12.4015 28.355 12.1471 28.2496 11.9596 28.0621C11.772 27.8746 11.6667 27.6202 11.6667 27.355V19.4325L20 11.9325L28.3333 19.4325V27.355Z'
        fill={props.color}
        fill-opacity='0.4'
      />
    </G>
    <Defs>
      <ClipPath id='clip0_1787_153'>
        <Rect width='40' height='40' fill='red' transform='translate(10 10)' />
      </ClipPath>
    </Defs>
  </Svg>
)
export default TabHomeIcon
