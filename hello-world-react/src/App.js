import { NavLink, Outlet } from "react-router-dom";

const App = () => {
    return (
        <main className="mt-4 text-gray-900 mx-4 my-4 max-w-5xl lg:mx-auto">
            <div className="flex items-center">
                <h1 className="text-4xl font-bold">Hello React!</h1>
                <nav className="ml-8 space-x-6">
                    <AppNavLink to="/">Home</AppNavLink>
                    <AppNavLink to="/simple">Simple Components</AppNavLink>
                    <AppNavLink to="/jokes">Jokes</AppNavLink>
                    <AppNavLink to="/forms">Forms</AppNavLink>
                    <AppNavLink to="/dialogs">Dialogs</AppNavLink>
                </nav>
            </div>
            <div className="mt-5">
                <Outlet/>
            </div>
        </main>
    );
}

const AppNavLink = ({to, children}) => {
    return (
        <NavLink to={to} className={({isActive}) => "border-b-2 px-1 py-1.5 " + (isActive ? "border-black text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")}>
            {children}
        </NavLink>
    );
}
// const useErrorHandler = () => {
//     [error, setError] = useState();
//     [showErrorDialog, setShowErrorDialog] = useState(false);
// }

export default App;
