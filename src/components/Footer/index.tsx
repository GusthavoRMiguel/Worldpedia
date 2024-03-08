import { StyledFooter } from "./styles";

export const Footer = () => {
  const ano = new Date().getFullYear();

  return (
    <StyledFooter>
      <div className="container">
        <a href="https://gustha-dev.vercel.app/" target="__blank">
          Gusthavo RMiguel
        </a>

        <p>{ano}</p>
      </div>
    </StyledFooter>
  );
};
