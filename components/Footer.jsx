export default function Footer(){

    return (
        <footer className="-mt-10 py-10 grid gap-3 px-8 md:px-20 border-t">
            <ul>
                <li>
                    <a className="text-md hover:underline hover:text-primary" href="#">Fix this page</a>
                </li>
                <li>
                    <a className="text-md hover:underline hover:text-primary" href="https://rahul.eu.org">Hire me</a>
                </li>
            </ul>
            <div>
                <p className="text-sm">Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
        </footer>
    );
}
