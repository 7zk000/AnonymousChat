import { describe, it, expect } from '@jest/globals';
import React from 'react';
import { render } from '@testing-library/react-native';
import Hello from '../src/screens/hello';

describe('Hello Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Hello />);
    expect(getByText('Hello, World!')).toBeTruthy();
  });
});
