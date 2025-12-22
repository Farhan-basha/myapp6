const formData = new FormData();
formData.append("", imageFile);

await api.post("/api/images/upload", formData, {
  headers: { "Content-Type": "multipart/form-data" }
});
