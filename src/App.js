import {React, useState} from "react";
import Bracket from "./components/Bracket";
import Emoji from "./components/Emoji";
import Text from "./components/Text";

function App() {

  const [ text, setText ] = useState('This is simple text');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <label for="msgfield">Change Text: </label><input id="msgfield" onChange={handleChange} />
      <br />
      <Bracket start={'[ '} end={' ]'}>
        <Emoji emoji={' :) '}>
          <Text>
             {text}
          </Text>
        </Emoji>        
      </Bracket>
    </>
  );
}

export default App;
