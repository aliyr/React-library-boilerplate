## React library boilerplate

this boilerpalte lets you to freely create a React component library and test it locally  

## Step One

After you clone the project or  download it , You see 2 seperate projects : `React-com` & `playground`.

`React-com` is where you create your component library , You can rename it to your component library .

`playground` is where you test your project , it's created by `create-react-app`.

Open terminal in both projects and run :

```
npm install
```

## Step Two

In React-com (library directory) , you can add a component in `/src` folder and after you completed your Component , you have to export it among other components.

```

import React , {Component} from 'react';

export class ButtonPrimary extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button>hello {this.props.text}!</button>
        )
    }
}


```


## Step Three

use gulp to concat and transpile your code to ES5 :

```
gulp
```

### Hint 

before you started working with gulp, make sure you have installed `gulp-cli` globally on your machine


## Step Four

start your `playground` project by :

```
npm start
```

After that , use your exported component :)

```
import React, { Component } from 'react';;
import {ButtonPrimary} from 'react-com';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonPrimary text="this is sample" />
      </div>
    );
  }
}

export default App;
```


