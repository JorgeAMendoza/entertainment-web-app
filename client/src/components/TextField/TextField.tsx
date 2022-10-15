import { useField } from 'formik';
import { LoginForm } from '../../types/form-props';

interface TextFieldProps {
  name: keyof LoginForm;
  type: 'text' | 'password';
  id: TextFieldProps['name'];
  placeholder: string;
}

const TextField = (props: TextFieldProps) => {
  const [field, meta] = useField(props.name);

  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </>
  );
};

export default TextField;
