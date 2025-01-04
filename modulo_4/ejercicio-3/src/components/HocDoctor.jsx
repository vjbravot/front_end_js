import Doctor from "./Doctor.jsx"
import WithClickHandler from "../hocs/WithClickHandler"
import WithExtraInfo from "../hocs/WithExtraInfo"


const ClickableComponent = WithClickHandler(Doctor);
const EnhancedComponent = WithExtraInfo(ClickableComponent);

function HocDoctor() {
    return(
        <div>
            <h2>Doctor extendido</h2>
            <EnhancedComponent name="Cristobal Extendido" years_of_experience={8} title="Médico a cargo del desarrollo de la app" image="img/team/director_1.png" />
        </div>
    )
}

export default HocDoctor;