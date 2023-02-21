import React from 'react';

const Title: React.FC<{
    children: string,
    font?: 'HB' | 'HR' | 'MGB' | 'MGEB' | 'OTFG',
    fontSize?: number | string,
    color?: string
}> = ({children, font = 'HR', fontSize= '10vh', color = 'white'}) => {
    const GetFontFamily = (font: string) => {
        switch (font) {
            case 'HB':
                return 'HumaneBold';
            case 'HR':
                return 'HumaneRegular';
            case 'MGB':
                return 'MangoGrotesqueBold';
            case 'MGEB':
                return 'MangoGrotesqueExtraBold';
            case 'OTFG':
                return 'OTFGlusp';
            default:
                return 'HumaneBold';
        }
    }

    return (
        <div className={'text'} style={{
            padding: 0,
            fontSize,
            marginBottom: `calc(-${fontSize} *0.2)`,
            textAlign: 'left',
            color,
            fontFamily: GetFontFamily(font),
        }}>
            {children.toUpperCase()}
        </div>
    );
};

export default Title;
