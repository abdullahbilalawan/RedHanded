import { UPLOAD } from "./types";
import axios from "axios";
export const upload = async (topic, subject, file) => {

  const formData = new FormData();
  console.log(file)
  formData.append("topic", topic);
  formData.append("subject", subject);
  formData.append("file", file);

  const response = await axios.post("http://localhost:5000/api/" + "uploadTest", formData);
  if(response.status === 201){
    console.log("Uploaded")
  }
}
