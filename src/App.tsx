import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
import Title2 from "./components/Title2";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'rgba(21,21,21,0.85)',
                    height: '100vh',
                    width: '100vw'
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: "center",
                    }}>
                        <div style={{
                            width: '25vw',
                            height: '25vw',
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <div style={{
                                height: '80%',
                                width: '80%',
                                backgroundColor: 'rgba(21,21,21,0.75)',
                                borderRadius: '50%',
                                padding: '5%'
                            }}>
                                <img style={{
                                    height: '100%',
                                    width: '100%'
                                }} src={require('./assets/images/ffw.png')}/>
                            </div>
                        </div>
                        <div>
                            <div style={{
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                            }}>
                                <Title color={'rgba(255,255,255,1)'} fontSize={'85vh'} font={'HR'}>FLORESVFER</Title>
                                <Title2 color={'rgba(255,255,255,1)'}>TATTOOSTUDIO</Title2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
