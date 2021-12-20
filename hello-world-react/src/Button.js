const Button = ({type='button', onClick, children}) => {
    return <button type={type} className="inline-block mx-1 border py-0 px-3 rounded-md border-black text-white bg-black hover:text-black hover:bg-white"
              onClick={onClick}>
                {children}
    </button>;
}

export default Button;
