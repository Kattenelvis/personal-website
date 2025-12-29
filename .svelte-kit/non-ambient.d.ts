
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/aero" | "/demo" | "/demo/paraglide" | "/skills";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/aero": Record<string, never>;
			"/demo": Record<string, never>;
			"/demo/paraglide": Record<string, never>;
			"/skills": Record<string, never>
		};
		Pathname(): "/" | "/aero" | "/aero/" | "/demo" | "/demo/" | "/demo/paraglide" | "/demo/paraglide/" | "/skills" | "/skills/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/2040real.mp4" | "/Arch_Linux.png" | "/Hyprland.png" | "/Javascript.png" | "/Linux_Mint.png" | "/NixOS.webp" | "/React_Logo.png" | "/Rotating_Tux.gif" | "/Svelte_Logo.png" | "/TokyoSoft.ttf" | "/Vue_Logo.png" | "/ai_friend.mp4" | "/ena_on_windows.webp" | "/fruitjack.jpg" | "/mysite.mp4" | "/neuropol.ttf" | "/robots.txt" | "/silly.mp4" | string & {};
	}
}