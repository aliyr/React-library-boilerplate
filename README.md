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

In React-com (library directory) , you can add a component in `src/Main.js` file and after you completed your Component , you have to export it among other components.

```

import React , {Component} from 'react';

class ButtonPrimary extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button>hello {this.props.text}!</button>
        )
    }
}

export {... , ButtonPrimary };

```


## Step Three

In React-com , There is two commnad , `npm run build` and `npm run transpile`.

After you completed your component , run :

```
npm run build
```

in order to Build your project . and then run : 

```
npm run transpile
```

### Hint

Every time you make changes to your project , you have to run `npm run transpile` 

##Step Four

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




