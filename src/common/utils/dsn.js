const PROJECT_KEY_RE = /^[a-zA-Z0-9]{4,12}$/;

export function validateDsn(dsn) {
    let parsed;

    try {
        parsed = parseDsn(dsn);
    } catch {
        throw new Error("DSN parse failed");
    }

    if (parsed.protocol !== "https") {
        throw new Error("DSN must use https");
    }

    if (!parsed.publicKey || parsed.publicKey.length < 16) {
        throw new Error("Invalid publicKey");
    }

    if (!PROJECT_KEY_RE.test(parsed.projectKey)) {
        throw new Error("Invalid projectKey");
    }

    const allowedParams = ["env", "app", "version"];
    Object.keys(parsed.params).forEach(key => {
        if (!allowedParams.includes(key)) {
            throw new Error(`Invalid DSN param: ${key}`);
        }
    });
}

export function parseDsn(dsn) {
    try {
        const url = new URL(dsn);

        if (!url.username) {
            throw new Error("DSN missing publicKey");
        }

        const projectKey = url.pathname.replace("/", "");
        if (!projectKey) {
            throw new Error("DSN missing projectKey");
        }

        const params = {};
        url.searchParams.forEach((v, k) => {
            params[k] = v;
        });

        return {
            protocol: url.protocol.replace(":", ""),
            host: url.host,
            publicKey: url.username,
            projectKey,
            params
        };
    } catch (e) {
        throw new Error(`Invalid DSN: ${dsn}`);
    }
}
