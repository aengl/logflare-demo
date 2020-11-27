// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(JSON.stringify({ message: "some info" }));
  console.warn(JSON.stringify({ message: "a warning" }));
  console.error(
    JSON.stringify({ message: "something went wrong", errorCode: 42 })
  );
  res.status(200).end();
};
