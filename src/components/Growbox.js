import styled from "styled-components"

export default function Growbox({clicked,name,gender,species,status,origin}) {
    return(
        <StyledGrowbox clicked={clicked}>
        <h2> {name} </h2>
        {clicked && (
          <>
            <section>
              <div>
                {gender === "Male" ? "♂︎" : gender === "Female" ? "♀︎" : "?"}
              </div>
              <div>
                {species === "Human" && gender === "Male"
                  ? "🧔"
                  : species === "Human" && gender === "Female"
                  ? "👩‍🦰"
                  : species === "Alien"
                  ? "👽"
                  : "?"}
              </div>
              <div>
                {status === "Alive" ? "⭐️" : status === "Dead" ? "💀" : "?"}
              </div>
            </section>
            <p> {origin} </p>
          </>
        )}
      </StyledGrowbox>
    )
}

const StyledGrowbox = styled.div`
  background: linear-gradient(darkslategrey, teal);
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: ${(props) => (props.clicked ? "-180px" : "-300px")};
  left: 0;
  right: 0;
  transition: ease-in-out 0.3s all;
  text-align: center;
  border: ${(props) => (props.clicked ? "solid 1px chartreuse" : "none")};
  box-shadow: ${(props) => (props.clicked ? "chartreuse 0 3px 10px" : "none")};
`;