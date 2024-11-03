"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {

    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if (form) form.reset();
    }
    return (
        <Link href="/">
            <Button className="search-btn text-white" type="reset" onClick={reset}>
                <X className="size-5" />
            </Button>
        </Link>
    )
}

export default SearchFormReset;