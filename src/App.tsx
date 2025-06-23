import './App.css'
import styled from "styled-components";
import images from "./assets/images/rectangle.png"
import ImgCard from "./components/ImgCard.tsx";
import Title from "./components/Title.tsx";
import Text from "./components/Text.tsx";
import Button from "./components/Button.ts";

function App() {
    return (
        <Container>
            <Card>
                <ImgCard src={images}/>
                <Title>Headline</Title>
                <Text> Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                <BoxBtn>
                    <Button btnStyle={"primary"}>See More</Button>
                    <Button btnStyle={"outlined"}>Save</Button>
                </BoxBtn>
            </Card>
        </Container>
    )
}

export default App

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   
`

const Card = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 15px;
    width: 100%;
    max-width: 300px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 10px;
    margin: 20px;
`

const BoxBtn = styled.div`
    display: flex;
    margin-left: 20px;
    margin-bottom: 20px;
    button+button {
        margin-left: 12px;
    }
   @media screen and (max-width: 300px) {
       display: flex;
       flex-direction: column;
       gap: 10px;
       button+button {
           margin-left: 0;
       }
   }
`
