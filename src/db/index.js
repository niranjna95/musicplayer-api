import sql from "mssql";

const connectDB = async () => {
  try {
    const config = {
      server: "NIRANJAN",
      database: "HUP_V2",
      user: "sa",
      password: "DotNet#",
      options: {
        trustedconnection: true,
        enableArithAort: true,
        encrypt: true, // enables SSL encryption
        trustServerCertificate: true, // trusts self-signed certificates
      },
    };

    await sql.connect(config);
    console.log("Database Connected");
    //const result = await sql.query`select * from JobTitle`;
    //console.dir(result);
  } catch (error) {
    console.log("Error", error);
  }
};

export default connectDB;
