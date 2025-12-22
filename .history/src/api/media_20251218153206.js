const formData = new FormData();
formData.append("../../publi", imageFile);

await api.post("/api/images/upload", formData, {
  headers: { "Content-Type": "multipart/form-data" }
});
