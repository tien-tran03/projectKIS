import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Typography } from "@mui/material";

export const DeleteProject: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4">Xóa dự án</Typography>
      <Typography>Bạn có chắc chắn muốn xóa dự án này không? Hành động này không thể hoàn tác.</Typography>
      <Button onClick={() => navigate(-1)}>Hủy</Button>
      <Button variant="contained" color="error" onClick={() => navigate(-1)}>Xóa</Button>
    </Container>
  );
};
