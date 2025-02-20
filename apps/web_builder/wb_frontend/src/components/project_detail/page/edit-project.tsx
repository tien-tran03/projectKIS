import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography } from "@mui/material";

export const EditProject: React.FC = () => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState<string>("My Project");

  return (
    <Container>
      <Typography variant="h4">Chỉnh sửa dự án</Typography>
      <TextField
        label="Tên dự án"
        fullWidth
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        sx={{ my: 2 }}
      />
      <Button onClick={() => navigate(-1)}>Hủy</Button>
      <Button variant="contained" onClick={() => navigate(-1)}>Lưu</Button>
    </Container>
  );
};
