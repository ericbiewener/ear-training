// @flow
export const circle = (width: string | number, height?: string | number) => `
  width: ${width};
  height: ${height == null ? width : height};
  border-radius: 50%;
`
