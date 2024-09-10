import { CircularProgress } from "@mui/material";

function Loading() {
  return (
    <div className="bg-primary w-[100vw] h-[100vh] overflow-hidden flex items-center justify-center">
      <CircularProgress />
    </div>
  );
}

export default Loading;
