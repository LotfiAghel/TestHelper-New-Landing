import NewFooter from "./NewFooter";
import { LearnBranch } from "@/types";

export const FooterMain = ({ type = 1 }: {
    type: LearnBranch
}) => {
    return <NewFooter type={type} />
  
};
