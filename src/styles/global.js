import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap'); 

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
  font: 14px 'Montserrat', sans-serif;
  
}

input::placeholder {
  font: 16px 'Montserrat', sans-serif;
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