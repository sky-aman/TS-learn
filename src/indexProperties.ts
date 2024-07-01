interface ErrorContainer {
  // {email: "not a valid email", username: "must start with a alphabet"}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with an alphabet",
};
