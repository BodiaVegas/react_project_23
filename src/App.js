// import logo from './logo.svg';
import './App.css';
import Simpson from "./Components/Simpsons/Simpson";


function App() {
  return (
      <div>
        <Simpson name = {`Bart`}
                   description={`Bartholomew JoJo "Bart" Simpson (born April 1 ,1979 or February 23, 1979) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie.`}
                   picture={`https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png`}/>
        <Simpson name={`Homer`}
                   description={`Homer Jay Simpson (born May 12, 1956) is the main protagonist of the The Simpsons. He is the husband of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 240 pounds elsewhere[39]),[6] lazy, and often ignorant to the world around him. `}
                   picture={`https://static.wikia.nocookie.net/simpsons/images/5/5d/Homer_Simpson.jpg`}/>
          <Simpson name={`Marge`}
                   description={`Marjorie Jacqueline "Marge" Simpson (née Bouvier)[11](Born March 19) is the homemaker and matriarch of the Simpson family. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family's antics by trying to maintain order in the Simpson household. `}
                   picture={`https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png`}/>
        <Simpson name={`Lisa`}
                   description={`Lisa Marie Simpson is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons. `}
                   picture={`https://static.wikia.nocookie.net/simpsons/images/f/fa/185px-Lisa_Simpson2.png`}/>
          <Simpson name={`Maggie`}
                   description={`Margaret [8] Lenny [9] "Maggie" Simpson is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face`}
                   picture={`https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png`}/>
      </div>
  );
}

export default App;