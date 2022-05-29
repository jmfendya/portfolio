import styles from "./text-input.module.scss"

const TextInput = ({
  register,
  name,
  label,
  labelText,
  validation,
  error,
  ...rest
}: any) => {
  return (
    <>
      {label !== false && <label htmlFor={name}>{label ? label : name}</label>}
      <input
        {...register(name, validation)}
        id={name}
        name={name}
        className={`${styles["login-input"]} text-blueGray-600`}
        {...rest}
      />
      {error && <p>{error.message}</p>}
    </>
  )
}

export default TextInput
