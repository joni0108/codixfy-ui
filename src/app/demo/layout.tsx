import {ReactNode} from "react";

export default function DemoLayout({ children }: {children: ReactNode}) {
    return (
        <div className="p-10">
            {children}
        </div>
    );
}