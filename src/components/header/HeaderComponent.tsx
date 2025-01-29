import MenuComponent from "../menu/MenuComponent";
import SearchComponent from "../search/SearchComponent";

const HeaderComponent = () => {
    return (
        <div>
            <div>
                <SearchComponent/>
                <MenuComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;
