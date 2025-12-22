const formData = new FormData();
formData.append("../../public/uploads", imageFile);

await api.post("/api/images/upload", formData, {
  headers: { "Content-Type": "multipart/form-data" }
});
