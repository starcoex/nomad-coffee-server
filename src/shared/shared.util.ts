import AWS from "aws-sdk";
import { FileUpload, Upload, GraphQLUpload } from "graphql-upload-minimal";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});
const BUKET_NAME = "nomad-coffee";

export const uploadAwsS3 = async (
  // file: Promise<FileUpload>,
  // file: FileUpload,
  file,
  userId: number,
  folderName: string
) => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const newFilename = `${folderName}/${userId}-${Date.now()}-${filename}`;
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: BUKET_NAME,
      Key: newFilename,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();

  return Location;
};

export const deleteAwsS3 = async (fileUrl: string, folderName: string) => {
  const decodeUrl = decodeURI(fileUrl);
  const filePath = decodeUrl.split(`${folderName}`)[1];
  const fileName = `${folderName}/${filePath}`;
  await new AWS.S3()
    .deleteObject({
      Bucket: BUKET_NAME,
      Key: fileName,
    })
    .promise();
};
