import React from 'react'
import { Button, Page, Text } from '@geist-ui/core'

const Selector = () => {
  return (
        <Select placeholder="Choose one">
            <Select.Option value="1" disabled>Option 1</Select.Option>
            <Select.Option value="2">Option 2</Select.Option>
        </Select>
  )
}

export default Selector
