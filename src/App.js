import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
