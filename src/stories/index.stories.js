/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, select, color, number } from '@storybook/addon-knobs'

import MyButton from '../components/MyButton.vue'

const buttonColorLabel = 'Colors'
const buttonColorOptions = {
  Primary: 'primary',
  Danger: 'danger',
  Info: 'info',
  Success: 'success',
  Alert: 'alert',
  Warning: 'warning'
}
const buttonColorDefaultValue = buttonColorOptions.Primary
const buttonSizeLabel = 'Sizes'
const buttonSizeOptions = {
  Large: 'large',
  Medium: 'medium',
  Small: 'small'
}
const buttonSizeDefaultValue = buttonSizeOptions.Large

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
      }
    },
    template: `<my-button :title="title" :color="color" :size="size"/>`
  }), 
  )