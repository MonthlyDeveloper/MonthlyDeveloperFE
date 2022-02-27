import Chip from "@components/Chip";
import * as STC from "./ProjectItem.style";

const ProjectItem = ({ ...props }) => {
  return (
    <STC.Container>
      <STC.Flex>
        <STC.Title>Monthly Developer만드실분 구해요</STC.Title>
        <STC.StatusWrapper>
          <Chip
            text="모집 중"
            type="normal"
            txtColor="#0078FF"
            bgColor="#EEEBFF"
            addStyle="border: none"
          />
        </STC.StatusWrapper>
      </STC.Flex>
      <STC.UserName>Cudy</STC.UserName>
      <STC.ChipList>
        <Chip text="프론트엔드" type="normal" />
        <Chip text="리엑트" type="normal" />
        <Chip text="자바스크립트" type="normal" />
        <Chip text="HTML5" type="normal" />
      </STC.ChipList>
    </STC.Container>
  );
};

export default ProjectItem;
