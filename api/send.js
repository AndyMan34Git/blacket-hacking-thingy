export default function handler(req, res) {
    if (req.method === "POST") {
        globalThis.latestCode = req.body.code;
        return res.json({ success: true });
    } 
    res.json({ code: globalThis.latestCode || "" });
}
