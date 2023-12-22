import { ModeToggle } from "./ModeToggle";
import ShareBtn from "./ShareBtn";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 md:px-20 py-6 border-b fixed top-0 left-0 right-0">
            <div>
                <h1 className="md:text-3xl font-bold text-2xl">
                    Famous <span className="text-primary">Quotes.</span>
                </h1>
            </div>
            <div className="flex items-center justify-center gap-2">
                <ModeToggle/>
                <ShareBtn/>
            </div>
        </header>
    );
};
