import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
import Title2 from "./components/Title2";

function App() {

    let v1 = require('./assets/videos/v1.mp4');
    let v2 = require('./assets/videos/v2.mp4');
    let v3 = require('./assets/videos/v3.mp4');
    let v4 = require('./assets/videos/v4.mp4');

    return (
        <div className="App">
            <div className="container">
                <video className={'bg-video'} style={{
                    background: 'white',
                }} autoPlay muted loop src={v1}/>
                <video className={'bg-video'} style={{
                    background: 'white',
                }} autoPlay muted loop src={v2}/>
                <video className={'bg-video'} style={{
                    background: 'white',
                }} autoPlay muted loop src={v3}/>
                <video className={'bg-video'} style={{
                    background: 'white',
                }} autoPlay muted loop src={v4}/>
                <Title fontSize={'85vh'} font={'HB'}>FLORESVFER</Title>
                <div style={{
                    position: 'absolute',
                    bottom: '20vh',
                    width: '90%',
                }}>
                    <Title2>TATTOO STUDIO</Title2>
                </div>
            </div>

            {/*<header>*/}
            {/*    <div style={{*/}
            {/*        display: "flex",*/}
            {/*        flexDirection: "column",*/}
            {/*        justifyContent: "center",*/}
            {/*        alignItems: "center",*/}
            {/*        backgroundColor: 'rgba(21,21,21,0.85)',*/}
            {/*        height: '100vh',*/}
            {/*        width: '100vw'*/}
            {/*    }}>*/}
            {/*        <div style={{*/}
            {/*            display: "flex",*/}
            {/*            flexDirection: 'row',*/}
            {/*            alignItems: "center",*/}
            {/*        }}>*/}
            {/*            <div style={{*/}
            {/*                width: '25vw',*/}
            {/*                height: '25vw',*/}
            {/*                display: "flex",*/}
            {/*                alignItems: "center"*/}
            {/*            }}>*/}
            {/*                <div style={{*/}
            {/*                    height: '80%',*/}
            {/*                    width: '80%',*/}
            {/*                    backgroundColor: 'rgba(21,21,21,0.75)',*/}
            {/*                    borderRadius: '50%',*/}
            {/*                    padding: '5%'*/}
            {/*                }}>*/}
            {/*                    <img style={{*/}
            {/*                        height: '100%',*/}
            {/*                        width: '100%'*/}
            {/*                    }} src={require('./assets/images/ffw.png')}/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <div style={{*/}
            {/*                    alignItems: 'flex-start',*/}
            {/*                    flexDirection: 'column',*/}
            {/*                }}>*/}
            {/*                    <Title color={'rgba(255,255,255,1)'} fontSize={'85vh'} font={'HR'}>FLORESVFER</Title>*/}
            {/*                    <Title2 color={'rgba(255,255,255,1)'}>TATTOOSTUDIO</Title2>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</header>*/}
        </div>
    );
}

export default App;
