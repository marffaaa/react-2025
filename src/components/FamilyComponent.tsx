import { simpsons } from "../data/simpsonsArray";
import CharacterComponent from "./CharacterComponent";

const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((simpson, index) =>
                    <CharacterComponent simpson={simpson} key={index}>
                        {simpson.info}
                    </CharacterComponent>)
            }
        </div>
    );
};

export default FamilyComponent;