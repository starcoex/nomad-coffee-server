import * as ftp from "basic-ftp";

const HOST = process.env.STARCOEX_FTP_UBUNTU_HOST;
const USER = process.env.STARCOEX_FTP_UBUNTU_USERNAME;
const PASSWORD = process.env.STARCOEX_FTP_UBUNTU_PASSWORD;

export const starFtp = async () => {
  console.log(typeof process.env.STARCOEX_FTP_UBUNTU_HOST);
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    const ftp = await client.access({
      host: HOST,
      user: USER,
      password: PASSWORD,
      port: 21,
    });
    console.log(await client.list());
    await client.uploadFrom("README.md", "README_FTP.md");
    await client.downloadTo("README_COPY.md", "README_FTP.md");
    return ftp;
  } catch (err) {
    console.log(err);
  }
  client.close();
};
