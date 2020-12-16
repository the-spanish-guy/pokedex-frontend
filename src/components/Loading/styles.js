import styled from "styled-components";

const LoadingContent = styled.div`
/* right: 0px; */
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
@keyframes test {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
& img {
  width: 50%;
  height: 50%;
  /* transform: rotate(36deg); */
  animation: test .4s linear infinite;
  /* transition: all */
}
`;

export { LoadingContent }