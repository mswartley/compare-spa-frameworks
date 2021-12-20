const NavButton = ({onClick, children}) => {
    return <button className="inline-block mx-1 border py-0 px-3 rounded-md border-black hover:text-white hover:bg-black"
              onClick={onClick}>
                {children}
    </button>;
}

export default NavButton;
