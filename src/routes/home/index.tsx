import { FunctionComponent, h } from "preact";
import styled from "styled-components";
import { ChevronDoubleRight } from "styled-icons/bootstrap";

const HeaderElement = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: #013a63;
  color: #b7e3f0;
  position: relative;
`;

const MiddleCenterLeftBottomElement = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  font-size: 40px;
`;

const MiddleCenterRightBottomElement = styled.div`
  position: absolute;
  top: 50%;
  right: 30%;
  font-size: 40px;
`;

const Thin = styled.div` 
	font-weight: normal;
	opacity: 50%;
`

export const Home: FunctionComponent<{}> = () => {
  return (
    <HeaderElement>
		<MiddleCenterLeftBottomElement>
			<Thin>Hi,</Thin>
			<b>I'm based.</b>
			</MiddleCenterLeftBottomElement>
			<MiddleCenterRightBottomElement>
				<Thin>github.com/ <br /> kuhnchris <ChevronDoubleRight size={12} /></Thin>
			</MiddleCenterRightBottomElement>
    </HeaderElement>
  );
};
export default Home;
