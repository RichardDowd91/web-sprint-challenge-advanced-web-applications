// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from './Spinner'
import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'

const expectedLoadingMessage = 'Please wait...'

test('sanity', () => {
  expect(true).toBe(true)
})

test("renders nothing if false passed in as props", () => {
  render(<Spinner on={false}/>)
  const loading = screen.queryByText(expectedLoadingMessage)
  expect(loading).not.toBeInTheDocument()
})

test("renders loading message if true passed in as props", () => {
  render(<Spinner on={true}/>)
  const loading = screen.getByText(expectedLoadingMessage)
  expect(loading).toBeVisible()
})
