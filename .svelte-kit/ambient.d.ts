
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
	export const VIMRUNTIME: string;
	export const _: string;
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
	export const XDG_SEAT: string;
	export const TERM: string;
	export const MASON: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const XDG_SESSION_TYPE: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const TERMINAL: string;
	export const LOGNAME: string;
	export const XCURSOR_SIZE: string;
	export const OMARCHY_PATH: string;
	export const SDL_IM_MODULE: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const GUM_CONFIRM_UNSELECTED_BACKGROUND: string;
	export const UWSM_WAIT_VARNAMES: string;
	export const GDK_SCALE: string;
	export const XDG_RUNTIME_DIR: string;
	export const NVM_CD_FLAGS: string;
	export const SUDO_EDITOR: string;
	export const HYPRCURSOR_SIZE: string;
	export const WINDOWID: string;
	export const ALACRITTY_LOG: string;
	export const ALACRITTY_SOCKET: string;
	export const NVM_RC_VERSION: string;
	export const MOTD_SHOWN: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const USER: string;
	export const XDG_MENU_PREFIX: string;
	export const STARSHIP_SESSION_KEY: string;
	export const XDG_CONFIG_DIRS: string;
	export const SHELL: string;
	export const XDG_SEAT_PATH: string;
	export const DEBUGINFOD_URLS: string;
	export const GUM_CONFIRM_PROMPT_FOREGROUND: string;
	export const XDG_STATE_HOME: string;
	export const PATH: string;
	export const __MISE_DIFF: string;
	export const XDG_CONFIG_HOME: string;
	export const OLDPWD: string;
	export const __MISE_SESSION: string;
	export const MANAGERPIDFDID: string;
	export const DISPLAY: string;
	export const XDG_CACHE_HOME: string;
	export const GUM_CONFIRM_SELECTED_BACKGROUND: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const XDG_VTNR: string;
	export const SDL_VIDEODRIVER: string;
	export const GUM_CONFIRM_UNSELECTED_FOREGROUND: string;
	export const BAT_THEME: string;
	export const LANG: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const XDG_SESSION_CLASS: string;
	export const XMODIFIERS: string;
	export const NOTIFY_SOCKET: string;
	export const ELECTRON_OZONE_PLATFORM_HINT: string;
	export const MYVIMRC: string;
	export const XDG_DATA_HOME: string;
	export const WAYLAND_DISPLAY: string;
	export const UWSM_FINALIZE_VARNAMES: string;
	export const XDG_DATA_DIRS: string;
	export const HOME: string;
	export const XCOMPOSEFILE: string;
	export const EDITOR: string;
	export const STARSHIP_SHELL: string;
	export const JOURNAL_STREAM: string;
	export const NVM_DIR: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const OZONE_PLATFORM: string;
	export const INVOCATION_ID: string;
	export const NVIM_LOG_FILE: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const QT_STYLE_OVERRIDE: string;
	export const NVIM: string;
	export const XDG_SESSION_ID: string;
	export const XDG_BACKEND: string;
	export const QT_QPA_PLATFORM: string;
	export const COLORTERM: string;
	export const SHLVL: string;
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
		VIMRUNTIME: string;
		_: string;
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
		XDG_SEAT: string;
		TERM: string;
		MASON: string;
		MEMORY_PRESSURE_WATCH: string;
		XDG_SESSION_TYPE: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		TERMINAL: string;
		LOGNAME: string;
		XCURSOR_SIZE: string;
		OMARCHY_PATH: string;
		SDL_IM_MODULE: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		GUM_CONFIRM_UNSELECTED_BACKGROUND: string;
		UWSM_WAIT_VARNAMES: string;
		GDK_SCALE: string;
		XDG_RUNTIME_DIR: string;
		NVM_CD_FLAGS: string;
		SUDO_EDITOR: string;
		HYPRCURSOR_SIZE: string;
		WINDOWID: string;
		ALACRITTY_LOG: string;
		ALACRITTY_SOCKET: string;
		NVM_RC_VERSION: string;
		MOTD_SHOWN: string;
		XDG_CURRENT_DESKTOP: string;
		USER: string;
		XDG_MENU_PREFIX: string;
		STARSHIP_SESSION_KEY: string;
		XDG_CONFIG_DIRS: string;
		SHELL: string;
		XDG_SEAT_PATH: string;
		DEBUGINFOD_URLS: string;
		GUM_CONFIRM_PROMPT_FOREGROUND: string;
		XDG_STATE_HOME: string;
		PATH: string;
		__MISE_DIFF: string;
		XDG_CONFIG_HOME: string;
		OLDPWD: string;
		__MISE_SESSION: string;
		MANAGERPIDFDID: string;
		DISPLAY: string;
		XDG_CACHE_HOME: string;
		GUM_CONFIRM_SELECTED_BACKGROUND: string;
		MOZ_ENABLE_WAYLAND: string;
		XDG_VTNR: string;
		SDL_VIDEODRIVER: string;
		GUM_CONFIRM_UNSELECTED_FOREGROUND: string;
		BAT_THEME: string;
		LANG: string;
		ALACRITTY_WINDOW_ID: string;
		XDG_SESSION_CLASS: string;
		XMODIFIERS: string;
		NOTIFY_SOCKET: string;
		ELECTRON_OZONE_PLATFORM_HINT: string;
		MYVIMRC: string;
		XDG_DATA_HOME: string;
		WAYLAND_DISPLAY: string;
		UWSM_FINALIZE_VARNAMES: string;
		XDG_DATA_DIRS: string;
		HOME: string;
		XCOMPOSEFILE: string;
		EDITOR: string;
		STARSHIP_SHELL: string;
		JOURNAL_STREAM: string;
		NVM_DIR: string;
		MEMORY_PRESSURE_WRITE: string;
		OZONE_PLATFORM: string;
		INVOCATION_ID: string;
		NVIM_LOG_FILE: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		QT_STYLE_OVERRIDE: string;
		NVIM: string;
		XDG_SESSION_ID: string;
		XDG_BACKEND: string;
		QT_QPA_PLATFORM: string;
		COLORTERM: string;
		SHLVL: string;
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
