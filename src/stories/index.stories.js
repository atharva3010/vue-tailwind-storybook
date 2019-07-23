/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, select, color, number } from '@storybook/addon-knobs'
import "../assets/css/tailwind.css";

import MyButton from '../components/MyButton.vue'

const buttonColorLabel = 'Colors'
const buttonColorOptions = {
  GeoQi1: 'bg-geoqi1',
  GeoQi2: 'bg-geoqi2',
  Primary: 'bg-primary',
  Secondary: 'bg-secondary',
  Danger: 'bg-danger',
  Info: 'bg-info',
  Success: 'bg-success',
  Warning: 'bg-warning'
}
const buttonColorDefaultValue = buttonColorOptions.GeoQi1

const buttonSizeLabel = 'Sizes'
const buttonSizeOptions = {
  Block: 'w-full',
  Large: 'w-1/2',  
  Medium: 'w-1/3',
  Small: 'w-1/6',
  XSmall: 'w-1/12'
}
const buttonSizeDefaultValue = buttonSizeOptions.XSmall

const buttonTextSizeLabel = 'Text Sizes'
const buttonTextSizeOptions = {
  Base: 'text-base',
  Large: 'text-lg',  
  XLarge: 'text-xl',
  Small: 'text-sm',
  XSmall: 'text-xs'
}
const buttonTextSizeDefaultValue = buttonTextSizeOptions.Base

const buttonHoverLabel = 'Hover'
const buttonHoverOptions = {
  Light: 'hover:bg-gray-300',
  Dark: 'hover:bg-gray-700',
}
const buttonHoverDefaultValue = buttonHoverOptions.Dark

const buttonShadowLabel = 'Shadow'
const buttonShadowOptions = {
  base: 'shadow',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  xxl: 'shadow-2xl',
  None: 'shadow-none',
}
const buttonShadowDefaultValue = buttonShadowOptions.md

const buttonBorderRadiusLabel = 'Border Radius'
const buttonBorderRadiusOptions = {
  None: 'rounded-none',
  Rounded: 'rounded',
  ExtraRounded: 'rounded-lg',
  Pill: 'rounded-full',
}
const buttonBorderRadiusDefaultValue = buttonBorderRadiusOptions.Rounded

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => ({
    components: { MyButton },
    props: {
      title: {
        default: text('Title', 'Geospoc', 'Button')
      },
      color: {
        default: select(buttonColorLabel, buttonColorOptions, buttonColorDefaultValue, 'Button')
      },
      size: {
        default: select(buttonSizeLabel, buttonSizeOptions, buttonSizeDefaultValue, 'Button')
      },
      hover:{
        default: select(buttonHoverLabel, buttonHoverOptions, buttonHoverDefaultValue, 'Button')
      },
      shadow:{
        default: select(buttonShadowLabel, buttonShadowOptions, buttonShadowDefaultValue, 'Button')
      },
      borderRadius:{
        default: select(buttonBorderRadiusLabel, buttonBorderRadiusOptions, buttonBorderRadiusDefaultValue, 'Button')
      },
      textSize:{
        default: select(buttonTextSizeLabel, buttonTextSizeOptions, buttonTextSizeDefaultValue, 'Button')
      }
    },
    template: 
      `<my-button 
        :title="title" 
        :color="color" 
        :size="size" 
        :hover="hover" 
        :shadow="shadow" 
        :borderRadius="borderRadius"
        :textSize="textSize"
      />`
  }), 
  )