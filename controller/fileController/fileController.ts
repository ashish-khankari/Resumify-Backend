import { Response, Request } from "express";
import fileModel from "../../models/fileSchema";

const uploadFiles = async (req: Request, res: Response) => {
  try {
    const fileData = req?.file;

    // if (!fileData) {
    //   return res.status(400).json({ message: "No file uploaded" });
    // }else{

    // }
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${fileData?.filename}`;
    console.log("fileUrl", fileUrl);
    

    const savedFile = await fileModel.create({
      filename: fileData?.filename,
      originalname: fileData?.originalname,
      mimetype: fileData?.mimetype,
      path: fileData?.path,
      size: fileData?.size,
    });

    res.status(201).json({
      message: "File uploaded and saved successfully",
      file: savedFile,
      fileUrl, // sending the URL back
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export default {
  uploadFiles,
};
