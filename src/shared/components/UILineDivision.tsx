

import React from 'react'
import styled from 'styled-components';

interface UILineDivisionProps {
    maxwidth: number;
    height: number;
    mbottom: number;
    mtop: number;
    color: string;
}

const UILineDivision = ({ maxwidth, color, height, mbottom, mtop }: UILineDivisionProps) => {
    return (
        <LineDivision maxwidth={maxwidth} color={color} height={height} mbottom={mbottom} mtop={mtop} />
    )
}
export const LineDivision = styled.div < { maxwidth: number, height: number, color: string, mtop: number, mbottom: number }>`
  background: ${(props: UILineDivisionProps) => (props.color ? `#${props.color}` : "#999999")};
  max-width: ${(props: any) => (props.maxwidth ? `${props.maxwidth}px` : "905px")};
  width: 100%;
  height:${(props: UILineDivisionProps) => (props.height ? `${props.height}px` : "1px")};
  margin-bottom: ${(props: UILineDivisionProps) => (props.mbottom ? `${props.mbottom}px` : "21px")};
  margin-top: ${(props: UILineDivisionProps) => (props.mtop ? `${props.mtop}px` : "21px")};
`;

// width: 447px
// height: 1.36px
// top: 395.44px
// left: -52px

export default UILineDivision