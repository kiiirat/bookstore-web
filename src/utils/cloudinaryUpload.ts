export default async function CloudinaryUpload(data: string) {
  console.log(data);
  const form = new FormData();
  form.append("file", data);
  form.append("upload_preset", "bookstore");

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dcvb2uds3/image/upload",
    {
      method: "POST",
      body: form,
    }
  );

  const payload = await response.json();

  if (payload.error) {
    throw new Error(payload.error.message);
  }
  return payload.secure_url;
}
