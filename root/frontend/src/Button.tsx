interface Props {
    children: string
    color?: 'primary' | 'secondary' | 'danger';
    // onClick: () => void;
}

const Button = ({children, color = 'primary'}: Props) => {
  return (
    // <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    <button className={'btn btn-' + color}>{children}</button>
  )
}

export default Button