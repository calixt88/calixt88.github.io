import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
	ReactLogoIcon,
	TriangleCircleIcon

} from "@/components/icons";

import { Logo } from "@/components/icons";
import { button as buttonStyles } from "@nextui-org/theme";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="pt-4">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2229" viewBox="1.008 18.463 180 160.509"><title>Slice 1</title><path fill="#F4A93F" d="M80.95 76l19.202 33.45-24.243-.872L80.95 76z"/><path fill="#F4A83E" d="M90.16 82.4l14.234 27.05-29.091-.872L90.16 82.4z"/><path fill="#E88634" d="M87.489 87.038L99.94 109.45l-24.333-.243 11.882-22.169z"/><path fill="#F8CA51" d="M100.546 84.758l3.849 24.692L75 109.152l25.546-24.394z"/><path fill="#F8CA51" d="M90.16 117l14.555-7.848L75 108.875 90.16 117z"/><path fill="#E88634" d="M1.008 98C1.643 118.712 41.69 135 91 135v-8.002C51.309 126.8 9.675 114.643 9.008 98h-8z"/><path fill="#F9CB52" d="M135.523 21.782c-18.254-9.806-52.383 16.733-77.04 59.436l6.93 4.001c20.016-34.275 51.363-64.252 66.109-56.508l4.001-6.929z"/><path fill="#E88634" d="M1.008 98C1.643 77.288 41.69 61 91 61v8.002C51.309 69.2 9.675 81.358 9.008 98h-8z"/><path fill="#F4A73E" d="M46.043 20c-17.62 10.906-11.702 53.732 12.953 96.436l6.93-4.002C46.251 77.963 35.964 35.827 50.043 26.93l-4-6.93z"/><path fill="#F9CB52" d="M46.043 176.436C28.423 165.53 34.34 122.703 58.996 80l6.93 4.001c-19.675 34.472-29.962 76.608-15.883 85.506l-4 6.929z"/><path fill="#F4A73E" d="M45 20.5c18.255-9.806 52.384 16.732 77.04 59.436l-6.931 4C95.093 49.662 63.746 19.687 49 27.43l-4-6.93z"/><path fill="#E88634" d="M181 98c-.635-20.712-40.684-37-89.992-37v8.002C130.698 69.2 172.333 81.358 173 98h8z"/><path fill="#F9CB52" d="M45.241 176.501c.107.065.214.129.322.19 18.143 10.476 52.623-16.146 77.476-59.191l-6.893-4.066c-20.174 34.58-51.899 64.808-66.501 56.377a9.81 9.81 0 0 1-.437-.267l-3.967 6.957z"/><path fill="#F4A73E" d="M136.036 175.938C117.779 185.738 83.653 159.2 59 116.5l-.26-.45 6.836-4.159c19.984 34.502 51.585 64.862 66.431 57.133l4.029 6.914z"/><path fill="#E88634" d="M181 97c.005.166.008.333.008.5 0 20.95-40.295 37.5-90 37.5v-8.002c40.012-.198 82-12.555 82-29.403a9.8 9.8 0 0 0-.018-.595H181z"/><path fill="#F4A73E" d="M135.005 176.43c17.608-10.914 11.688-53.734-12.962-96.43l-.439-.76-7.022 3.835.047.082c19.952 34.558 30.521 77.214 16.45 86.298l3.926 6.975z"/><path fill="#F9CB52" d="M135.48 21.282c17.619 10.906 11.701 53.733-12.953 96.436l-6.93-4.001c19.676-34.472 29.961-76.608 15.883-85.506l4-6.929z"/></svg>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ variant: "bordered", radius: "full", color: "warning", size: "lg"})}
				>
					About
				</Link>
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ variant: "bordered", radius: "full", color: "warning", size: "lg"})}
				>
					Projects
				</Link>
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ variant: "bordered", radius: "full", color: "warning", size: "lg"})}
				>
					Skills
				</Link>
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ variant: "bordered", radius: "full", color: "warning", size: "lg"})}
				>
					Contact
				</Link>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>
		</NextUINavbar>
	);
};
