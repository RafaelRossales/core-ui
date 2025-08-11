import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  cursor: 'pointer',
  lineHeight: 0,
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&:focus': {
    border: '2px solid $ignite300',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
    borderColor: '$ignite500',
  },

  '&[data-state="unchecked"]': {
    backgroundColor: '$gray900',
    borderColor: '$ignite600',
  },
})

export const SlideIn = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
})

export const SlidOut = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-100%)' },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${SlideIn} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${SlidOut} 200ms ease-out`,
  },
})
