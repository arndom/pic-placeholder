import { Command } from "cmdk";
import { FramerCMDK } from "../framer";

const MainModal = ({ open, setOpen }) => {
  console.log(open);

  return (
    <Command.Dialog open={open} onOpenChange={setOpen}>
      <FramerCMDK />
    </Command.Dialog>
  );
};

export default MainModal;
