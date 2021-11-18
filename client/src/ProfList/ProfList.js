import ProfItem from "./ProfItem";

function ProfList({profs}) {

  return (
    profs.map(pr => <ProfItem prof={pr} key={pr._id}></ProfItem>)
  )
}

export default ProfList