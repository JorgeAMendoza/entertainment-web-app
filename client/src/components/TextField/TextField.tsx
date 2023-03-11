import { useField } from 'formik';
import { LoginForm, SignUpForm } from '../../types/form-props';

interface TextFieldProps {
  name: keyof LoginForm | keyof SignUpForm;
  type: 'text' | 'password';
  id: TextFieldProps['name'];
  autoComplete?: string;
  placeholder: string;
}

const TextField = (props: TextFieldProps) => {
  const [field, meta] = useField(props.name);

  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <p data-cy="errorMessage" aria-live="polite">
          {meta.error}
        </p>
      ) : null}
    </>
  );
};

export default TextField;
