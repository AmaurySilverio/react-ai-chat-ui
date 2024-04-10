import { ListItem } from "@mui/material";

const Answer = ({ response }) => {
  console.log("Answersss", response);
  return (
    <>
      <ListItem sx={{ color: "white" }}>{response}</ListItem>
    </>
  );
};

export default Answer;
