import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /*
  Apply on all pages
 */

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

*:focus {
  outline:0;
}
html, body, #root {
  height: 100vh;
}

body {
  background: #FFF;
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}


body, input button {
  font: 14px Montserrat;
  font-weight: 600;
}

input::placeholder {
  font: 16px Montserrat;
  color: #9E9E9E
}

a {
  text-decoration: none;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
}
`;