const allowedOrigin = "https://blacket.org";

export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method === "POST") {
        globalThis.latestCode = req.body.code;
        return res.json({ success: true });
    } 

    res.json({ code: globalThis.latestCode || "" });
}
