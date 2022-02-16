import React from "react";
import { Header } from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";
import Content from "./content";
const App = () => {
    const theme = {
        colors: {
            header: "#ebfbff",
            body: "#fff",
            footer: "#003333",
        },
        mobile: "768px",
        laptop: "",
        tablet: "",
    };
    return (
        <ThemeProvider theme={theme}>
            <div>
                <GlobalStyles />
                <Header />
                <Container>
                    {Content.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </Container>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
