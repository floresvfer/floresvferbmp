import React from 'react';

const Title2: React.FC<{
    children: string,
    color?: string
}> = ({
          children,
          color = 'white'
      }) => {
    return (
        <div  style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            {
                children.split('').map((char, index) => {
                    return <div style={{
                        flex: 1,
                        color,
                        fontFamily: 'OTFGlusp'
                    }} key={`${char}${index}`}>{char}</div>
                })
            }
        </div>
    );
};

export default Title2;
