import { twMerge as tw} from "tailwind-merge";
import {ReactNode} from "react";
import Link from "next/link";

interface Props {
    children: ReactNode;
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "title" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline";
    className?: string;
    url?: string;
}

function Typography({children, variant = "body1", className, url}: Props) {
    const variants = {
        h1: <h1 className={tw("text-4xl font-bold", className)}>{children}</h1>,
        h2: <h2 className={tw("text-3xl font-bold", className)}>{children}</h2>,
        h3: <h3 className={tw("text-2xl font-bold", className)}>{children}</h3>,
        h4: <h4 className={tw("text-xl font-bold", className)}>{children}</h4>,
        h5: <h5 className={tw("text-lg font-bold", className)}>{children}</h5>,
        h6: <h6 className={tw("text-base font-bold", className)}>{children}</h6>,
        title: <h1 className={tw("text-2xl font-bold", className)}>{children}</h1>,
        subtitle1: <h2 className={tw("text-lg font-bold", className)}>{children}</h2>,
        subtitle2: <h3 className={tw("text-base font-bold", className)}>{children}</h3>,
        body1: <p className={tw("text-base", className)}>{children}</p>,
        body2: <p className={tw("text-sm", className)}>{children}</p>,
        caption: <p className={tw("text-xs", className)}>{children}</p>,
        overline: <p className={tw("text-xs uppercase", className)}>{children}</p>,
    }

    const linkVariants = {
        h1: <h1><Link href={url || ""} className={tw("text-4xl font-bold text-blue-500", className)}>{children}</Link></h1>,
        h2: <h2><Link href={url || ""} className={tw("text-3xl font-bold text-blue-500", className)}>{children}</Link></h2>,
        h3: <h3><Link href={url || ""} className={tw("text-2xl font-bold text-blue-500", className)}>{children}</Link></h3>,
        h4: <h4><Link href={url || ""} className={tw("text-xl font-bold text-blue-500", className)}>{children}</Link></h4>,
        h5: <h5><Link href={url || ""} className={tw("text-lg font-bold text-blue-500", className)}>{children}</Link></h5>,
        h6: <h6><Link href={url || ""} className={tw("text-base font-bold text-blue-500", className)}>{children}</Link></h6>,
        title: <h1><Link href={url || ""} className={tw("text-2xl font-bold text-blue-500", className)}>{children}</Link></h1>,
        subtitle1: <h2><Link href={url || ""} className={tw("text-lg font-bold text-blue-500", className)}>{children}</Link></h2>,
        subtitle2: <h3><Link href={url || ""} className={tw("text-base font-bold text-blue-500", className)}>{children}</Link></h3>,
        body1: <p><Link href={url || ""} className={tw("text-base text-blue-500", className)}>{children}</Link></p>,
        body2: <p><Link href={url || ""} className={tw("text-sm text-blue-500", className)}>{children}</Link></p>,
        caption: <p><Link href={url || ""} className={tw("text-xs text-blue-500", className)}>{children}</Link></p>,
        overline: <p><Link href={url || ""} className={tw("text-xs uppercase text-blue-500", className)}>{children}</Link></p>,
    }

    return (
        <>
            {url ? linkVariants[variant] : variants[variant]}
        </>
    )
}

export { Typography };