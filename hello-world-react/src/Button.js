const Button = ({type='button', disabled, onClick, children}) => {
    return <button type={type} disabled={disabled} className={`inline-block mx-1 border py-0 px-3 rounded-md border-black text-white bg-black ${disabled ? 'cursor-not-allowed opacity-40' : 'hover:text-black hover:bg-white'}`}
              onClick={onClick}>
                {children}
    </button>;
}

export default Button;
