
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const STARSHIP_SHELL: string;
	export const JOURNAL_STREAM: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const INVOCATION_ID: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const XDG_SESSION_DESKTOP: string;
	export const MANAGERPID: string;
	export const GUM_CONFIRM_SELECTED_FOREGROUND: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const DESKTOP_SESSION: string;
	export const HYPRLAND_CMD: string;
	export const GDK_BACKEND: string;
	export const INPUT_METHOD: string;
	export const PWD: string;
	export const MISE_SHELL: string;
	export const MAIL: string;
	export const SYSTEMD_EXEC_PID: string;
	export const __MISE_ORIG_PATH: string;
	export const QT_IM_MODULE: string;
	export const XDG_SESSION_PATH: string;
	export const SHELL: string;
	export const XDG_SEAT: string;
	export const GUM_CONFIRM_UNSELECTED_BACKGROUND: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const LOGNAME: string;
	export const XCURSOR_SIZE: string;
	export const SDL_IM_MODULE: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const UWSM_WAIT_VARNAMES: string;
	export const GDK_SCALE: string;
	export const XDG_RUNTIME_DIR: string;
	export const _: string;
	export const ALACRITTY_LOG: string;
	export const XDG_SESSION_TYPE: string;
	export const XDG_CONFIG_HOME: string;
	export const MANAGERPIDFDID: string;
	export const OMARCHY_PATH: string;
	export const PATH: string;
	export const XDG_CACHE_HOME: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const LANG: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_HOME: string;
	export const NVM_DIR: string;
	export const EDITOR: string;
	export const NVM_RC_VERSION: string;
	export const OZONE_PLATFORM: string;
	export const NVIM: string;
	export const OLDPWD: string;
	export const MASON: string;
	export const HYPRCURSOR_SIZE: string;
	export const WINDOWID: string;
	export const TERMINAL: string;
	export const ALACRITTY_SOCKET: string;
	export const XDG_BACKEND: string;
	export const MOTD_SHOWN: string;
	export const SUDO_EDITOR: string;
	export const USER: string;
	export const XDG_MENU_PREFIX: string;
	export const UWSM_FINALIZE_VARNAMES: string;
	export const XDG_CONFIG_DIRS: string;
	export const STARSHIP_SESSION_KEY: string;
	export const XDG_SEAT_PATH: string;
	export const NVIM_LOG_FILE: string;
	export const GUM_CONFIRM_PROMPT_FOREGROUND: string;
	export const XDG_STATE_HOME: string;
	export const COLORTERM: string;
	export const __MISE_DIFF: string;
	export const TERM: string;
	export const QT_STYLE_OVERRIDE: string;
	export const __MISE_SESSION: string;
	export const SHLVL: string;
	export const QT_QPA_PLATFORM: string;
	export const XDG_VTNR: string;
	export const DISPLAY: string;
	export const GUM_CONFIRM_UNSELECTED_FOREGROUND: string;
	export const GUM_CONFIRM_SELECTED_BACKGROUND: string;
	export const SDL_VIDEODRIVER: string;
	export const XDG_SESSION_ID: string;
	export const BAT_THEME: string;
	export const VIMRUNTIME: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const XDG_SESSION_CLASS: string;
	export const XMODIFIERS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const ELECTRON_OZONE_PLATFORM_HINT: string;
	export const MYVIMRC: string;
	export const DEBUGINFOD_URLS: string;
	export const WAYLAND_DISPLAY: string;
	export const NOTIFY_SOCKET: string;
	export const XDG_DATA_DIRS: string;
	export const HOME: string;
	export const XCOMPOSEFILE: string;
	export const NODE_ENV: string;
	export const PW_EXPERIMENTAL_SERVICE_WORKER_NETWORK_EVENTS: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		STARSHIP_SHELL: string;
		JOURNAL_STREAM: string;
		MEMORY_PRESSURE_WRITE: string;
		INVOCATION_ID: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		XDG_SESSION_DESKTOP: string;
		MANAGERPID: string;
		GUM_CONFIRM_SELECTED_FOREGROUND: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		DESKTOP_SESSION: string;
		HYPRLAND_CMD: string;
		GDK_BACKEND: string;
		INPUT_METHOD: string;
		PWD: string;
		MISE_SHELL: string;
		MAIL: string;
		SYSTEMD_EXEC_PID: string;
		__MISE_ORIG_PATH: string;
		QT_IM_MODULE: string;
		XDG_SESSION_PATH: string;
		SHELL: string;
		XDG_SEAT: string;
		GUM_CONFIRM_UNSELECTED_BACKGROUND: string;
		MEMORY_PRESSURE_WATCH: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		LOGNAME: string;
		XCURSOR_SIZE: string;
		SDL_IM_MODULE: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		UWSM_WAIT_VARNAMES: string;
		GDK_SCALE: string;
		XDG_RUNTIME_DIR: string;
		_: string;
		ALACRITTY_LOG: string;
		XDG_SESSION_TYPE: string;
		XDG_CONFIG_HOME: string;
		MANAGERPIDFDID: string;
		OMARCHY_PATH: string;
		PATH: string;
		XDG_CACHE_HOME: string;
		MOZ_ENABLE_WAYLAND: string;
		LANG: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_HOME: string;
		NVM_DIR: string;
		EDITOR: string;
		NVM_RC_VERSION: string;
		OZONE_PLATFORM: string;
		NVIM: string;
		OLDPWD: string;
		MASON: string;
		HYPRCURSOR_SIZE: string;
		WINDOWID: string;
		TERMINAL: string;
		ALACRITTY_SOCKET: string;
		XDG_BACKEND: string;
		MOTD_SHOWN: string;
		SUDO_EDITOR: string;
		USER: string;
		XDG_MENU_PREFIX: string;
		UWSM_FINALIZE_VARNAMES: string;
		XDG_CONFIG_DIRS: string;
		STARSHIP_SESSION_KEY: string;
		XDG_SEAT_PATH: string;
		NVIM_LOG_FILE: string;
		GUM_CONFIRM_PROMPT_FOREGROUND: string;
		XDG_STATE_HOME: string;
		COLORTERM: string;
		__MISE_DIFF: string;
		TERM: string;
		QT_STYLE_OVERRIDE: string;
		__MISE_SESSION: string;
		SHLVL: string;
		QT_QPA_PLATFORM: string;
		XDG_VTNR: string;
		DISPLAY: string;
		GUM_CONFIRM_UNSELECTED_FOREGROUND: string;
		GUM_CONFIRM_SELECTED_BACKGROUND: string;
		SDL_VIDEODRIVER: string;
		XDG_SESSION_ID: string;
		BAT_THEME: string;
		VIMRUNTIME: string;
		ALACRITTY_WINDOW_ID: string;
		XDG_SESSION_CLASS: string;
		XMODIFIERS: string;
		XDG_CURRENT_DESKTOP: string;
		ELECTRON_OZONE_PLATFORM_HINT: string;
		MYVIMRC: string;
		DEBUGINFOD_URLS: string;
		WAYLAND_DISPLAY: string;
		NOTIFY_SOCKET: string;
		XDG_DATA_DIRS: string;
		HOME: string;
		XCOMPOSEFILE: string;
		NODE_ENV: string;
		PW_EXPERIMENTAL_SERVICE_WORKER_NETWORK_EVENTS: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
