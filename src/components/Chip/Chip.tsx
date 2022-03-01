import { Container, DeleteButton } from "./Chip.style";

interface ChipProps {
  /** Chip value */
  text?: string;
  /** normal or editing */
  type?: "normal" | "editing";
  /** Editing function */
  handleDelete?: () => void;
  /** Chip background color */
  bgColor?: string;
  /** Chip text color */
  txtColor?: string;
  /** Add style if you want */
  addStyle?: any;
}

const Chip = ({
  text,
  type,
  handleDelete,
  bgColor,
  txtColor,
  addStyle,
}: ChipProps) => {
  return (
    <Container bgColor={bgColor} addStyle={addStyle} txtColor={txtColor}>
      {text}
      {type === "editing" && (
        <DeleteButton onClick={handleDelete}>X</DeleteButton>
      )}
    </Container>
  );
};

Chip.defaultProps = {
  text: "Sample",
  type: "normal",
};

export default Chip;
