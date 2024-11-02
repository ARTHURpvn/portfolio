import { Metadata } from "next";
let page = ""
export default function Meta({pageLoc}: {pageLoc: string}) {
    page = pageLoc
    return page
}

export const metadata : Metadata = {
    title: "ARTHURpvn | Inicio",
}