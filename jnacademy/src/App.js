import { Container, HeaderContent, ClassLogo, WhoContent } from "./styles";
import logo from './assets/logo-jnacademy'
import banner from './assets/banner-jnacademy.png'
import Button from "./components/Button";

const App = () => {
  return (
    <Container>
      <ClassLogo>
        <img src={logo} alt="Logo Jayne Molina Academy"/> 
      </ClassLogo>
      <HeaderContent>
        <img src={banner} alt="Jayne Molina Academy, conheça nossos cursos." />
        <Button title="Ver Agenda" variant="header" onClick=""/>
      </HeaderContent>
      <WhoContent>
        <h3> QUEM SOU EU</h3>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages.
        </p>
        <Button title="Quero Me Inscrever" variant="" onClick=""/>
      </WhoContent>
    </Container>
  );
}

export default App;
