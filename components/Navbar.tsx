import { auth, signIn, signOut } from "@/auth";
import { LogOut, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getInitials } from "@/lib/utils";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session.user ? (
                        <>
                            <Link href="/startup/create">
                                <span className="max-sm:hidden">Create</span>
                                <PlusCircle className="size-6 sm:hidden " />
                            </Link>

                            <form action={async () => {
                                "use server"

                                await signOut()
                            }}>
                                <button type="submit">
                                    <span className="max-sm:hidden">Logout</span>
                                    <LogOut className="size-6 sm:hidden text-red-500 mt-1" />
                                </button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <Avatar
                                    className="size-10"
                                >

                                    <AvatarImage
                                        src={session?.user?.image || "https://placehold.co/48x48"}
                                        alt={session?.user?.name || "username"}
                                    />
                                    <AvatarFallback >{getInitials(session?.user?.name!)}</AvatarFallback>
                                </Avatar>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";

                            await signIn("github")
                        }}>
                            <button type="submit">
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header >
    )
}

export default Navbar;