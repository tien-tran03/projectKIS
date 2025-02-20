import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography } from "@mui/material";

export const DuplicateProject: React.FC = () => {
  const { id } = useParams(); // 📌 Lấy ID từ URL
  const navigate = useNavigate();
  const [newProjectName, setNewProjectName] = useState(`Copy of Project ${id}`);

  const handleDuplicate = () => {
    console.log(`Duplicating project ${id} as ${newProjectName}`);
    // 📌 Thực hiện logic nhân bản dự án ở đây (Gửi API hoặc cập nhật state)
    navigate("/projects"); // Sau khi nhân bản, quay về danh sách dự án
  };

  return (
    <Container>
      <Typography variant="h4">Nhân bản dự án {id}</Typography>
      <TextField
        label="Tên dự án mới"
        fullWidth
        value={newProjectName}
        onChange={(e) => setNewProjectName(e.target.value)}
        sx={{ my: 2 }}
      />
      <Button onClick={() => navigate(-1)}>Hủy</Button>
      <Button variant="contained" onClick={handleDuplicate}>Nhân bản</Button>
    </Container>
  );
};
