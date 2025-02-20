import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";

export const ProjectActions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack spacing={2}>
      <Button variant="contained" onClick={() => navigate("/edit")}>Chỉnh sửa</Button>
      <Button variant="contained" onClick={() => navigate("/publish")}>Xuất bản</Button>
      <Button variant="contained" onClick={() => navigate("/move")}>Di chuyển</Button>
      <Button variant="contained" onClick={() => navigate("/settings")}>Cài đặt</Button>
      <Button variant="contained" color="error" onClick={() => navigate("/delete")}>Xóa</Button>
    </Stack>
  );
};
