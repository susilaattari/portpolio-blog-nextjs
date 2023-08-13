import { generateComponents } from "@uploadthing/react";
import OurFileRouter  from "@/app/api/upload/core";

const  { UploadButton, UploadDropzone, Uploader } =  generateComponents(OurFileRouter);
