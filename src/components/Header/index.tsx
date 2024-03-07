import { Link } from "react-router-dom";
import CustomSwitch from "../switchTheme";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <Link to="/">Worldpedia</Link>
        <CustomSwitch />
      </div>
    </StyledHeader>
  );
};
