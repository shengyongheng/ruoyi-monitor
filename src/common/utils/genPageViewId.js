// import md5 from 'blueimp-md5';

export function genPageViewId() {
    const url = location.protocol + '//' + location.hostname + location.pathname;
    const query = new URLSearchParams(location.search);
    const sortedQueryString = [...query.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([k, v]) => `${k}=${v}`)
        .join('&');

    const canonicalURL =
        url +
        (sortedQueryString ? '?' + sortedQueryString : '') +
        (location.hash || '');

    return canonicalURL;
    // return md5(canonicalURL).slice(0, 12); // 截短以降低存储成本
}
