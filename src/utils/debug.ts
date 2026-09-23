export let debugUI = (..._args: unknown[]) => {};
export let debugNet = (..._args: unknown[]) => {};
export let debugStore = (..._args: unknown[]) => {};
export let debugProvider = (..._args: unknown[]) => {};

if (import.meta.env.DEV) {
    import('debug').then((module) => {
        const debug = module.default;
        debug.enable('app:*');

        debugUI = debug('app:ui');
        debugNet = debug('app:network');
        debugStore = debug('app:store');
        debugProvider = debug('app:provider');
    });
}

