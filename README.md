# my-react-module

> Test to create my own react module

[![NPM](https://img.shields.io/npm/v/my-react-module.svg)](https://www.npmjs.com/package/my-react-module) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save my-react-module
```

## Usage

```jsx
import React, { Component } from 'react'

import Cardy from 'my-react-module'
import 'my-react-module/dist/Card/Card.css'

class Example extends Component {
  render() {
    return  <Cardy 
              headerContent="Card Header Content"
              bodyContent="Car Body Content"
              footerContent="Card Footer Content"
            />
  }
}
```

## License

MIT © [sadiosan](https://github.com/sadiosan)
