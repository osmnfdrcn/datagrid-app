import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  socialName: Yup.string().required("zorunlu"),
  socialLink: Yup.string().required("zorunlu"),
  description: Yup.string().required("zorunlu"),
});

export default FormSchema;
