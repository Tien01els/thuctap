const fetchRSS = async function (url) {
    const data = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2F${url}`);
    return await data.json();
};

export default fetchRSS;
